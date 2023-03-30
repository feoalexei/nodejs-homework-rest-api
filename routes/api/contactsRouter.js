const express = require('express');

const { validationBody, isValidId } = require('../../middleware/');
const { schemas } = require('../../models/contact');
const { contacts: controller } = require('../../controllers');

const router = express.Router();

router.get('/', controller.getAllContacts);

router.get('/:contactId', isValidId, controller.getContactById);

router.post('/', controller.addContact);

router.post(
  '/',
  validationBody(schemas.contactAddSchema),
  controller.addContact
);

router.put(
  '/:contactId',
  isValidId,
  validationBody(schemas.contactAddSchema),
  controller.updateContact
);

router.patch(
  '/:contactId/favorite',
  isValidId,
  validationBody(schemas.contactUpdateStatusSchema),
  controller.updateStatusContact
);

router.delete('/:contactId', isValidId, controller.deleteContact);

module.exports = router;
