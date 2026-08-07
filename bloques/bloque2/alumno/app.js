(() => {
  const d = window.DRONLAB_BLOQUE2;
  const m = document.getElementById('main');

  function ficha() {
    m.innerHTML = `
      <section class="panel hero"><h1>Bloque 2 A2 - El Sistema UAS de Clase C2</h1><p>Ficha base del alumno</p></section>
      <section class="panel columns">
        <div><h2>Conceptos clave</h2><ul><li>Clase C2: MTOM inferior a 4 kg.</li><li>Marcado de clase oficial y numero de serie unico.</li><li>Modo de baja velocidad: maximo 3 m/s.</li><li>DRI: identificacion directa durante el vuelo.</li><li>Geoconsciencia: aviso ante zonas restringidas o prohibidas.</li><li>Software y datos deben estar actualizados.</li></ul></div>
        <div><h2>Mis notas</h2><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div></div>
      </section>
      <section class="panel"><h2>Fuera del alcance del curso A2</h2><p>STS, SORA, Categoria Especifica, Categoria Certificada, Radiofonista UAS y STS-ES: fuera del alcance del curso A2.</p></section>
    `;
  }

  function datos() {
    m.innerHTML = `<section class="panel hero"><h1>Datos criticos</h1><p>Valores y requisitos presentes en la fuente.</p></section><section class="panel"><ul>${d.datos_criticos.map(item => `<li>${item}</li>`).join('')}</ul></section>`;
  }

  function rutas() {
    m.innerHTML = `
      <section class="panel hero"><h1>Recursos del Bloque 2</h1><p>Bloque cerrado segun el flujo oficial DronLab SDK.</p></section>
      <section class="panel columns">
        <div><h2>Disponible</h2><ul><li>Flashcards</li><li>Test</li><li>Casos practicos</li><li>Practicas</li><li>Guias rapidas</li><li>Mapa Mental</li></ul></div>
      </section>
    `;
  }

  document.querySelectorAll('nav button[data-view]').forEach(b => b.onclick = () => ({ ficha, datos, rutas }[b.dataset.view]()));
  ficha();
})();
