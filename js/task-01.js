const categoriesListRef = document.querySelector("#categories");

const categoriesItemsArray = [...categoriesListRef.children];

console.log(`Number of categories: ${categoriesItemsArray.length}`);

categoriesItemsArray.forEach((category) => {
  console.log(`\n Category: ${category.firstElementChild.textContent}`);

  console.log(`Elements: ${category.lastElementChild.children.length}`);
});
