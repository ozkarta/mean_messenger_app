module.exports.chatRoteHandler = (express) => {
  let router = express.Router();

  router.get('/chatlist', (req, res) => {
    return res.status(200).json({});
  });

  return router;
};
