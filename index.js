function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const listItems = document.querySelector('.ranked-list li');

  for (let i = 0, i < listItems.length, i++) {
    let itemNumber = listItems[i].textContent.parseInt();
    listItems[i].textContent = itemNumber + n;
  }
}
