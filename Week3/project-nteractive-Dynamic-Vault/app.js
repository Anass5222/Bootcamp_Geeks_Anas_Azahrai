// Uses catalogItems, defined in data.js (data.js must be loaded first).

// ================= STATE =================
// One object holds everything the screen depends on.
const state = {
  search: "",
  category: "All",
  sort: "default",
};

// ================= DOM REFERENCES =================
const searchInput = document.getElementById("search");
const categoryBox = document.getElementById("category-buttons");
const sortSelect = document.getElementById("sort");
const grid = document.getElementById("cards-grid");
const emptyState = document.getElementById("empty-state");
const resultsCount = document.getElementById("results-count");
const themeToggle = document.getElementById("theme-toggle");

const modal = document.getElementById("modal");
const modalClose = document.getElementById("modal-close");
const modalImage = document.getElementById("modal-image");
const modalMeta = document.getElementById("modal-meta");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");

// ================= IMAGES =================
// Asks Wikipedia for the main photo of one page.
async function fetchPlayerImage(wikiPage) {
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wikiPage)}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`No page found for ${wikiPage}`);

  const data = await response.json();
  return data.originalimage?.source || data.thumbnail?.source || "";
}

// Loads all photos in parallel, then redraws the cards once.
async function loadImages() {
  await Promise.allSettled(
    catalogItems.map(async (item) => {
      try {
        item.image = await fetchPlayerImage(item.wikiPage);
      } catch (error) {
        console.warn(error.message); // the card keeps its gradient
      }
    })
  );
  update();
}

// ================= DATA HELPERS =================
// Combines search + category + sort, always starting from the full list.
function getVisibleItems() {
  const query = state.search.trim().toLowerCase();

  const items = catalogItems
    .filter((item) => state.category === "All" || item.category === state.category)
    .filter((item) =>
      item.title.toLowerCase().includes(query) ||
      item.shortDescription.toLowerCase().includes(query)
    );

  if (state.sort === "az") items.sort((a, b) => a.title.localeCompare(b.title));
  if (state.sort === "za") items.sort((a, b) => b.title.localeCompare(a.title));
  if (state.sort === "rating") items.sort((a, b) => b.metric - a.metric);

  return items;
}

// ================= RENDERING =================
function createBadge(text, extraClass = "") {
  const badge = document.createElement("span");
  badge.className = `badge ${extraClass}`.trim();
  badge.textContent = text;
  return badge;
}

function createCard(item) {
  const card = document.createElement("article");
  card.className = "card";
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Open details for ${item.title}`);

  const image = document.createElement("img");
  image.alt = item.title;
  image.loading = "lazy";
  if (item.image) image.src = item.image; // no src = gradient background

  const body = document.createElement("div");
  body.className = "card-body";

  const badges = document.createElement("div");
  badges.className = "badge-row";
  badges.append(createBadge(item.category), createBadge(`🏆 ${item.metric}`, "rating"));

  const title = document.createElement("h3");
  title.textContent = item.title;

  const description = document.createElement("p");
  description.textContent = item.shortDescription;

  body.append(badges, title, description);
  card.append(image, body);

  card.addEventListener("click", () => openModal(item));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModal(item);
    }
  });

  return card;
}

function renderItems(items) {
  grid.innerHTML = ""; // clear before re-rendering
  items.forEach((item) => grid.appendChild(createCard(item)));

  emptyState.hidden = items.length > 0;
  resultsCount.textContent = `${items.length} of ${catalogItems.length} players`;
}

function renderCategories() {
  const categories = ["All", ...new Set(catalogItems.map((item) => item.category))];

  categoryBox.innerHTML = "";
  categories.forEach((name) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chip";
    button.textContent = name;
    button.setAttribute("aria-pressed", name === state.category);
    button.classList.toggle("active", name === state.category);

    button.addEventListener("click", () => {
      state.category = name;
      renderCategories(); // refresh which chip is active
      update();
    });

    categoryBox.appendChild(button);
  });
}

function update() {
  renderItems(getVisibleItems());
}

// ================= MODAL =================
function openModal(item) {
  if (item.image) {
    modalImage.src = item.image;
  } else {
    modalImage.removeAttribute("src");
  }
  modalImage.alt = item.title;
  modalTitle.textContent = item.title;
  modalText.textContent = item.fullDetails;

  modalMeta.innerHTML = "";
  modalMeta.append(createBadge(item.category), createBadge(`🏆 ${item.metric}`, "rating"));

  modal.showModal(); // the Escape key closes it natively
}

modalClose.addEventListener("click", () => modal.close());

// Clicking the dark backdrop: the click target is the <dialog> itself.
modal.addEventListener("click", (event) => {
  if (event.target === modal) modal.close();
});

// ================= THEME (saved in localStorage) =================
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);
}

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.dataset.theme;
  applyTheme(current === "dark" ? "light" : "dark");
});

// ================= EVENTS =================
searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  update();
});

sortSelect.addEventListener("change", (event) => {
  state.sort = event.target.value;
  update();
});

// ================= INIT =================
applyTheme(localStorage.getItem("theme") || "light");
renderCategories();
update();      // first draw, with gradients
loadImages();  // then fetch the photos and redraw