const express = require("express");
const app = express();
const router = require("./router/index");
const cors = require("cors");

const five = require("johnny-five");
const board = new five.Board();

const PORT = 8081;

app.use(cors());
app.use(router);

function runApp() {
  app.listen(PORT, () => {
    console.log(`listen in http://localhost:${PORT}`);
  });
}

board.on("ready", runApp);
