// Pathfinder: Web Creator starter script.
// Day 1: this already works on your site. Day 4: you read it line by line and change it.

// 1. Find the button and the box in the page. The page the browser built is called the DOM.
const toggleButton = document.querySelector("#toggle-button");
const details = document.querySelector("#details");

// 2. Remember whether the box is open. This is the page's "state".
let isOpen = false;

// 3. When the button is clicked, run this function.
// Only run this on a page that has the button.
if (toggleButton) {
  toggleButton.addEventListener("click", function () {
    if (isOpen) {
      details.hidden = true;
      toggleButton.textContent = "Show this week's details";
      isOpen = false;
    } else {
      details.hidden = false;
      toggleButton.textContent = "Hide this week's details";
      isOpen = true;
    }
    console.log("Box open:", isOpen);
  });
}

// Day 4, Block 2: first add the list section to index.html (the page gives you the HTML),
// then delete the slash-star line below and the star-slash line at the end to switch this on.
/*
const items = ["First item", "Second item", "Third item"];
const list = document.querySelector("#item-list");

// Only run this on a page that has the list.
if (list) {
  for (const item of items) {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  }
  console.log("Items shown:", items.length);
}
*/
