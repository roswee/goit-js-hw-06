const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

for (const ingredient of ingredients) {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.className = "item";
  const list = document.querySelector('#ingredients');
  list.append(li);
}