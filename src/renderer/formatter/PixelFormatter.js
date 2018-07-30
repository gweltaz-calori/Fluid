import Formatter from "./Formatter";

export default class PixelFormatter extends Formatter {
  constructor(min, max) {
    super(min, max);
    this.units = "px";
  }

  format(value) {
    return null == value ? "" : `${parseFloat(value.toFixed(2))}px`;
  }
}
