const express = require('express');

const { auth, validationBody, isValidId } = require('../../middleware/');
const { schemas } = require('../../models/contact');
const { contacts: controller } = require('../../controllers');

const router = express.Router();

router.get('/', auth, controller.getAllContacts);

router.get('/:contactId', auth, isValidId, controller.getContactById);

router.post(
  '/',
  auth,
  validationBody(schemas.contactAddSchema),
  controller.addContact
);

router.put(
  '/:contactId',
  auth,
  isValidId,
  validationBody(schemas.contactAddSchema),
  controller.updateContact
);

router.patch(
  '/:contactId/favorite',
  auth,
  isValidId,
  validationBody(schemas.contactUpdateStatusSchema),
  controller.updateStatusContact
);

router.delete('/:contactId', auth, isValidId, controller.deleteContact);

module.exports = router;
