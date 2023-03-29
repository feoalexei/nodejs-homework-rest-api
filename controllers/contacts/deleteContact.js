const { Contact } = require('../../models/contact');

const { controllerWrapper } = require('../../utils');

const deleteContact = async (req, res) => {
  const { contactId: id } = req.params;
  const contact = await Contact.findByIdAndRemove(id);
  if (!contact) {
    const error = new Error(
      `A contact with id ${id} can't be deleted as it was not found`
    );
    error.status = 404;
    throw error;
  }
  res.json({
    status: 'success',
    code: 200,
    message: 'contact deleted',
    data: {
      result: contact,
    },
  });
};

module.exports = controllerWrapper(deleteContact);
