const express = require('express')
const app = express()
const port = 2222

// serving static file
app.use(express.static('public', {
  setHeaders: (res, path, stat) => {
    if(path.endsWith(".wasm")) {
      res.set('Content-Type', 'application/wasm')
    }
  }
}))

app.listen(port, () => console.log(`Running on ${port}`))

