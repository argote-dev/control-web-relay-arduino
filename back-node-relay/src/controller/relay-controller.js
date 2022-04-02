class RelayController {
  constructor(five) {
    this.five = five;
    this.relay = new five.Relay(10, "NC");
  }
  changeStateRelay(state) {
    if (state) {
      this.relay.close();
      return this.relay.isOn;
    } else {
      this.relay.open();
      return this.relay.isOn;
    }
  }
}

module.exports = RelayController;
