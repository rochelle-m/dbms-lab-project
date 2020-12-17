const { search } = require("../models/search.models");

module.exports = (req, res) => {
  const searchValue = req.query.val;
  search(searchValue, (err, data) => {
    if (err) throw err;
    else res.send(data);
  });
};
