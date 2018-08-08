export default class TreeWalker {
  static preOrder(element, callback, topDown = true) {
    const stack = [element];
    while (stack.length > 0) {
      const currentNode = stack.shift();

      callback(currentNode);

      if (currentNode.children) {
        stack.unshift(
          ...(topDown
            ? [...currentNode.children].reverse()
            : currentNode.children)
        );
      }
    }
  }
}
