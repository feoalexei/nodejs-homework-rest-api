const { Contact } = require('../../models/contact');

const { controllerWrapper } = require('../../utils');

const getContactById = async (req, res) => {
  const { contactId: id } = req.params;
  const contact = await Contact.findById(id);
  console.log(contact);
  if (!contact) {
    const error = new Error(`No results for contact with id ${id}`);
    error.status = 404;
    throw error;
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
