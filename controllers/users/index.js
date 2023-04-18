const register = require('./register');
const verifyEmail = require('./verifyEmail');
const resendVerificationEmail = require('./resendVerificationEmail');
const login = require('./login');
const logout = require('./logout');
const getCurrent = require('./getCurrent');
const updateSubscription = require('./updateSubscription');
const updateAvatar = require('./updateAvatar');

module.exports = {
  register,
  verifyEmail,
  resendVerificationEmail,
  login,
  getCurrent,
  logout,
  updateSubscription,
  updateAvatar,
};
