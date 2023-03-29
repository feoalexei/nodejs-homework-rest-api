const { Contact } = require('../../models/contact');

const { controllerWrapper } = require('../../utils');

const getAllContacts = async (_, res) => {
  const contacts = await Contact.find({}, '-createdAt -updatedAt');
  res.json({
    status: 'success',
    code: 200,
    data: {
      result: contacts,
    },
  });
};

module.exports = controllerWrapper(getAllContacts);
