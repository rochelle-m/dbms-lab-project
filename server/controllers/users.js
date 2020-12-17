const User = require("../models/users.model.js");

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

module.exports = { signup, login };
