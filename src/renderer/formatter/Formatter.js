export default class Formatter {
  constructor(min, max) {
    this.min = min;
    this.max = max;
  }

  parse(stringValue) {
    let value = stringValue.replace(new RegExp(this.units, "g"), "");
    let floatValue = parseFloat(value);

    if (!isNaN(floatValue)) {
      return floatValue;
    }

    throw new Error("Invalid Input");
  }
}
