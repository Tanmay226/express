const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// this code use for link public folder
app.use(express.static(path.join(__dirname, "static")));
app.use("/", require(path.join(__dirname, router/bloger.js)))

app.listen(port, () => {
  console.log(`Blog app listening on port ${port}`);
});
