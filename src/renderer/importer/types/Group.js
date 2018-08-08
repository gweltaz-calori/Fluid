import FrameBase from "./FrameBase";

export default class Group extends FrameBase {
  constructor(opts) {
    super(
      opts.id,
      opts.name,
      "GROUP",
      opts.visible,
      opts.backgroundColor,
      opts.opacity,
      opts.size,
      opts.absoluteBoundingBox,
      opts.relativeTransform,
      opts.isMask,
      opts.effects
    );
  }

  draw(tree) {
    let el = super.draw(tree);

    el.style.top = `${this.absoluteBoundingBox.y -
      this.parentNode.absoluteBoundingBox.y}px`;
    el.style.left = `${this.absoluteBoundingBox.x -
      this.parentNode.absoluteBoundingBox.x}px`;

    tree[this.id] = el;

    return el;
  }
}
