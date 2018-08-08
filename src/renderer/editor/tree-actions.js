import { isLeaf, isRoot, containsPoint } from "./tree-helpers";
import TreeWalker from "./tree-walker";
import Mouse from "@/js/mouse";

import store from "@/store";

export function getNodeFromEvent(e, canvas) {
  let { x, y } = e;
  if (!x || !y) {
    x = Mouse.x;
    y = Mouse.y;
  }
  const { left, top, width, height } = canvas.getBoundingClientRect();

  const isDirect = e.ctrlKey || e.metaKey;

  const isDoubleClick = e.__type === "dblclick";

  const scaleX = store.getters.currentSlide.absoluteBoundingBox.width / width;
  const scaleY = store.getters.currentSlide.absoluteBoundingBox.height / height;

  let position = { x: (x - left) * scaleX, y: (y - top) * scaleY };

  let node;

  if (isDoubleClick) {
    //we want to enter inside the group
    node = getNodeAtPointInGroup(position);
  } else if (isDirect) {
    //user pressed CTRL or CMD we enter directly and ignore groups
    node = getDirectNodeAtPoint(position);
  } else {
    node = getNodeAtPoint(position); //simple click just get the element / group
  }

  return node;
}

function getCandidates(point) {
  const candidates = [];

  TreeWalker.preOrder(store.getters.currentSlide, node => {
    if (!isRoot(node) && containsPoint(node, point)) {
      candidates.push(node);
    }
  });

  // if we only have one result and it's a group it means we clicked on a group where there are no children just empty space we only want click on group where it's not empty and where it intersect with at least one of the group child

  const clickedOnGroupWhereNoChildren =
    candidates.length === 1 && candidates[0].type === "GROUP";

  if (clickedOnGroupWhereNoChildren) {
    candidates.shift();
  }

  return candidates;
}

//select directly by ignoring group
function getDirectNodeAtPoint(point) {
  const candidates = getCandidates(point);
  let result = candidates.shift();
  while (candidates.length > 0) {
    if (isLeaf(result)) {
      break;
    }
    result = candidates.shift();
  }

  return result;
}

//we want to enter inside the group
function getNodeAtPointInGroup(point) {
  const candidates = getCandidates(point);
  let result = candidates.shift();

  while (candidates.length > 0) {
    if (store.getters.selectedLayers.includes(result.parentId)) {
      break;
    }
    result = candidates.shift();
  }

  return result;
}

function getNodeAtPoint(point) {
  const nodesWithSelectedDescendants = parentIdsWithSelectedDescendants(
    store.getters.selectedLayers
  );
  const candidates = getCandidates(point);
  let currentCandidate = candidates.shift();
  while (candidates.length > 0) {
    if (!nodesWithSelectedDescendants.includes(currentCandidate.id)) {
      break;
    }
    currentCandidate = candidates.shift();
  }

  return currentCandidate;
}

//retrieve all the parents nodes that have descendants selected
function parentIdsWithSelectedDescendants(selectedNodes) {
  let parents = [];

  for (let nodeId of selectedNodes) {
    let node = store.getters.nodesTree[nodeId];
    let nodeParent = node.parentNode;
    while (nodeParent) {
      parents.push(nodeParent.id);
      nodeParent = nodeParent.parentNode;
    }
  }

  return parents;
}
