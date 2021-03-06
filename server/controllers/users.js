const {
  User,
  search,
  updateUser,
  likeSong,
  getLikedSongsForUser,
} = require("../models/users");

const signup = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!!",
    });
  }

  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    timestamp: req.body.timestamp,
  });

  newUser.create(newUser, (err, data) => {
    if (err) res.status(500).send(err);
    else res.send(data);
  });
};

const login = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const user = new User({
    email: req.body.email,
    password: req.body.password,
  });

  user.login(user, (err, data) => {
    if (err) res.status(500).send(err);
    else res.send(data);
  });
};

const searchUser = (req, res) => {
  const queryObj = req.query.id;
  search(queryObj, (err, data) => {
    if (err) throw err;
    else res.send(data);
  });
};

const update = (req, res) => {
  updateUser(req.body, (err, data) => {
    if (err) {
      console.log(err);
      res.send({ message: err.message });
    } else res.send(data);
  });
};

const like = (req, res) => {
  console.log(req.body);
  likeSong(req.body, (err, data) => {
    if (err) {
      console.log(err);
      res.send({ message: err.message });
    } else res.send(data);
  });
};

const getUsersLikes = (req, res) => {
  getLikedSongsForUser(req.query.id, (err, data) => {
    if (err) {
      console.log(err);
      res.send({ message: err.message });
    } else res.send(data);
  });
};
module.exports = { signup, login, searchUser, update, like, getUsersLikes };
