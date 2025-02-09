const express = require("express");
const app = express();
var morgan = require('morgan')
app.use(morgan('tiny'))

const persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/api/info", (req, res) => {
  const timestamp = new Date().toLocaleString();

  res.send(
    `<p>Phonebook has info for ${
      persons.length + 1
    } people</p> <p>${timestamp}</p>`
  );
});

app.get('/api/persons/:id',(req, res)=>{
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    if(person){
        res.json(person)
    }else{
        res.status(404).end()
    }
})

app.delete('/api/perons/:id',(req, res)=>{
    const id = NUmber(req.paramas.id)
    persons = persons.filter(person => person.id !== id)
    res.status(204).end()
})

app.post('/api/persons',(req, res)=>{
    const note = req.body
    note.id = Math.floor(Math.random() * 1000000)
    persons = persons.concat(note)
    res.json(note)
})



const PORT = 3001;

app.listen(PORT, () => {
  console.log("server is running");
});
