module.exports = function (express) {
  var router = express.Router();
  var passport = require('passport');

  router.use(passport.initialize());
  router.use(passport.session());

  let userController = require('../controller/user.controller')(express);

  router.use('/users', userController);

  return router;
};
