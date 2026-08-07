(() => {
  const d = window.DRONLAB_BLOQUE1;
  const m = document.getElementById('main');

  function ficha() {
    m.innerHTML = `
      <section class="panel hero"><h1>Bloque 1 A2 - Requisitos Legales y Tramites</h1><p>Ficha resumen del alumno</p></section>
      <section class="panel columns">
        <div><h2>Cadena A2</h2><ul><li>A1/A3 previo</li><li>Autoformacion practica</li><li>Practicas en condiciones A3</li><li>Declaracion de conclusion</li><li>Matriculacion telematica</li><li>Examen A2 televigilado</li><li>Certificado de competencia</li></ul></div>
        <div><h2>Datos criticos</h2><ul>${d.datos_criticos.map(item => `<li>${item}</li>`).join('')}</ul></div>
      </section>
      <section class="panel columns">
        <div><h2>Errores administrativos</h2><ul><li>Confundir numero de piloto ESP-RP-... con numero de operador.</li><li>No disponer de firma electronica para finalizar la inscripcion.</li></ul></div>
        <div><h2>Errores de examen</h2><ul><li>Desviar la mirada durante el proctoring.</li><li>Presencia de terceros.</li><li>Uso de dispositivos no autorizados.</li></ul></div>
      </section>
      <section class="panel"><h2>Fuera del alcance del curso A2</h2><p>STS, SORA, categoria Especifica, categoria Certificada y radiofonista UAS no se desarrollan en este bloque.</p></section>
      <section class="panel"><h2>Mis notas</h2>${'<div class="line"></div>'.repeat(8)}</section>
    `;
  }

  function mapa() {
    m.innerHTML = `
      <section class="panel hero"><h1>Mapa mental</h1><p>Vista resumida de dependencias del Bloque 1 A2.</p></section>
      <section class="panel mindmap">
        <div class="root">Bloque 1 A2</div>
        <div class="mapgrid">
          <article><h2>A1/A3 previo</h2><p>Base y requisito administrativo.</p></article>
          <article><h2>Autoformacion</h2><p>Guia FOR-UAS-P01-GU07 y practicas A3.</p></article>
          <article><h2>Declaracion</h2><p>Confirma practicas requeridas.</p></article>
          <article><h2>Matriculacion</h2><p>Firma electronica, certificado digital e identificador ESP-RP.</p></article>
          <article><h2>Examen</h2><p>30 preguntas, 30 minutos, 75% y proctoring.</p></article>
          <article><h2>Certificado</h2><p>Vigencia de 5 anos.</p></article>
        </div>
        <p><a href="../recursos/mapas/index.html" target="_blank" rel="noopener">Abrir mapa interactivo completo</a></p>
      </section>
    `;
  }

  document.querySelectorAll('nav button[data-view]').forEach(b => b.onclick = () => ({ ficha, mapa }[b.dataset.view]()));
  ficha();
})();
