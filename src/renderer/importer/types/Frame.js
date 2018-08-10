import FrameBase from "./FrameBase";
import { isRoot } from "@/editor/tree-helpers";

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

  draw(htmlTree) {
    let el = super.draw(htmlTree);
    el.style.position = "relative";
    el.style.top = isRoot(this)
      ? 0
      : `${this.absoluteBoundingBox.y -
          this.parentNode.absoluteBoundingBox.y}px`;
    el.style.left = isRoot(this)
      ? 0
      : `${this.absoluteBoundingBox.x -
          this.parentNode.absoluteBoundingBox.x}px`;

    if (this.clipsContent) {
      el.style.overflow = "hidden";
    }

    return el;
  }
}
