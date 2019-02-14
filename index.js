function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(parentId, target) {
  return document.querySelector(`#${parentId} .${target}`);
}
