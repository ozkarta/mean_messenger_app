let User = require('../model/user.model').model;
let Chat = require('./ws-models/chat.model').model;
let ChatMessage = require('./ws-models/chat-message.model').model;
let async = require('async');

module.exports.chatRoteHandler = (express) => {
  let router = express.Router();

  router.get('/chat-list', (req, res) => {
    let userId = req.query.userId;

    User.findById(
      userId
    )
      .populate([
        {
          path: 'chats',
          populate: [
            {
              path: 'participants'
            },
            {
              path: 'messages'
            }
          ]
        }

      ])
      .lean()
      .exec()
      .then(user => {
        if (user && user.chats && user.chats) {
          return res.status(200).json({userId: userId, chats: user.chats});
        } else {
          // TODO send empty array
          return res.status(200).json({userId: userId, chats: []});

        }
      })
      .catch(error => {
        console.dir(error);
      })

  });

  router.post('/create-chat', (req, res) => {
    let chat = new Chat(req.body);

    chat.save()
      .then(savedChat => {
        async.each(savedChat.participants, (user, callback) => {
          User.findOneAndUpdate(
            {'_id': user},
            {$push: {chats: savedChat['_id']}},
            {new: true}
          ).then(updatedUser => {
            callback();
          })
            .catch(error => {
              console.dir(error);
            });
        }, (error) => {
          res.status(200).json({})
        })
      })
      .catch(error => {
        console.dir(error);
      });
  });

  return router;
};
