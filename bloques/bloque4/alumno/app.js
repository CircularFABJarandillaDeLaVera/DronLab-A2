(() => {
  const d = window.DRONLAB_BLOQUE4;
  const m = document.getElementById('main');

  function ficha() {
    m.innerHTML = `
      <section class="panel hero"><h1>Bloque 4 A2 - Meteorologia aplicada</h1><p>Ficha base del alumno</p></section>
      <section class="panel columns">
        <div><h2>Cadena meteorologica</h2><ul><li>Consultar prevision y condiciones actuales.</li><li>Aplicar MEUH y observar entorno.</li><li>Evaluar viento local, topografia y obstaculos.</li><li>Comprobar VLOS y limites del fabricante.</li><li>Considerar temperatura y humedad.</li><li>Tomar decision Go/No-Go.</li></ul></div>
        <div><h2>Mis notas</h2>${'<div class="line"></div>'.repeat(7)}</div>
      </section>
      <section class="panel columns">
        <div><h2>Errores a evitar</h2><ul><li>Confiar en que hace buen tiempo en el suelo.</li><li>Ignorar que obstaculos cambian direccion y velocidad del viento.</li><li>Volar con VLOS comprometido.</li><li>Usar limites no consultados en el manual.</li></ul></div>
        <div><h2>Fuera del alcance del curso A2</h2><p>${d.fuera_alcance}</p></div>
      </section>
    `;
  }

  function datos() {
    m.innerHTML = `<section class="panel hero"><h1>Datos criticos</h1><p>Valores y condiciones presentes en la fuente.</p></section><section class="panel"><ul>${d.datos_criticos.map(item => `<li>${item}</li>`).join('')}</ul></section>`;
  }

  function rutas() {
    m.innerHTML = `
      <section class="panel hero"><h1>Recursos del Bloque 4</h1><p>Recursos integrados segun el flujo oficial del DronLab SDK.</p></section>
      <section class="panel columns">
        <div><h2>Disponible</h2><ul><li>Aula</li><li>Ficha base del alumno</li><li>Guia del profesor</li><li>Flashcards</li><li>Test</li><li>Casos practicos</li><li>Practicas</li><li>Guias rapidas</li><li>Mapa Mental</li></ul></div>
        <div><h2>Pendiente</h2><ul><li>Validacion por experto</li></ul></div>
      </section>
    `;
  }

  document.querySelectorAll('nav button[data-view]').forEach(b => b.onclick = () => ({ ficha, datos, rutas }[b.dataset.view]()));
  ficha();
})();
