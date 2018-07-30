export default class SuperMath {
  static clamp(value, min, max) {
    if (!value) return min;
    return Math.min(Math.max(value, min), max);
  }

  static toDegrees(radians) {
    return (radians * 180) / Math.PI;
  }
}
