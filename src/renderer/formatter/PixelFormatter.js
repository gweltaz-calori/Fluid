import Formatter from "./Formatter";

export default class PixelFormatter extends Formatter {
  constructor() {
    super();
    this.units = "px";
  }

  format(value) {
    return null == value ? "" : `${parseFloat(value).toFixed(2)}px`;
  }
}
