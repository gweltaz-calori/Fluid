import Formatter from "./Formatter";

export default class SeconderFormatter extends Formatter {
  constructor(min, max) {
    super(min, max);
    this.units = "s";
  }

  format(value) {
    return null == value ? "" : `${parseFloat(value.toFixed(2))}s`;
  }
}
