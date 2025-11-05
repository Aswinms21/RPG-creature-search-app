const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");

const creatureName = document.getElementById("creature-name");
const creatureId = document.getElementById("creature-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");

const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

const baseUrl = "https://rpg-creature-api.freecodecamp.rocks/api/creature/";

searchBtn.addEventListener("click", async () => {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) return;

  clearDisplay(); // Clear before starting new search

  try {
    const res = await fetch(baseUrl + query);
    if (!res.ok) {
      throw new Error("Creature not found");
    }

    const data = await res.json();
    if (!data || !data.name) {
      throw new Error("Creature not found");
    }

    displayCreature(data);
  } catch (err) {
    alert(err.message);
  }
});

function displayCreature(data) {
  creatureName.textContent = data.name.toUpperCase();
  creatureId.textContent = `#${data.id}`;
  weight.textContent = `Weight: ${data.weight}`;
  height.textContent = `Height: ${data.height}`;

  // Find stats by name in the stats array
  const getStat = (statName) => {
    const statObj = data.stats.find(s => s.name === statName);
    return statObj ? statObj.base_stat : "";
  };
  hp.textContent = getStat("hp");
  attack.textContent = getStat("attack");
  defense.textContent = getStat("defense");
  specialAttack.textContent = getStat("special-attack");
  specialDefense.textContent = getStat("special-defense");
  speed.textContent = getStat("speed");

  types.innerHTML = "";
  data.types.forEach(t => {
    const el = document.createElement("p");
    el.textContent = t.name.toUpperCase();
    types.appendChild(el);
  });
}

function clearDisplay() {
  creatureName.textContent = "";
  creatureId.textContent = "";
  weight.textContent = "";
  height.textContent = "";
  hp.textContent = "";
  attack.textContent = "";
  defense.textContent = "";
  specialAttack.textContent = "";
  specialDefense.textContent = "";
  speed.textContent = "";
  types.innerHTML = "";
}