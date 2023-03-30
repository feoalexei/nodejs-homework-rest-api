const { isValidObjectId } = require('mongoose');

const isValidId = (req, res, next) => {
  const { contactId: id } = req.params;
  const isCorrectId = isValidObjectId(id);
  if (!isCorrectId) {
    const error = new Error();
    error.status = 400;
    error.message = `${id} has incorrect ID format`;
    next(error);
  }
  next();
};

module.exports = isValidId;
