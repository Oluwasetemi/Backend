let express = require('express');
let app = express();
// let bodyParser = express.bodyParser();
let bodyParser = require('body-parser');


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

let friends = ['ayo','ade','bola','kent', 'kolade'];

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/fallinlovewith/:thing', (req, res) => {
  // let thing = req.params.thing;
  let { thing } = req.params
  res.render('love', { thing });
});

app.get('/posts', (req, res) => {
  const posts = [
    {title: "Post 1", author: "Susy"},
    {title: "Post 2", author: "Scoot"},
    {title: "Post 3", author: "CoryHouse"}
  ];
  res.render('post', {posts});
});

app.get('/friends', (req, res) => {
  res.render('friends', {friends});
});

app.post('/addfriends', (req, res) => {
  const {newfriend} = req.body.friend
  // const newFriend = req.body.newfriend;
  friends.push(newfriend);
  res.redirect('friends');
});

app.listen(3000, () => {
  console.log(`App listening on port ${3000}!`);
});