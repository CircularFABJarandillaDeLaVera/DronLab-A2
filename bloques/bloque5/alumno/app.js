(() => {
  const d = window.DRONLAB_BLOQUE5;
  const m = document.getElementById('main');

  function ficha() {
    m.innerHTML = `
      <section class="panel hero"><h1>Bloque 5 A2 - Rendimiento de Vuelo del UAS</h1><p>Ficha base del alumno</p></section>
      <section class="panel columns">
        <div><h2>Cadena de rendimiento</h2><ul><li>Comprender fuerzas de vuelo.</li><li>Identificar ejes y Centro de Gravedad.</li><li>Evaluar carga util y MTOM.</li><li>Relacionar densidad del aire con rendimiento.</li><li>Comprobar calibracion, asistencia barometrica y compatibilidad del sistema.</li><li>Aplicar datos criticos antes de operar.</li></ul></div>
        <div><h2>Mis notas</h2>${'<div class="line"></div>'.repeat(7)}</div>
      </section>
      <section class="panel columns">
        <div><h2>Errores a evitar</h2><ul><li>Reducir rendimiento a bateria.</li><li>Confundir ejes de vuelo.</li><li>Ignorar CG desplazado.</li><li>Superar o tratar como flexible la MTOM.</li><li>No considerar densidad del aire, calor, humedad o altitud.</li></ul></div>
        <div><h2>Fuera del alcance del curso A2</h2><p>${d.fuera_alcance}</p></div>
      </section>
    `;
  }

  function datos() {
    m.innerHTML = `<section class="panel hero"><h1>Datos criticos</h1><p>Valores y requisitos presentes en la fuente.</p></section><section class="panel"><ul>${d.datos_criticos.map(item => `<li>${item}</li>`).join('')}</ul></section>`;
  }

  function rutas() {
    m.innerHTML = `
      <section class="panel hero"><h1>Recursos del Bloque 5</h1><p>Recursos integrados segun el flujo oficial del DronLab SDK.</p></section>
      <section class="panel columns">
        <div><h2>Disponible</h2><ul><li>Aula</li><li>Ficha base del alumno</li><li>Guia del profesor</li><li>Flashcards</li><li>Test</li><li>Casos practicos</li><li>Practicas</li><li>Guias rapidas</li><li>Mapa Mental</li></ul></div>
        <div><h2>Pendiente</h2><ul><li>Validacion por experto</li></ul></div>
      </section>
    `;
  }

  document.querySelectorAll('nav button[data-view]').forEach(b => b.onclick = () => ({ ficha, datos, rutas }[b.dataset.view]()));
  ficha();
})();
