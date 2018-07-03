export default class SuperMath {
  static clamp(value, min, max) {
    return Math.min(Math.max(value, min), max) || max;
  }
}
