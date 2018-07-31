import { NODE_TYPES } from "./types/index";

const serializeNode = node => {
  let Node = NODE_TYPES[node.type];
  return new Node(node);
};

const parseNode = node => {
  let serializedNode = serializeNode(node);

  if (node.children) {
    let groupMask;
    for (let nodeChild of node.children) {
      let subSerializedNode = parseNode(nodeChild);
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

export default class Importer {
  static loadPage(page) {
    return parseNode(page);
  }
}
