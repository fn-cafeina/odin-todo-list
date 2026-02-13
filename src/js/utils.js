export function cleanNode(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}
