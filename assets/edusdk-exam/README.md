# CircularFAB EduSDK · Motor de Evaluacion y Simulacion

Componente reutilizable para examenes finales de curso.

El motor no contiene contenido academico. Carga configuracion y bancos de preguntas desde JSON.

## Archivos

- `index.html`: visor reutilizable.
- `exam-engine.css`: estilos canonicos.
- `exam-engine.js`: logica de modo estudio y simulacro.
- `exam-config-template.json`: plantilla de configuracion.

## Integracion

Copiar la carpeta `edusdk-exam/` dentro de `assets/` del curso y crear:

```text
examen-final/
  index.html
  exam-config.json
```

`examen-final/index.html` debe cargar:

```html
<link rel="stylesheet" href="../assets/edusdk-exam/exam-engine.css">
<script src="../assets/edusdk-exam/exam-engine.js"></script>
```

El examen final pertenece al curso, no a los bloques.
