const express = require('express');

const { auth, validationBody, upload } = require('../../middleware/');
const { users: controller } = require('../../controllers');
const {
  userSignUpSchemaJoi,
  userSignInSchemaJoi,
  emailSchemaJoi,
  userUpdateSubscribtionSchemaJoi,
} = require('../../models/user');

const router = express.Router();

// sign up
router.post(
  '/register',
  validationBody(userSignUpSchemaJoi),
  controller.register
);

// verify email
router.get('/verify/:verificationToken', controller.verifyEmail);

// resend verification email
router.post(
  '/verify',
  validationBody(emailSchemaJoi),
  controller.resendVerificationEmail
);

// sign in
router.post('/login', validationBody(userSignInSchemaJoi), controller.login);

router.get('/current', auth, controller.getCurrent);

// sign out
router.post('/logout', auth, controller.logout);

// update
router.patch(
  '/',
  auth,
  validationBody(userUpdateSubscribtionSchemaJoi),
  controller.updateSubscription
);

router.patch(
  '/avatars',
  auth,
  upload.single('avatar'),
  controller.updateAvatar
);

module.exports = router;
