const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//listening to http request at the base url. Looks for the get method request
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//displaying additional text when /datarep is added to the url
app.get('/datarep', (req, res) => {
    res.send('Hello World from datarep!')
  })

  //displaying json information
  app.get('/api/books', (req, res) => {
      const books = [
        {
        "title": "Learn Git in a Month of Lunches",
        "isbn": "1617292419",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
        "status": "MEAP",
        "authors": ["Rick Umali"],
        "categories": []
        },
        {
        "title": "MongoDB in Action, Second Edition",
        "isbn": "1617291609",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
        "status": "MEAP",
        "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"
        ],
        "categories": []
        },
        {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl":
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
        }
            ];
        
    res.status(200).json({
        mybooks:books
    })
  })

//adding :name as a parameter and displaying it at /hello/(name)
  app.get('/hello/:name', (req, res) => {
      console.log(req.params.name);
    res.send('Hello ' + req.params.name)
  })

  //displaying a html page at /test from index.html
  app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })

//getting the 'get' form information from the html 
  app.get('/name', (req, res) => {
  res.send('Hello ' + req.query.fname + " " + req.query.lname + ' from GET')
})

//getting the 'post method' information from the html
app.post('/name', (req, res) => {
    console.log(req.body);
    res.send('Hello ' + req.body.fname + ' ' + req.body.lname + ' from POST')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})