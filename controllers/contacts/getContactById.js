const { HttpError } = require('../../utils');
const { controllerWrapper } = require('../../utils');
const { Contact } = require('../../models/contact');

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findById(contactId);
  console.log(contact);
  if (!contact) {
    throw HttpError(404, `No results for contact with id ${contactId}`);
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result: contact,
    },
  });
};

module.exports = controllerWrapper(getContactById);
