// const http = require("http")

// const port = 1337
// const host = "localhost"

// const server = http.createServer((request, response) => {
//   response.writeHead(200)
//   response.write(request.headers.host)
//   response.end()
// })

// server.listen(port, host, () => {
//   console.log(`Running server on http://${host}:${port}`)
// })

const express = require("express")
const app = express()
const port = process.env.port || 1337

app.get("/", (req, res) => {
  console.log(req)
  // res.sendFile("faz_mug.jpg", {
  //   root: "./images"
  // })
  res.send("Hello")
})

app.listen(port, () => {
  console.log(`Running server on http://localhost:${port}`)
})