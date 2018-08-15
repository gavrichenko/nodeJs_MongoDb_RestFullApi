const mongoose = require('mongoose'),
  Flowers = mongoose.model('Flowers');


exports.list_all_flowers = function(req, res) {
  Flowers.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.create_a_flower = function(req, res) {
  const new_task = new Flowers(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};