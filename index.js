function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(parentId, target) {
  let selector = `${parentId} ${target}`;
  return document.querySelector(selector);
}
