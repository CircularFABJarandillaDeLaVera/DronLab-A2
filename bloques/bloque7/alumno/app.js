(() => {
  const d = window.DRONLAB_BLOQUE7;
  const m = document.getElementById('main');
  function ficha() {
    m.innerHTML = `
      <section class="panel hero"><h1>Bloque 7 A2 - Autoformacion Practica y Declaracion A2</h1><p>Ficha base del alumno</p></section>
      <section class="panel columns"><div><h2>Flujo de autoformacion</h2><ul><li>Certificado A1/A3 previo.</li><li>Autoformacion practica con vuelos suficientes.</li><li>Fases A-E completadas.</li><li>Declaracion de conclusion de autoformacion.</li><li>Matriculacion A2 y acceso al examen teorico.</li></ul></div><div><h2>Mis notas</h2><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div></div></section>
      <section class="panel columns"><div><h2>Errores a evitar</h2><ul><li>Declarar sin completar la guia FOR-UAS-P01-GU07.</li><li>Practicar en entornos urbanos o prohibidos.</li><li>Ignorar instrucciones del fabricante.</li><li>No preparar contingencias de Fase D.</li><li>No registrar datos operativos o fatiga.</li></ul></div><div><h2>Fuera del alcance del curso A2</h2><p>${d.fuera_alcance}</p></div></section>`;
  }
  function datos() { m.innerHTML = `<section class="panel hero"><h1>Datos criticos</h1><p>Valores y requisitos presentes en la fuente.</p></section><section class="panel"><ul>${d.datos_criticos.map(item => `<li>${item}</li>`).join('')}</ul></section>`; }
  function rutas() { m.innerHTML = `<section class="panel hero"><h1>Recursos del Bloque 7</h1><p>Estado segun el flujo oficial del DronLab SDK.</p></section><section class="panel columns"><div><h2>Disponible</h2><ul><li>Aula</li><li>Ficha base del alumno</li><li>Guia del profesor</li><li>Flashcards</li><li>Test</li><li>Casos practicos</li><li>Practicas</li><li>Guias rapidas</li><li>Mapa Mental</li></ul></div></section>`; }
  document.querySelectorAll('nav button[data-view]').forEach(b => b.onclick = () => ({ ficha, datos, rutas }[b.dataset.view]()));
  ficha();
})();
