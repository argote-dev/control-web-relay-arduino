class RelayController {
  constructor(five) {
    this.five = five;
    this.relay = new five.Relay(10, "NC", false);
  }
  changeStateRelay(state) {
    if (state) {
      this.relay.close();
      return true;
    } else {
      this.relay.open();
      return false;
    }
  }
}

module.exports = RelayController;
