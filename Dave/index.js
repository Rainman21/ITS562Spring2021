const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


app.use("/", express.static(__dirname ));
//app.use("/pages", express.static(__dirname + "/pages"));
//app.use("/scripts", express.static(__dirname + "/scripts"));
//app.use("/data", express.static(__dirname + "/data"));
//app.use("/node_modules", express.static(__dirname + "/node_modules"));