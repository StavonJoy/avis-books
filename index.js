const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('public'))

app.listen(3000,() => {
  console.log("App listening on port 3000")
})

app.get('/', (req,res)=>{
  res.sendFile(path.resolve(__dirname,'index.html'))
})

app.get('/about', (req,res)=>{
  res.sendFile(path.resolve(__dirname,'about.html'))
})

app.get('/books', (req,res)=>{
  res.sendFile(path.resolve(__dirname,'books.html'))
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