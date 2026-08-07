(() => {
  const d = window.DRONLAB_BLOQUE8;
  const m = document.getElementById('main');
  function ficha() {
    m.innerHTML = `
      <section class="panel hero"><h1>Bloque 8 A2 - Examen Teorico Oficial A2 y Televigilancia</h1><p>Ficha base del alumno</p></section>
      <section class="panel columns"><div><h2>Flujo de examen</h2><ul><li>A1/A3 y declaracion de practicas.</li><li>Firma electronica e inscripcion telematica.</li><li>Credenciales e instalacion de SMOWL.</li><li>Validacion de identidad y examen televigilado.</li><li>75% y descarga del Certificado A2.</li></ul></div><div><h2>Mis notas</h2><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div></div></section>
      <section class="panel columns"><div><h2>Errores a evitar</h2><ul><li>Usar numero de operador en lugar de ESP-RP.</li><li>No probar webcam, microfono o internet.</li><li>Tener movil, terceros o dispositivos no autorizados.</li><li>Desviar la mirada o hablar durante la prueba.</li><li>Inventar procedimientos no presentes en la ingenieria.</li></ul></div><div><h2>Fuera del alcance del curso A2</h2><p>${d.fuera_alcance}</p></div></section>`;
  }
  function datos() { m.innerHTML = `<section class="panel hero"><h1>Datos criticos</h1><p>Valores y requisitos presentes en la fuente.</p></section><section class="panel"><ul>${d.datos_criticos.map(item => `<li>${item}</li>`).join('')}</ul></section>`; }
  function rutas() { m.innerHTML = `<section class="panel hero"><h1>Recursos del Bloque 8</h1><p>Estado segun el flujo oficial del DronLab SDK.</p></section><section class="panel columns"><div><h2>Disponible</h2><ul><li>Aula</li><li>Ficha base del alumno</li><li>Guia del profesor</li><li>Flashcards</li><li>Test</li><li>Casos practicos</li><li>Practicas</li><li>Guias rapidas</li><li>Mapa Mental</li></ul></div></section>`; }
  document.querySelectorAll('nav button[data-view]').forEach(b => b.onclick = () => ({ ficha, datos, rutas }[b.dataset.view]()));
  ficha();
})();
