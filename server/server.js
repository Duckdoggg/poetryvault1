const express = require('express') 
const cors = require('cors')
const fs = require("fs") 


// Load data from JSON file into memory
const rawData = fs.readFileSync("server/poems.json")
const data = JSON.parse(rawData)

const app = express() 
app.use(cors())
app.use(express.json()) 

app.use(express.static('build'))


app.get('/api/poems', (req, res) => {
    res.json(data.poems)
})

app.post('/api/poems', (req, res) => {
  const body = req.body
  console.log(body)
  const newPoem = {
      title: body.title,
      author: body.author,
      text: body.text,
      id: data.poems.length   
  }
  data.poems.push(newPoem) 
  res.json(newPoem)
})

app.get('/api/poems/:id', (req, res) => {
  const id = Number(req.params.id)
  const poem = data.poems.filter(p => p.id === id)[0]
  // return a 404 if there is no such poem
  if (poem) {
    res.json(poem)
  } else {
    res.status(404)
    res.send("<h1>Poem not found.</h1>")
  }
})



app.put('/api/poems/:id', (req, res) => {
  const newPoem = req.body
  const id = Number(req.params.id)
  data.poems = data.poems.map(e => id === e.id ? newPoem : e)
  console.log("updated", newPoem)
  res.json(newPoem)
})

app.post('/api/poems/:id', (req, res) => {
  const id = Number(req.params.id)
  const poem = data.poems.filter(p => p.id === id)[0]
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})