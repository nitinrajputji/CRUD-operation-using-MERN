require("dotenv").config();
const express = require("express");

require("./db/conn");
const app = express();

const port = process.env.PORT || 8000;
app.use(express.json());
app.use(require("./controller/route"));

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
}

app.listen(port, () => {
  console.log(`listing to the port no. ${port}`);
});
