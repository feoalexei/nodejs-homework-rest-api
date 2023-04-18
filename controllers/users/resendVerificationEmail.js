const { User } = require('../../models');
const { controllerWrapper, HttpError, sendEmail } = require('../../utils');

const { BASE_URL } = process.env;

const resendVerificationEmail = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(401, `Email not found`);
  }

  if (user.verify) {
    throw HttpError(400, `Verification has already been passed`);
  }

  const verifyEmail = {
    to: email,
    subject: 'Verify email',
    html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${user.verificationToken}">Confirm email</a>`,
  };

  await sendEmail(verifyEmail);

  res.status(200).json({
    status: 'success',
    code: 200,
    message: 'Verification email was sent',
  });
};

module.exports = controllerWrapper(resendVerificationEmail);
