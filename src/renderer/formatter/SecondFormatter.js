import Formatter from "./Formatter";

export default class SeconderFormatter extends Formatter {
  constructor() {
    super();
    this.units = "s";
  }

  format(value) {
    return null == value ? "" : `${Math.abs(parseFloat(value)).toFixed(1)}s`;
  }
}
