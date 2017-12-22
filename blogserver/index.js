/* eslint-disable */

var express = require('express');
var application = express();

var cors = require('cors');
var posts = require('./data').posts;

application.use(cors());

application.get('/', function (req, res) {
  res.json(posts);
});

application.get('/posts/:id', function(req, res) {
  res.json(posts[req.params.id - 1]);
});

application.post('/', function (req, res) {
  post = posts[req.query['id'] - 1];
  post.likesCounter += 1;
  res.send(post);
});

application.listen(3001, function () {
  console.log('Server on 3001');
});
