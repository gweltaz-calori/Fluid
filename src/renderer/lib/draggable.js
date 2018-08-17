import Vector2 from "./vector2d";
import SuperMath from "../importer/utils/SuperMath";

export default class Draggable {
  constructor({ el, boundsElement, axises }) {
    this._bounds = boundsElement ? boundsElement.getBoundingClientRect() : null;
    this._el = el;
    this._elBounds = this._el.getBoundingClientRect();

    this._axises = axises || ["x", "y"];

    this.isDragging = false;
    this._hold = new Vector2();
    this._diff = new Vector2();
    this._position = new Vector2();
    this._origin = new Vector2();
    this._max = new Vector2(
      this._bounds.width - this._elBounds.width,
      this._bounds.height - this._elBounds.height
    );

    this._callbacks = {};

    this.addListeners();
  }

  on(eventName, callback) {
    this._callbacks[eventName] = callback;
  }

  off() {
    this._callbacks = {};
  }

  addListeners() {
    this._el.addEventListener("mousedown", this._onMouseDown.bind(this));
    window.addEventListener("mousemove", this._onMove.bind(this));
    window.addEventListener("mouseup", this._onMouseUp.bind(this));
  }

  _setElStyle() {
    this._el.style.transform = `translate(${this._position.x}px,${
      this._position.y
    }px)`;
  }

  _callCallbackFromEvent(eventName, data) {
    if (this._callbacks[eventName]) {
      this._callbacks[eventName](data);
    }
  }

  _onMouseDown(e) {
    if (this.isDragging) return;

    this.isDragging = true;

    this._hold.copyFrom(e);
    this._origin.copyFrom(this._position);

    this._callCallbackFromEvent("touch");
  }

  _onMove(e) {
    if (!this.isDragging) return;

    this._diff.subVectors(e, this._hold);

    for (let axis of this._axises) {
      this._position[axis] = this._origin[axis] + this._diff[axis];
      if (this._bounds) {
        this._position[axis] = SuperMath.clamp(
          this._position[axis],
          0,
          this._max[axis]
        );
      }
    }

    this._setElStyle();

    this._callCallbackFromEvent("drag", this.getBounds());
  }

  getBounds() {
    return {
      maxX: this._max.x,
      maxY: this._max.y,
      x: this._position.x,
      y: this._position.y
    };
  }

  _onMouseUp(e) {
    if (!this.isDragging) return;

    this.isDragging = false;
    this._callCallbackFromEvent("drop");
  }

  set({ x, y }) {
    if (x) {
      this._position.x = x * this._max.x;
    }
    if (y) {
      this._position.y = y * this._max.y;
    }

    this._setElStyle();
  }

  move(e) {
    this._onMouseDown(e);
  }
}
