export default {
  x: 0,
  y: 0,
  start() {
    document.addEventListener("mousemove", this.onMouseMove.bind(this));
  },
  stop() {
    document.removeEventListener("mousemove", this.onMouseMove.bind(this));
  },
  onMouseMove(e) {
    const { x, y } = e;
    this.x = x;
    this.y = y;
  }
};
