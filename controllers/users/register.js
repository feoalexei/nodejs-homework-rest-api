const { HttpError } = require('../../utils');
const { controllerWrapper } = require('../../utils');
const { User } = require('../../models');

const register = async (req, res) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, `Email ${email} in use`);
  }

  const newUser = new User({ email, password, subscription });

  newUser.setPassword(password);
  newUser.save();

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
