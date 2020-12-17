const { search } = require("../models/search.models");

module.exports = (req, res) => {
  const queryObj = req.query;
  console.log(queryObj);
  search(queryObj, (err, data) => {
    if (err) throw err;
    else res.send(data);
  });
};
