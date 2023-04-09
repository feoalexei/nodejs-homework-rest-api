const { HttpError } = require('../../utils');
const { controllerWrapper } = require('../../utils');
const { Contact } = require('../../models/contact');

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  const { _id } = req.user;
  const result = await Contact.findOneAndUpdate(
    {
      _id: contactId,
      owner: _id,
    },
    req.body,
    { new: true }
  );
  if (!result) {
    throw HttpError(404, `No results for contact with id ${contactId}`);
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = controllerWrapper(updateStatusContact);
