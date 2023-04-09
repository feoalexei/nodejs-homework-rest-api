const { HttpError } = require('../../utils');
const { controllerWrapper } = require('../../utils');
const { Contact } = require('../../models/contact');

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const { _id } = req.user;
  const contact = await Contact.findOneAndDelete({
    _id: contactId,
    owner: _id,
  });
  if (!contact) {
    throw HttpError(
      404,
      `A contact with id ${contactId} can't be deleted as it was not found`
    );
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
