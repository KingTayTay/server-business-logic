import pino from "pino";

export const options = {
  level: process.env.LOG_LEVEL || "info",
  redact: [
    "req.headers.authorization",
    "error.gotOptions.headers.authorization",
  ],
  customLevels: { development: 19, production: 29, test: 61 },
};

const logger = pino(options);

export default logger;
