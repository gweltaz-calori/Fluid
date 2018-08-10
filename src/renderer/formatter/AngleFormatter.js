import Formatter from "./Formatter";

export default class AngleFormatter extends Formatter {
  constructor() {
    super();
    this.units = "°|deg";
  }

  format(value) {
    return null == value
      ? ""
      : ((value = ((value + 180 + 360) % 360) - 180),
        value === -180 && (value = 180),
        `${parseFloat(value).toFixed(2)}°`);
  }
}
