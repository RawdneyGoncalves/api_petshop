const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const PORT = process.env.PORT || 8000;
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
var corsOptions = {
  origin: "http://localhost:8000",
};
require("./database");
//
app.use(morgan("dev"));
app.use(express.json());
app.use("/", require("./src/routes/main.routes"));

app.listen(PORT, () => {
  console.log(`SERVIDOR RODANDO NA PORTA ${PORT}`);
});
