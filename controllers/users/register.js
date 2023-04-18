const gravatar = require('gravatar');
const { nanoid } = require('nanoid');

const { HttpError, controllerWrapper, sendEmail } = require('../../utils');
const { User } = require('../../models');
const { BASE_URL } = process.env;

const register = async (req, res) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, `Email ${email} in use`);
  }

  const avatarURL = gravatar.url(email);
  const verificationToken = nanoid(6);

  const newUser = new User({
    email,
    password,
    subscription,
    avatarURL,
    verificationToken,
  });

  newUser.setPassword(password);
  newUser.save();

  const verifyEmail = {
    to: email,
    subject: 'Verify email',
    html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${verificationToken}">Confirm email</a>`,
  };

  await sendEmail(verifyEmail);

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: {
        email,
        subscription,
      },
    },
  });
};

module.exports = controllerWrapper(register);
