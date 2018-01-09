/* eslint-disable */

var express = require('express');
var application = express();

var cors = require('cors');
var posts = require('./data').posts;

var filter = require('lodash');

application.use(cors());

function filterPosts(posts, name) {
  if (!name) {
    return posts;
  } else {
    var query = RegExp(name, 'i');
    return posts.filter(post => post.title.match(query));
  };
}

application.get('/', function (req, res) {
  var {name} = req.query;
  postsToReturn = filterPosts(posts, name);
  res.json(postsToReturn);
});

application.get('/posts/:id', function(req, res) {
  res.json(posts[req.params.id - 1]);
});

application.post('/posts/:id/like', function (req, res) {
  var post = posts[req.query['id'] - 1];
  post.likesCounter += 1;
  res.send(post);
});

application.listen(3001, function () {
  console.log('Server on 3001');
});
