const schemaUrl = './data/esquema-profesor-plus.json';
const searchInput = document.getElementById('searchInput');
const cardsContainer = document.getElementById('cards');
const navList = document.getElementById('navList');
let templates = [];

function normalizeText(value) {
  return value?.toString().trim().toLowerCase() || '';
}

function buildNavList(items) {
  navList.innerHTML = items.map(item => {
    return `<a href="viewer.html?doc=${encodeURIComponent(item.id)}">${item.icon} ${item.titulo}</a>`;
  }).join('');
}

function buildCard(item) {
  return `
    <a class="card" href="viewer.html?doc=${encodeURIComponent(item.id)}">
      <span>${item.icon}</span>
      <h2>${item.titulo}</h2>
      <p>${item.descripcion}</p>
    </a>
  `;
}

function renderCards(filter = '') {
  const needle = normalizeText(filter);
  const filtered = templates.filter(item => {
    return normalizeText(item.titulo).includes(needle)
      || normalizeText(item.descripcion).includes(needle)
      || normalizeText(item.category).includes(needle);
  });
  cardsContainer.innerHTML = filtered.length > 0
    ? filtered.map(buildCard).join('')
    : '<div class="card small"><h2>No se encontraron resultados</h2><p>Prueba con otras palabras clave.</p></div>';
}

function setupSearch() {
  searchInput.addEventListener('input', () => renderCards(searchInput.value));
}

function loadSchema() {
  fetch(schemaUrl)
    .then(response => response.json())
    .then(data => {
      templates = data.plantillas || [];
      buildNavList(templates);
      renderCards();
    })
    .catch(() => {
      cardsContainer.innerHTML = '<div class="card small"><h2>Error cargando el esquema</h2><p>Asegúrate de abrir esta página con Live Server.</p></div>';
    });
}

loadSchema();
setupSearch();
