const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("client"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT || port, () => {
  console.log(`running on port ${port}`);
});
