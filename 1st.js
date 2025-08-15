const express = require("express");
const app = express();
const port = 3000;

// Set EJS as view engine
app.set("view engine", "ejs");

// Route
app.get("/", (req, res) => {
  res.render("index", { foo: "FOO" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});