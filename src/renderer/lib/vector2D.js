export default class Vector2 {
  constructor(x, y) {
    this.x = x || 0;
    this.y = y || 0;
  }

  subVectors(a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    return this;
  }

  clear() {
    this.x = 0;
    this.y = 0;
    return this;
  }

  copyFrom(v) {
    this.x = v.x;
    this.y = v.y;
    return this;
  }
}
