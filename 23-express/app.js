let express = require('express');
let app = express();

app.get('/', (req, res) => {
  res.send("Hi there!");
});
app.get('/dog', (req, res) => {
  res.send("Bark!");
});
app.get('/cat', (req, res) => {
  res.send("meeew");
});
app.get('/r/:subredditName', (req, res) => {
  console.log(req.params.subredditName);

  res.send("A new page with /r");
});
app.get('/r/:subredditName/:id/:username', (req, res) => {
  let {subredditName, id, username} = req.params
  console.log({subredditName, id, username});

  res.json({subredditName, id, username});
});
app.get('*', (req, res) => {
  console.log(req.headers["user-agent"]);
  res.statusCode = '401'
  res.send('error page');
});


app.listen(3000, () => {
  console.log('App listening on port 3000!');
});