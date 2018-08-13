import store from "@/store";
import SuperMath from "@/importer/utils/SuperMath";

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
  const { x, y } = node.getAbsoluteTranslation();
  return {
    x:
      node.absoluteBoundingBox.x -
      store.getters.currentSlide.absoluteBoundingBox.x,
    y:
      node.absoluteBoundingBox.y -
      store.getters.currentSlide.absoluteBoundingBox.y,
    width: node.size.x,
    height: node.size.y,
    relativeTransform: {
      x,
      y
    }
  };
}

export function getPositionRelativeToCanvas(node) {
  const { left, top, width, height } = store.getters.canvasBounds;

  const scaleX = store.getters.currentSlide.absoluteBoundingBox.width / width;
  const scaleY = store.getters.currentSlide.absoluteBoundingBox.height / height;

  const transform = node.getSVGTransform();
  const { x, y } = node.getAbsoluteTranslation();

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
        scaleY,
    transform: {
      translate: {
        x: transform.translate.x / scaleX,
        y: transform.translate.y / scaleY
      },
      rotation: transform.rotation,
      scale: transform.scale
    },
    absoluteBoundingBox: {
      width: node.absoluteBoundingBox.width / scaleX,
      height: node.absoluteBoundingBox.height / scaleY
    },
    relativeTransform: { x: x / scaleX, y: y / scaleY }
  };
}

function rotateAroundPoint({ x, y }, radianAngle) {
  const sin = Math.sin(radianAngle);
  const cos = Math.cos(radianAngle);

  return {
    x: x * cos + y * -sin,
    y: x * sin + y * cos
  };
}

function isValueInRange(value, min, max) {
  return value >= min && value <= max;
}

//use in case of multiselection
export function rectOverlap(node, point, selectionRect) {
  const position = getPosition(node);
  const { rotation } = node.getSVGTransform();

  const selectionOrigin = {
    x: Math.min(point.x, selectionRect.x),
    y: Math.min(point.y, selectionRect.y)
  };

  const selectionRectBounds = {
    x: selectionOrigin.x,
    y: selectionOrigin.y,
    width: Math.abs(selectionRect.width),
    height: Math.abs(selectionRect.height)
  };

  if (rotation === 0) {
    return (
      selectionRectBounds.x < position.x + position.width &&
      selectionRectBounds.x + selectionRectBounds.width > position.x &&
      selectionRectBounds.y < position.y + position.height &&
      selectionRectBounds.y + selectionRectBounds.height > position.y
    );
  } else {
    //todo implement SAT ALGORITHM to detect colision
  }
}

export function containsPoint(node, point) {
  const position = getPosition(node);
  const { rotation } = node.getSVGTransform();

  if (rotation === 0) {
    return (
      point.x >= position.x &&
      point.x <= position.x + position.width &&
      point.y >= position.y &&
      point.y <= position.y + position.height
    );
  } else {
    let rotatedBounds = {
      width: position.width,
      height: position.height,
      ...rotateAroundPoint(
        { x: position.relativeTransform.x, y: position.relativeTransform.y },
        SuperMath.toRadians(-rotation)
      )
    };
    let rotatedPoint = rotateAroundPoint(point, SuperMath.toRadians(-rotation));
    return (
      rotatedPoint.x >= rotatedBounds.x &&
      rotatedPoint.x <= rotatedBounds.x + rotatedBounds.width &&
      rotatedPoint.y >= rotatedBounds.y &&
      rotatedPoint.y <= rotatedBounds.y + rotatedBounds.height
    );
  }
}
