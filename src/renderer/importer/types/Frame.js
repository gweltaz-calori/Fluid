import FrameBase from "./FrameBase";

export default class Frame extends FrameBase {
  constructor(opts) {
    super(
      opts.id,
      opts.name,
      "FRAME",
      opts.visible,
      opts.backgroundColor,
      opts.opacity,
      opts.size,
      opts.absoluteBoundingBox,
      opts.relativeTransform,
      opts.isMask
    );

    this.clipsContent = opts.clipsContent;
  }

  draw() {
    let el = super.draw();
    el.style.position = "relative";
    el.style.top = 0;
    el.style.left = 0;

    if (this.clipsContent) {
      el.style.overflow = "hidden";
    }

    for (let child of this.children) {
      el.appendChild(child.draw());
    }

    return el;
  }
}
