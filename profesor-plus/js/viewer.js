const schemaUrl = './data/esquema-profesor-plus.json';
const urlParams = new URLSearchParams(window.location.search);
const docId = urlParams.get('doc');
const activeClass = 'active';

const titleNode = document.getElementById('pageTitle');
const descriptionNode = document.getElementById('pageDescription');
const docContent = document.getElementById('docContent');
const navList = document.getElementById('navList');
const searchInput = document.getElementById('searchInput');
const sourceLink = document.getElementById('sourceLink');

function escapeHtml(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function markdownToHtml(source) {
  const lines = source.split(/\r?\n/);
  let html = '';
  let inList = false;

  function closeList() {
    if (inList) {
      html += '</ul>';
      inList = false;
    }
  }

  lines.forEach(rawLine => {
    const line = rawLine.trim();
    if (!line) {
      closeList();
      return;
    }
    const heading = line.match(/^(#{1,6})\s+(.*)$/);
    if (heading) {
      closeList();
      const level = Math.min(6, heading[1].length);
      html += `<h${level}>${escapeHtml(heading[2])}</h${level}>`;
      return;
    }
    if (line.startsWith('> ')) {
      closeList();
      html += `<blockquote>${escapeHtml(line.slice(2))}</blockquote>`;
      return;
    }
    if (/^[-*+]\s+/.test(line)) {
      if (!inList) {
        inList = true;
        html += '<ul>';
      }
      html += `<li>${escapeHtml(line.replace(/^[-*+]\s+/, ''))}</li>`;
      return;
    }
    closeList();
    let paragraph = escapeHtml(line)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>');
    html += `<p>${paragraph}</p>`;
  });

  closeList();
  return html;
}

function buildNav(items, activeId) {
  navList.innerHTML = items.map(item => {
    const active = item.id === activeId ? activeClass : '';
    return `<a class="${active}" href="viewer.html?doc=${encodeURIComponent(item.id)}">${item.icon} ${item.titulo}</a>`;
  }).join('');
}

function loadDocument(item) {
  titleNode.textContent = item.titulo;
  descriptionNode.textContent = item.descripcion;
  sourceLink.href = item.file;
  sourceLink.textContent = 'Ver .md';
  fetch(item.file)
    .then(response => response.text())
    .then(markdown => {
      docContent.innerHTML = markdownToHtml(markdown);
    })
    .catch(() => {
      docContent.innerHTML = '<p>No se pudo cargar el archivo Markdown. Usa Live Server para acceder a los recursos.</p>';
    });
}

function filterNav(items, query) {
  const needle = query.trim().toLowerCase();
  const filtered = items.filter(item => item.titulo.toLowerCase().includes(needle) || item.descripcion.toLowerCase().includes(needle) || item.category.toLowerCase().includes(needle));
  navList.innerHTML = filtered.map(item => `<a href="viewer.html?doc=${encodeURIComponent(item.id)}">${item.icon} ${item.titulo}</a>`).join('');
}

fetch(schemaUrl)
  .then(response => response.json())
  .then(data => {
    const templates = data.plantillas || [];
    const active = templates.find(item => item.id === docId) || templates[0];
    if (!active) {
      titleNode.textContent = 'Documento no encontrado';
      docContent.innerHTML = '<p>La plantilla solicitada no existe.</p>';
      buildNav(templates, '');
      return;
    }
    buildNav(templates, active.id);
    loadDocument(active);
    if (searchInput) {
      searchInput.addEventListener('input', () => filterNav(templates, searchInput.value));
    }
  })
  .catch(() => {
    docContent.innerHTML = '<p>No se pudo cargar el esquema JSON. Comprueba Live Server.</p>';
  });
