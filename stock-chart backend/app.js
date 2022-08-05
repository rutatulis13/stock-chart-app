const express = require('express')
const app = express()
const port = 3005
const cors = require('cors')
const mysql = require('mysql')

console.log('Node is working')

app.use(
  express.urlencoded({
    extanded: true,
  }),
)

app.use(express.json())

app.use(cors())
app.post('/', (req, res) => {
  console.log(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
