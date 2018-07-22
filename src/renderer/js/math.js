export default class SuperMath {
  static clamp(value, min, max, isMax = true) {
    return Math.min(Math.max(value, min), max) || (isMax ? max : min);
  }

  static toDegrees(radians) {
    return (radians * 180) / Math.PI;
  }
}
