const express = require("express");
const routes = require("./routes.js");
const cors = require("cors");
const app = express();

const port = 3000;
app.use(express.json());
app.use(cors());
app.use(routes);

app.get("/", (req, res) => {
  res.send("hello word");
});

app.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`);
});
