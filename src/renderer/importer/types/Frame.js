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
      opts.isMask,
      opts.effects
    );

    this.clipsContent = opts.clipsContent;
  }

  draw(tree) {
    let el = super.draw(tree);
    el.style.position = "relative";
    el.style.top = 0;
    el.style.left = 0;

    if (this.clipsContent) {
      el.style.overflow = "hidden";
    }

    return el;
  }
}
