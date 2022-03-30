const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");

const five = require("johnny-five");
const board = new five.Board();

const PORT = 8081;

app.use(cors());

router.get("/relay/:value", (req, res, next) => {
  const value = req.params.value == "1" ? true : false;
  const relay = new five.Relay(10, "NC");
  if (value) {
    relay.close();
    res.status(200).json({ message: "Open relay", active: true });
  } else {
    relay.open();
    res.status(200).json({ message: "Closed relay", active: false });
  }
});

app.use(router);

function runApp() {
  app.listen(PORT, () => {
    console.log(`listen in http://localhost:${PORT}`);
  });
}

board.on("ready", runApp);
