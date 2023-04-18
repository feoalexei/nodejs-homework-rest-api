const { User } = require('../../models');
const { controllerWrapper } = require('../../utils');
const { HttpError } = require('../../utils');

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;

  const user = await User.findOne({ verificationToken });

  if (!user) {
    throw HttpError(401, `Email not found`);
  }
  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: '',
  });

  res.status(200).json({
    status: 'success',
    code: 200,
    message: 'Email has been succesfully verified',
  });
};

module.exports = controllerWrapper(verifyEmail);
