(() => {
  const data = window.DRONLAB_BLOQUE5;
  const stage = document.getElementById('stage');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  const counter = document.getElementById('counter');
  const progress = document.getElementById('progress');
  const menu = document.getElementById('menuDialog');
  const menuList = document.getElementById('menuList');
  const help = document.getElementById('help');
  const notesKey = 'dronlab_a2_bloque5_notes';
  let index = Math.max(0, parseInt(location.hash.replace('#', ''), 10) - 1 || 0);

  function escapeHtml(value) {
    return String(value ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function list(items = []) {
    return `<ul>${items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
  }

  function renderSlide(slide, i) {
    const pp = slide.profesor_plus || {};
    const body = i === 0
      ? `<div class="hero-grid"><div class="hero-copy"><p class="eyebrow">CURSO UAS - A2</p><h1>${escapeHtml(slide.titulo)}</h1><p class="subtitle">${escapeHtml(slide.objetivo)}</p><div class="institutional-pill"><img src="../../assets/branding/logo-circular-fab.png" alt=""><span>Circular FAB Jarandilla de la Vera</span></div><div class="hero-tags"><span>Ver</span><span>Entender</span><span>Aplicar</span><span>Recordar</span></div></div><div class="drone-visual" aria-label="Diagrama de rendimiento UAS A2"><div class="system-card"><span class="icon">R</span><b>Bloque Base</b><small>Fuerzas, CG, MTOM y rendimiento</small></div></div></div>`
      : `<p class="eyebrow">${escapeHtml(slide.tipo)}</p><h2>${escapeHtml(slide.titulo)}</h2><div class="compare compact"><article><div class="badge">OBJETIVO</div><h3>${escapeHtml(slide.objetivo)}</h3><p>${escapeHtml(slide.explicacion || slide.contenido)}</p></article><article><div class="badge alt">IDEAS CLAVE</div>${list(slide.ideas_clave || [])}<p>${escapeHtml(slide.resumen)}</p></article></div><div class="callout"><b>Profesor Plus:</b> ${escapeHtml(pp.que_decir || slide.guion)}</div>`;
    return `
      <section class="slide ${i === 0 ? 'active slide-hero' : ''}" data-title="${escapeHtml(slide.titulo)}" data-section="${escapeHtml(slide.tipo)}">
        ${body}
        <div class="cue">${escapeHtml(slide.dinamica || pp.dinamica || 'Guiar la pantalla con preguntas breves.')}</div>
        <aside class="notes">
          <b>Que decir:</b> ${escapeHtml(pp.que_decir || slide.guion)}<br>
          <b>Preguntas:</b> ${(pp.preguntas || [slide.pregunta]).map(escapeHtml).join(' | ')}<br>
          <b>Respuestas:</b> ${(pp.respuestas_esperadas || slide.respuestas_esperadas || []).map(escapeHtml).join(' | ')}<br>
          <b>Error:</b> ${escapeHtml(pp.error_habitual || slide.error)}<br>
          <b>Reconducir:</b> ${escapeHtml(pp.como_reconducir || slide.como_reconducir)}<br>
          <b>Sugerencia metodologica:</b> ${escapeHtml(pp.sugerencias_metodologicas || '')}<br>
          <b>Demostracion:</b> ${escapeHtml(pp.demostracion || slide.demostracion)}<br>
          <b>Material:</b> ${escapeHtml(pp.material_necesario || pp.material || slide.material)}<br>
          <b>Dinamica:</b> ${escapeHtml(pp.dinamica || slide.dinamica)}
        </aside>
      </section>
    `;
  }

  function buildSlides() {
    stage.innerHTML = data.slides.map(renderSlide).join('');
  }

  function slides() {
    return [...document.querySelectorAll('.slide')];
  }

  function render() {
    const all = slides();
    index = Math.min(all.length - 1, Math.max(0, index));
    all.forEach((s, i) => s.classList.toggle('active', i === index));
    counter.textContent = `${index + 1} / ${all.length}`;
    progress.style.width = `${((index + 1) / all.length) * 100}%`;
    location.hash = String(index + 1);
    document.title = `${index + 1}. ${all[index].dataset.title} - DronLab A2`;
  }

  function go(delta) {
    index += delta;
    render();
  }

  function buildMenu() {
    menuList.innerHTML = '';
    slides().forEach((slide, i) => {
      const b = document.createElement('button');
      b.className = 'menu-item';
      b.innerHTML = `<b>${i + 1}. ${slide.dataset.title}</b><small>${slide.dataset.section}</small>`;
      b.onclick = () => { index = i; render(); menu.close(); };
      menuList.appendChild(b);
    });
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
    else document.exitFullscreen?.();
  }

  function setupNotesStorage() {
    const saved = localStorage.getItem(notesKey);
    if (saved === '1') document.body.classList.add('show-notes');
    document.getElementById('btnNotes').onclick = () => {
      document.body.classList.toggle('show-notes');
      localStorage.setItem(notesKey, document.body.classList.contains('show-notes') ? '1' : '0');
    };
  }

  buildSlides();
  buildMenu();
  setupNotesStorage();
  prev.onclick = () => go(-1);
  next.onclick = () => go(1);
  document.getElementById('btnMenu').onclick = () => menu.showModal();
  document.getElementById('closeMenu').onclick = () => menu.close();
  document.getElementById('btnFullscreen').onclick = toggleFullscreen;

  window.addEventListener('keydown', e => {
    const key = e.key.toLowerCase();
    if (['arrowright', 'pagedown', ' '].includes(key)) { e.preventDefault(); go(1); }
    if (['arrowleft', 'pageup'].includes(key)) { e.preventDefault(); go(-1); }
    if (key === 'home') { index = 0; render(); }
    if (key === 'end') { index = slides().length - 1; render(); }
    if (key === 'm') menu.open ? menu.close() : menu.showModal();
    if (key === 'f') toggleFullscreen();
    if (key === 'h') {
      help.classList.add('show');
      setTimeout(() => help.classList.remove('show'), 2500);
    }
  });

  window.addEventListener('hashchange', () => {
    const n = parseInt(location.hash.replace('#', ''), 10);
    if (Number.isFinite(n) && n >= 1 && n <= slides().length) { index = n - 1; render(); }
  });

  render();
})();
