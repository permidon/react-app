/* eslint-disable */

var express = require('express');
var application = express();

var cors = require('cors');
var posts = require('./data').posts;

var _ = require('lodash');

application.use(cors());

function filterPosts(posts, name) {
  if (!name) {
    return posts;
  }
  var q = RegExp(name, 'i');
  return _.filter(posts, function(p) {
    return p.title.match(q);
  });
}

application.get('/', function (req, res) {
  var {name} = req.query;
  let postsToReturn = posts;
  postsToReturn = filterPosts(postsToReturn, name);
  res.json(postsToReturn);
});

application.get('/posts/:id', function(req, res) {
  res.json(posts[req.params.id - 1]);
});

application.post('/', function (req, res) {
  var post = posts[req.query['id'] - 1];
  post.likesCounter += 1;
  res.send(post);
});

application.listen(3001, function () {
  console.log('Server on 3001');
});
