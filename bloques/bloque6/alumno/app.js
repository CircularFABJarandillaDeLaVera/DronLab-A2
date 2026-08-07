(() => {
  const d = window.DRONLAB_BLOQUE6;
  const m = document.getElementById('main');

  function ficha() {
    m.innerHTML = `
      <section class="panel hero"><h1>Bloque 6 A2 - Atenuaciones tecnicas y operacionales</h1><p>Ficha base del alumno</p></section>
      <section class="panel columns">
        <div><h2>Cadena de mitigacion</h2><ul><li>Identificar personas no participantes y obstaculos.</li><li>Seleccionar atenuaciones tecnicas: modo lento y limitadores.</li><li>Aplicar atenuaciones operacionales: distancias 30 m/5 m y Regla 1:1.</li><li>Evaluar volumen operacional y zonas de prevencion.</li><li>Gestionar incursiones de terceros y recuperacion manual.</li></ul></div>
        <div><h2>Mis notas</h2>${'<div class="line"></div>'.repeat(7)}</div>
      </section>
      <section class="panel columns">
        <div><h2>Errores a evitar</h2><ul><li>Confiar exclusivamente en sistemas automaticos.</li><li>Confundir atenuaciones tecnicas con operacionales.</li><li>Usar 5 m sin asociarlo a modo lento.</li><li>No actualizar datos geograficos de geoconsciencia.</li><li>Olvidar que el volumen operacional cambia con cada mision.</li></ul></div>
        <div><h2>Fuera del alcance del curso A2</h2><p>${d.fuera_alcance}</p></div>
      </section>
    `;
  }

  function datos() {
    m.innerHTML = `<section class="panel hero"><h1>Datos criticos</h1><p>Valores y requisitos presentes en la fuente.</p></section><section class="panel"><ul>${d.datos_criticos.map(item => `<li>${item}</li>`).join('')}</ul></section>`;
  }

  function rutas() {
    m.innerHTML = `
      <section class="panel hero"><h1>Recursos del Bloque 6</h1><p>Estado segun el flujo oficial del DronLab SDK.</p></section>
      <section class="panel columns">
        <div><h2>Disponible</h2><ul><li>Aula</li><li>Ficha base del alumno</li><li>Guia del profesor</li><li>Flashcards</li><li>Test</li><li>Casos practicos</li><li>Practicas</li><li>Guias rapidas</li><li>Mapa Mental</li></ul></div>
        <div><h2>Pendiente</h2><ul><li>Validacion por experto</li></ul></div>
      </section>
    `;
  }

  document.querySelectorAll('nav button[data-view]').forEach(b => b.onclick = () => ({ ficha, datos, rutas }[b.dataset.view]()));
  ficha();
})();
