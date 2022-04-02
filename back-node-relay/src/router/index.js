const express = require("express");
const router = express.Router();
const five = require("johnny-five");
const RelayController = require("../controller/relay-controller");
const Response = require("../models/response");

router.get("/relay/:value", (req, res) => {
  const { value } = req.params;
  const response = new Response(false, "Close relay");
  const relayController = new RelayController(five);
  const result = relayController.changeStateRelay(value == "1" ? true : false);

  if (result) {
    response.message = "Open relay";
    response.status = true;
    res.status(200).json(response);
  } else {
    res.status(200).json(response);
  }
});

module.exports = router;
