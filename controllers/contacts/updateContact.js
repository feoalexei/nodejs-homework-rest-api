const { Contact } = require('../../models/contact');

const { controllerWrapper } = require('../../utils');

const updateContact = async (req, res) => {
  const { contactId: id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    const error = new Error(`No results for contact with id ${id}`);
    error.status = 404;
    throw error;
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = controllerWrapper(updateContact);
