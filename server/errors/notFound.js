const { CustomAPIError } = require("./customError");
const httpStatusCodes = require("./httpStatusCodes");

const notFoundError = (message = "Not found") => {
  return new CustomAPIError(message, httpStatusCodes.NOT_FOUND);
};

module.exports = notFoundError;
