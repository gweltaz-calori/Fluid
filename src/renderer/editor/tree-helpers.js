import store from "@/store";

export const isBranch = node => ["GROUP", "FRAME"].includes(node.type);
export const isLeaf = node => !isBranch(node);
export const isCanvas = node => node.type === "CANVAS";
export const isRoot = node =>
  node.relativeTransform[0][2] === node.absoluteBoundingBox.x &&
  node.type === "FRAME" &&
  node.relativeTransform[1][2] === node.absoluteBoundingBox.y;

export const isVisible = node => {
  let visible = node.visible;
  let parent = node.parentNode;

  while (visible && (parent && !isCanvas(parent))) {
    visible = parent.visible && visible;
    parent = parent.parentNode;
  }

  return visible;
};

export function getPosition(node) {
  return {
    x:
      node.absoluteBoundingBox.x -
      store.getters.currentSlide.absoluteBoundingBox.x,
    y:
      node.absoluteBoundingBox.y -
      store.getters.currentSlide.absoluteBoundingBox.y,
    width: node.size.x,
    height: node.size.y
  };
}

export function getPositionRelativeToCanvas(node) {
  const { left, top, width, height } = store.getters.canvasBounds;

  const scaleX = store.getters.currentSlide.absoluteBoundingBox.width / width;
  const scaleY = store.getters.currentSlide.absoluteBoundingBox.height / height;

  return {
    width: node.size.x / scaleX,
    height: node.size.y / scaleY,
    x:
      left +
      (node.absoluteBoundingBox.x -
        store.getters.currentSlide.absoluteBoundingBox.x) /
        scaleX,
    y:
      top +
      (node.absoluteBoundingBox.y -
        store.getters.currentSlide.absoluteBoundingBox.y) /
        scaleY
  };
}

export function containsPoint(node, point) {
  const position = getPosition(node);
  return (
    point.x >= position.x &&
    point.x <= position.x + position.width &&
    point.y >= position.y &&
    point.y <= position.y + position.height
  );
}
