const { controllerWrapper } = require('../../utils');
const { Contact } = require('../../models/contact');

const getAllContacts = async (req, res) => {
  const { _id } = req.user;
  const { page = 1, limit = 10, favorite } = req.query;
  const skip = (page - 1) * limit;
  const contacts = await Contact.find(
    { owner: _id, ...(favorite ? { favorite } : {}) },
    '-createdAt -updatedAt',
    {
      skip,
      limit,
    }
  ).populate('owner', '_id email');

  res.json({
    status: 'success',
    code: 200,
    data: {
      result: contacts,
    },
  });
};

module.exports = controllerWrapper(getAllContacts);
