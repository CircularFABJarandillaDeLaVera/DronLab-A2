(() => {
  const d = window.DRONLAB_BLOQUE3;
  const m = document.getElementById('main');

  function ficha() {
    m.innerHTML = `
      <section class="panel hero"><h1>Bloque 3 A2 - Operaciones en Subcategoria A2</h1><p>Ficha base del alumno</p></section>
      <section class="panel columns">
        <div><h2>Cadena operativa</h2><ul><li>Identificar personas no participantes.</li><li>Evaluar entorno y volumen operacional.</li><li>Aplicar 30 m como distancia general.</li><li>Usar 5 m solo con modo de baja velocidad.</li><li>Aplicar regla 1:1 segun altura.</li><li>Monitorizar cambios durante el vuelo.</li></ul></div>
        <div><h2>Mis notas</h2>${'<div class="line"></div>'.repeat(7)}</div>
      </section>
      <section class="panel columns">
        <div><h2>Errores a evitar</h2><ul><li>Creer que C2 permite sobrevolar personas ajenas deliberadamente.</li><li>Olvidar que la regla 1:1 es dinamica.</li><li>Acercarse a 5 m sin verificar modo lento.</li></ul></div>
        <div><h2>Fuera del alcance del curso A2</h2><p>${d.fuera_alcance}</p></div>
      </section>
    `;
  }

  function datos() {
    m.innerHTML = `<section class="panel hero"><h1>Datos criticos</h1><p>Valores y condiciones presentes en la fuente.</p></section><section class="panel"><ul>${d.datos_criticos.map(item => `<li>${item}</li>`).join('')}</ul></section>`;
  }

  function rutas() {
    m.innerHTML = `
      <section class="panel hero"><h1>Recursos del Bloque 3</h1><p>Los recursos finales del bloque estan generados e integrados.</p></section>
      <section class="panel columns">
        <div><h2>Disponible</h2><ul><li>Aula</li><li>Ficha base del alumno</li><li>Guia del profesor</li><li>Flashcards</li><li>Test</li><li>Casos practicos</li><li>Practicas</li><li>Guias rapidas</li><li>Mapa Mental</li></ul></div>
      </section>
    `;
  }

  document.querySelectorAll('nav button[data-view]').forEach(b => b.onclick = () => ({ ficha, datos, rutas }[b.dataset.view]()));
  ficha();
})();
