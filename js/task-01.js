const categoriesListRef = document.querySelector("#categories");

console.log(`Number of categories: ${categoriesListRef.children.length}`);

[...categoriesListRef.children].forEach((category) => {
  console.log(`\n Category: ${category.firstElementChild.textContent}`);

  console.log(`Elements: ${category.lastElementChild.children.length}`);
});
