import Color from "./Color";
import Vector2D from "./Vector2D";
import ColorStop from "./ColorStop";
import ImageResource from "./ImageResource";

export default class Paint {
  constructor(opts = {}) {
    this.type =
      opts.type ||
      "SOLID" ||
      "GRADIENT_LINEAR" ||
      "GRADIENT_RADIAL" ||
      "GRADIENT_ANGULAR" ||
      "GRADIENT_DIAMOND" ||
      "IMAGE" ||
      "EMOJI";

    this.visible = opts.visible || true;
    this.opacity = opts.opacity || 1;
    if (opts.color) {
      this.color = new Color(opts.color);
    }
    this.gradientHandlePositions = [];
    this.gradientStops = [];
    this.scaleMode = opts.scaleMode || "FILL";
    "FIT" || "TILE" || "STRETCH";
    if (opts.imageHash) {
      this.imageResource = new ImageResource(opts.imageHash);
    }

    for (let gradientHandle of opts.gradientHandlePositions || []) {
      this.gradientHandlePositions.push(new Vector2D(gradientHandle));
    }

    for (let gradientStop of opts.gradientStops || []) {
      this.gradientStops.push(new ColorStop(gradientStop));
    }
  }

  getScaleModeToCSS() {
    switch (this.scaleMode) {
      case "FILL":
        return "cover";
    }
  }

  apply() {
    switch (this.type) {
      case "GRADIENT_LINEAR":
        return this._paintToLinearGradient();
      case "GRADIENT_RADIAL":
        return this._paintToRadialGradient();
      case "IMAGE":
        return this._paintToImage();
      default:
        return this.color.format();
    }
  }

  toSVG(type, id, index) {
    switch (this.type) {
      case "GRADIENT_LINEAR":
        return this._paintToLinearGradientSVG(type, id, index);
      case "GRADIENT_RADIAL":
        return this._paintToRadialGradientSVG(type, id, index);
      default:
        return this._paintToFillColorSVG();
    }
  }

  _paintToLinearGradientSVG(type, id, index) {
    const gradientId = `paint_${type}_${id}_${index}_linear`;
    let linearGradient = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "linearGradient"
    );

    linearGradient.setAttributeNS(null, "id", gradientId);

    const handles = this.gradientHandlePositions;
    const handle0 = handles[0];
    const handle1 = handles[1];

    const ydiff = handle1.y - handle0.y;
    const xdiff = handle0.x - handle1.x;

    const angle = Math.atan2(-xdiff, -ydiff);

    linearGradient.setAttributeNS(null, "x1", handle0.x);
    linearGradient.setAttributeNS(null, "y1", handle0.y);

    linearGradient.setAttributeNS(null, "x2", handle1.x);
    linearGradient.setAttributeNS(null, "y2", handle1.y);

    this.gradientStops.map((stopItem, index) => {
      let stopEl = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "stop"
      );
      stopEl.setAttributeNS(null, "offset", stopItem.position);

      stopEl.setAttributeNS(null, "stop-color", stopItem.color.format());

      linearGradient.appendChild(stopEl);
    });

    return {
      effect: linearGradient,
      name: `url(#${gradientId})`
    };
  }

  _paintToFillColorSVG() {
    return {
      name: this.color.format()
    };
  }

  //@todo
  _paintToRadialGradientSVG() {}

  _paintToLinearGradient() {
    const handles = this.gradientHandlePositions;
    const handle0 = handles[0];
    const handle1 = handles[1];

    const ydiff = handle1.y - handle0.y;
    const xdiff = handle0.x - handle1.x;

    const angle = Math.atan2(-xdiff, -ydiff);
    const stops = this.gradientStops
      .map(stop => {
        return `${stop.color.format()} ${Math.round(stop.position * 100)}%`;
      })
      .join(", ");
    return `linear-gradient(${angle}rad, ${stops})`;
  }
  _paintToRadialGradient() {
    const stops = this.gradientStops
      .map(stop => {
        return `${stop.color.format()} ${Math.round(stop.position * 60)}%`;
      })
      .join(", ");

    return `radial-gradient(${stops})`;
  }

  _paintToImage() {
    return this.imageResource.url;
  }
}
