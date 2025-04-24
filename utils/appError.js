class AppError extends Error {
  constructor(message, code) {
    super(message);

    this.code = code;
    this.isOperational = true;
  }
}

module.exports = AppError;
