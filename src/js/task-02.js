const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListRef = document.getElementById("ingredients");

const ingredientsItems = ingredients.map((ingredient) => {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.textContent = ingredient;
  ingredientsItem.classList.add("item");

  return ingredientsItem;
});

ingredientsListRef.append(...ingredientsItems);
