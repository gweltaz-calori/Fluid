export default class Formatter {
  constructor() {}

  parse(stringValue) {
    let value = stringValue.replace(new RegExp(this.units, "g"), "");
    let floatValue = parseFloat(value);

    if (!isNaN(floatValue)) {
      return floatValue;
    }

    throw new Error("Invalid Input");
  }
}
