import store from "@/store";

export const isBranch = node => ["GROUP", "FRAME"].includes(node.type);
export const isLeaf = node => !isBranch(node);
export const isRoot = node =>
  node.relativeTransform[0][2] === node.absoluteBoundingBox.x &&
  node.type === "FRAME" &&
  node.relativeTransform[1][2] === node.absoluteBoundingBox.y;

export function containsPoint(node, point) {
  const position = {
    x:
      node.absoluteBoundingBox.x -
      store.getters.currentSlide.absoluteBoundingBox.x,
    y:
      node.absoluteBoundingBox.y -
      store.getters.currentSlide.absoluteBoundingBox.y,
    width: node.size.x,
    height: node.size.y
  }; // in case the root frame bounds isnt 0 // in case the root frame bounds isnt 0

  return (
    point.x >= position.x &&
    point.x <= position.x + position.width &&
    point.y >= position.y &&
    point.y <= position.y + position.height
  );
}
