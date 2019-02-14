function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(parentId, target) {
  const parent = document.querySelector(parentId);

  return parent.querySelector(target);
}
