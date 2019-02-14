function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const listItems = document.querySelectorAll('.ranked-list li');

  listItems.forEach( function(item) {
    let itemNumber = parseInt(item.textContent);
    item.textContent = itemNumber + n;
  });

  // Alternative
  // for (let i = 0; i < listItems.length; i++) {
  //   let itemNumber = parseInt(listItems[i].textContent);
  //   listItems[i].textContent = itemNumber + n;
  // }
}

function findNestedDiv(startDiv) {
  if (startDiv.querySelectorAll("div").length > 0) {
    let nextDiv = startDiv.querySelector("div");
    findNestedDiv(nextDiv);
  } else {
    return startDiv;
  }
}

function deepestChild() {
  const nodeToSearch = document.getElementById('grand-node');
  
  return findNestedDiv(nodeToSearch);
}
