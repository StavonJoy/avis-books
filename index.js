const express = require('express')
const app = express()
const path = require('path')

const ejs = require('ejs')
app.set('view engine','ejs')

app.use(express.static('public'))

app.listen(3000,() => {
  console.log("App listening on port 3000")
})

app.get('/', (req,res)=>{
  res.render('index')
})

app.get('/about', (req,res)=>{
  res.render('about')
})

app.get('/books', (req,res)=>{
  res.render('books')
})

app.get('/amongus', (req,res)=>{
  res.render('amongus')
})


// const server = http.createServer((req, res) => {
//   console.log(req.url)
//   if(req.url === '/about')
//     res.end(aboutPage)
//   else if(req.url === '/books')
//     res.end(booksPage)
//   else if(req.url === '/')
//     res.end(homePage)
//   else {
//     res.writeHead(404)
//     res.end(notFoundPage)
//   }
// })

// server.listen(3000)