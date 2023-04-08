const express = require('express');

const { auth, validationBody } = require('../../middleware/');
const { users: controller } = require('../../controllers');
const {
  userSignUpSchemaJoi,
  userSignInSchemaJoi,
  userUpdateSubscribtionSchemaJoi,
} = require('../../models/user');

const router = express.Router();

router.post(
  '/register',
  validationBody(userSignUpSchemaJoi),
  controller.register
);
router.post('/login', validationBody(userSignInSchemaJoi), controller.login);

router.get('/current', auth, controller.getCurrent);

router.post('/logout', auth, controller.logout);

router.patch(
  '/',
  auth,
  validationBody(userUpdateSubscribtionSchemaJoi),
  controller.updateSubscription
);

module.exports = router;
