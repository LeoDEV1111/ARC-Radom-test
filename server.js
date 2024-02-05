const express = require('express')
const bodyParser = require('body-parser');
const util = require('util')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = 9999

// Generated when creating the webhook endpoint in the Radom dashboard
const verificationKey = "OTUyYjMwMjItYzE4My00ODViLWJmNTgtOTk2ZTU3YTk0MmM1YWUxMzA2ZmItMTY3OC00MzU1LTk0YWItZDRlYzljYjk0MjI1"

app.post('/webhook', (req, res) => {
  if (req.headers["radom-verification-key"] != verificationKey) {
    return res.sendStatus(401)
  }

  console.log(util.inspect(req.body, false, null, true /* enable colors */))

  res.sendStatus(200)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})