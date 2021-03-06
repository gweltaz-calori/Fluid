import { NODE_TYPES } from "./types/index";

const serializeNode = node => {
  let Node = NODE_TYPES[node.type];
  return new Node(node);
};

const parseNode = (node, tree) => {
  let serializedNode = serializeNode(node);
  tree[node.id] = serializedNode;

  if (node.children) {
    let groupMask;
    for (let nodeChild of node.children) {
      let subSerializedNode = parseNode(nodeChild, tree);
      if (groupMask) {
        subSerializedNode.groupMask = groupMask;
      }
      if (subSerializedNode.isMask) {
        groupMask = subSerializedNode;
      }
      subSerializedNode.parentNode = serializedNode;
      serializedNode.children.push(subSerializedNode);
    }
  }

  return serializedNode;
};

const setTree = (node, tree) => {};

export default class Importer {
  static loadPage(project, pageIndex = 0) {
    const page = project.document.children[pageIndex];
    let tree = {};
    let parsedPage = parseNode(page, tree);

    return { page: parsedPage, tree };
  }

  static drawRootFrame(frame) {
    let htmlTree = {}; //holds html refs using id
    let drawedFrame = frame.draw(htmlTree);
    return { frame: drawedFrame, htmlTree };
  }
}
