(() => {
  const d = window.DRONLAB_BLOQUE2;
  const nav = document.getElementById('nav');
  const c = document.getElementById('content');

  function list(items = []) {
    return `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
  }

  function show(i) {
    const s = d.slides[i];
    const pp = s.profesor_plus || {};
    document.querySelectorAll('.navbtn').forEach((b, n) => b.classList.toggle('active', n === i));
    const key = `dronlab_a2_b2_nota_${s.id}`;
    const saved = localStorage.getItem(key) || '';
    c.innerHTML = `
      <article class="card hero">
        <div class="tags"><span class="tag">Pantalla ${s.id}</span><span class="tag">${s.tipo}</span><span class="tag">${s.duracion}</span></div>
        <h1>${s.titulo}</h1>
        <p>${s.objetivo}</p>
      </article>
      <article class="card script"><h2>Que decir</h2><p>${pp.que_decir || s.guion}</p></article>
      <div class="grid">
        <article class="card box"><h3>Preguntas</h3>${list(pp.preguntas || [s.pregunta])}</article>
        <article class="card box"><h3>Respuestas esperadas</h3>${list(pp.respuestas_esperadas || s.respuestas_esperadas || [])}</article>
        <article class="card box"><h3>Error habitual</h3><p>${pp.error_habitual || s.error}</p></article>
        <article class="card box"><h3>Como reconducir</h3><p>${pp.como_reconducir || s.como_reconducir}</p></article>
        <article class="card box"><h3>Sugerencia metodologica</h3><p>${pp.sugerencias_metodologicas || 'Mantener la explicacion conectada a la funcion tecnica y al riesgo que mitiga.'}</p></article>
        <article class="card box"><h3>Demostracion</h3><p>${pp.demostracion || s.demostracion}</p></article>
        <article class="card box"><h3>Material</h3><p>${pp.material_necesario || pp.material || s.material}</p></article>
        <article class="card box"><h3>Dinamica</h3><p>${pp.dinamica || s.dinamica}</p></article>
        <article class="card box"><h3>Fuera de alcance</h3><p>${s.no_explicar}</p></article>
      </div>
      <article class="card"><h2>Mis notas</h2><textarea id="note" class="notes">${saved}</textarea></article>
    `;
    document.getElementById('note').oninput = e => localStorage.setItem(key, e.target.value);
  }

  d.slides.forEach((s, i) => {
    const b = document.createElement('button');
    b.className = 'navbtn';
    b.textContent = `${s.id}. ${s.titulo}`;
    b.onclick = () => show(i);
    nav.appendChild(b);
  });
  show(0);
})();
