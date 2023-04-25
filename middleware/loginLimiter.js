const rateLimit = require("express-rate-limit");
const { logEvents } = require("./logger");

const loginLimiter = rateLimit({
  windowMs: 60 * 1000, // 1minute
  max: 5, //each ip to 5 login request per window per min
  message: {
    message: "Too many login attempts, please try again after 60 second",
  },
  handler: (req, res, next, options) => {
    logEvents(
      `Too many requests: ${options.message.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
      "errLog.log"
    );
    res.status(options.statusCode).send(options.message);
  },
  standardHeaders: true, //return rate limit info in the RateLimit header
  legacyHeader: false, // disable the X-RateLimit headers
});

module.exports = loginLimiter;
