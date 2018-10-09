let express = require('express');
let app = express();

app.get('/', (req, res) => {
  res.send(`Hi there, welcome to my assignment`);
});

app.get('/speak/:animal', (req, res) => {
  let sounds = {
    cow: "Moo",
    pig: "Oink",
    dog: "Woof Woof",
    cat: "I hate you human",
    goldfish: "...",
  }
  let {animal} = req.params
  let sound = sounds[animal.toLowerCase()];

  res.send(`The ${animal} says ${sound}`);
});

app.get('/repeat/:hello/:number', (req, res) => {
  // let hello = req.params.hello;
  // let number = req.params.number;
  const {hello, number} = req.params;
  let n = Number.parseInt(number);


  let output = "";
    for(let i = 0; i < n; i++) {
      output += `${hello}\t`
    }
    res.send(output);
});

app.get('*', (req, res) => {
  res.send(`Sorry, page not found ..what are you doing with your life?`);
});


app.listen(4000, () => {
  console.log('App listening on port 4000!');
});