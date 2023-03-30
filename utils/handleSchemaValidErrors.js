const handleSchemaValidErrors = (error, _, next) => {
  if (error.name === 'ValidationError') {
    error.status = 400;
  }
  next();
};

module.exports = handleSchemaValidErrors;
