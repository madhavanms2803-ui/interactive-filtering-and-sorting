const recipes = [
  { name: "Pasta", difficulty: "Easy", time: 20 },
  { name: "Biryani", difficulty: "Hard", time: 60 },
  { name: "Sandwich", difficulty: "Easy", time: 10 },
  { name: "Burger", difficulty: "Medium", time: 30 },
  { name: "Salad", difficulty: "Easy", time: 15 }
];

let currentFilter = "ALL";
let currentSort = "NAME";

const filterRecipes = (recipes, filterType) => {
  switch (filterType) {
    case "EASY":
      return recipes.filter(r => r.difficulty === "Easy");
    case "MEDIUM":
      return recipes.filter(r => r.difficulty === "Medium");
    case "HARD":
      return recipes.filter(r => r.difficulty === "Hard");
    case "QUICK":
      return recipes.filter(r => r.time < 30);
    default:
      return recipes;
  }
};

const sortRecipes = (recipes, sortType) => {
  const copy = [...recipes];
  switch (sortType) {
    case "TIME":
      return copy.sort((a, b) => a.time - b.time);
    case "NAME":
      return copy.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return copy;
  }
};

const renderRecipes = (list) => {
  const container = document.getElementById("recipeList");
  container.innerHTML = "";

  list.forEach(recipe => {
    const div = document.createElement("div");
    div.className = "recipe-card";
    div.innerHTML = `
      <h4>${recipe.name}</h4>
      <p>Difficulty: ${recipe.difficulty}</p>
      <p>Time: ${recipe.time} mins</p>
    `;
    container.appendChild(div);
  });
};

const updateDisplay = () => {
  const filtered = filterRecipes(recipes, currentFilter);
  const sorted = sortRecipes(filtered, currentSort);
  renderRecipes(sorted);
};

document.getElementById("allBtn").onclick = () => {
  currentFilter = "ALL";
  updateDisplay();
};

document.getElementById("easyBtn").onclick = () => {
  currentFilter = "EASY";
  updateDisplay();
};

document.getElementById("mediumBtn").onclick = () => {
  currentFilter = "MEDIUM";
  updateDisplay();
};

document.getElementById("hardBtn").onclick = () => {
  currentFilter = "HARD";
  updateDisplay();
};

document.getElementById("quickBtn").onclick = () => {
  currentFilter = "QUICK";
  updateDisplay();
};

document.getElementById("nameSortBtn").onclick = () => {
  currentSort = "NAME";
  updateDisplay();
};

document.getElementById("timeSortBtn").onclick = () => {
  currentSort = "TIME";
  updateDisplay();
};

updateDisplay();
