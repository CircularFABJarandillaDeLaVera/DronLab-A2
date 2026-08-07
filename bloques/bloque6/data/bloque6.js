window.DRONLAB_BLOQUE6 = {
  "curso": "DronLab A2",
  "bloque": "Bloque 6: Atenuaciones tecnicas y operacionales",
  "duracion": "2 h 30 min",
  "metodologia": [
    "Ver",
    "Entender",
    "Probar",
    "Aplicar",
    "Recordar"
  ],
  "datos_criticos": [
    "Distancia horizontal A2 normal: >= 30 metros.",
    "Distancia horizontal A2 en modo lento: >= 5 metros.",
    "Velocidad maxima modo lento: <= 3 m/s.",
    "Altura proporcional Regla 1:1: altura <= distancia horizontal.",
    "Umbral de examen A2: 75% de aciertos.",
    "Limitacion de altura general: 120 metros AGL."
  ],
  "fuera_alcance": "Metodologia SORA completa, Estudios Aeronauticos de Seguridad complejos para categoria especifica y requisitos de transpondedor modo S: fuera del alcance del curso A2.",
  "recursos_estado": "integracion_final_completada",
  "recursos": {
    "flashcards": "recursos/flashcards/flashcards.json",
    "test": "recursos/test/test.json",
    "casos": "recursos/casos/casos.json",
    "practicas": "recursos/practicas/practicas.json",
    "chuletas": "recursos/chuletas/chuletas.json",
    "mapa": "recursos/mapas/index.html",
    "prompts": "recursos/prompts/prompts-bloque6.md"
  },
  "slides": [
    {
      "id": 1,
      "titulo": "Bienvenida al Bloque 6",
      "tipo": "inicio",
      "duracion": "5 min",
      "objetivo": "Situar las atenuaciones tecnicas y operacionales como base de la seguridad A2.",
      "explicacion": "El bloque aborda funciones, dispositivos y procedimientos que reducen la probabilidad o gravedad de un accidente en operaciones A2.",
      "contenido": "La seguridad combina capacidades del UAS C2, configuracion correcta, consciencia situacional y evaluacion previa del lugar.",
      "ideas_clave": [
        "Atenuaciones tecnicas",
        "Atenuaciones operacionales",
        "UAS C2",
        "Seguridad publica"
      ],
      "resumen": "El piloto A2 debe comprender que la mitigacion une tecnologia, procedimiento y decision operacional.",
      "guion": "Presenta el bloque como una cadena de seguridad: equipo, configuracion, entorno y reaccion del piloto.",
      "material": "Portada del bloque y esquema de mitigaciones.",
      "pregunta": "Que dos familias de atenuaciones aparecen en la ingenieria del bloque?",
      "respuestas_esperadas": [
        "Atenuaciones tecnicas",
        "Atenuaciones operacionales"
      ],
      "error": "Pensar que basta con que el dron incorpore sistemas automaticos.",
      "como_reconducir": "Recordar que la fuente exige tambien procedimientos y observacion del entorno.",
      "demostracion": "Dibujar una cadena con UAS C2, software, piloto y entorno.",
      "dinamica": "Lluvia de ideas inicial sobre como se reduce el riesgo.",
      "no_explicar": "Metodologia SORA completa y categoria especifica: fuera del alcance del curso A2.",
      "enlace": "Empezamos por las atenuaciones tecnicas.",
      "profesor_plus": {
        "objetivos_docentes": [
          "Situar las atenuaciones tecnicas y operacionales como base de la seguridad A2."
        ],
        "ideas_clave_docentes": [
          "Atenuaciones tecnicas",
          "Atenuaciones operacionales",
          "UAS C2"
        ],
        "explicacion_ampliada": "El bloque aborda funciones, dispositivos y procedimientos que reducen la probabilidad o gravedad de un accidente en operaciones A2. La seguridad combina capacidades del UAS C2, configuracion correcta, consciencia situacional y evaluacion previa del lugar.",
        "que_decir": "En este bloque no estudiamos tecnologia aislada: estudiamos como se reduce el riesgo antes y durante el vuelo.",
        "memorizar": [
          "Atenuaciones tecnicas",
          "Atenuaciones operacionales"
        ],
        "comprender": [
          "La mitigacion une tecnologia, procedimiento y decision operacional."
        ],
        "aplicar": [
          "Relacionar cada mitigacion con el riesgo que reduce."
        ],
        "preguntas": [
          "Que reduce una atenuacion?",
          "Quien configura y aplica parte de esas atenuaciones?"
        ],
        "respuestas_esperadas": [
          "La probabilidad o gravedad de un accidente.",
          "El piloto a distancia."
        ],
        "error_habitual": "Separar tecnologia y operacion como si no se complementaran.",
        "como_reconducir": "Usar la cadena UAS C2, software, piloto y entorno.",
        "ejemplos_practicos": [
          "Operacion en calle comercial con distancias y regla 1:1."
        ],
        "sugerencias_metodologicas": "Usar ejemplos de decision sin introducir normativa no presente.",
        "demostracion": "Cadena visual de mitigacion.",
        "material_necesario": "Pizarra o pantalla.",
        "dinamica": "Lluvia de ideas guiada.",
        "tiempo_recomendado": "5 min",
        "nivel_dificultad": "baja",
        "competencias_trabajadas": [
          "Identificacion de mitigaciones",
          "Evaluacion basica del riesgo",
          "Decision operacional"
        ],
        "advertencias": [
          "No confiar exclusivamente en sistemas automaticos."
        ]
      }
    },
    {
      "id": 2,
      "titulo": "Atenuaciones tecnicas",
      "tipo": "concepto",
      "duracion": "8 min",
      "objetivo": "Definir las atenuaciones tecnicas y su finalidad en un UAS de Clase C2.",
      "explicacion": "Son funciones o dispositivos integrados en el UAS de Clase C2 disenados para reducir la probabilidad o gravedad de un accidente.",
      "contenido": "Su finalidad es limitar fisicamente capacidades de la aeronave como altura, velocidad o energia para proteger a terceros en tierra.",
      "ideas_clave": [
        "Funciones integradas",
        "Dispositivos",
        "Altura",
        "Velocidad",
        "Energia"
      ],
      "resumen": "Las atenuaciones tecnicas reducen riesgo desde el propio sistema UAS.",
      "guion": "Vincula cada funcion tecnica con una capacidad que queda limitada.",
      "material": "Esquema de UAS C2 con limitadores.",
      "pregunta": "Que capacidades puede limitar una atenuacion tecnica segun la fuente?",
      "respuestas_esperadas": [
        "Altura",
        "Velocidad",
        "Energia"
      ],
      "error": "Confundir atenuacion tecnica con una maniobra del piloto.",
      "como_reconducir": "Separar hardware/software de procedimientos y distancias.",
      "demostracion": "Tabla tecnica: altura, velocidad, energia.",
      "dinamica": "Clasificacion rapida tecnica u operacional.",
      "no_explicar": "Requisitos de transpondedor modo S: fuera del alcance del curso A2.",
      "enlace": "Las atenuaciones tecnicas dependen del marcado C2 y la configuracion.",
      "profesor_plus": {
        "objetivos_docentes": [
          "Definir las atenuaciones tecnicas y su finalidad en un UAS de Clase C2."
        ],
        "ideas_clave_docentes": [
          "Funciones integradas",
          "Dispositivos",
          "Altura",
          "Velocidad",
          "Energia"
        ],
        "explicacion_ampliada": "Son funciones o dispositivos integrados en el UAS de Clase C2 disenados para reducir la probabilidad o gravedad de un accidente. Su finalidad es limitar fisicamente capacidades de la aeronave como altura, velocidad o energia para proteger a terceros en tierra. Vincula cada funcion tecnica con una capacidad que queda limitada.",
        "que_decir": "Vincula cada funcion tecnica con una capacidad que queda limitada.",
        "memorizar": [
          "Funciones integradas",
          "Dispositivos",
          "Altura"
        ],
        "comprender": [
          "Son funciones o dispositivos integrados en el UAS de Clase C2 disenados para reducir la probabilidad o gravedad de un accidente.",
          "Las atenuaciones tecnicas reducen riesgo desde el propio sistema UAS."
        ],
        "aplicar": [
          "Su finalidad es limitar fisicamente capacidades de la aeronave como altura, velocidad o energia para proteger a terceros en tierra.",
          "Separar hardware/software de procedimientos y distancias."
        ],
        "preguntas": [
          "Que capacidades puede limitar una atenuacion tecnica segun la fuente?"
        ],
        "respuestas_esperadas": [
          "Altura",
          "Velocidad",
          "Energia"
        ],
        "error_habitual": "Confundir atenuacion tecnica con una maniobra del piloto.",
        "como_reconducir": "Separar hardware/software de procedimientos y distancias.",
        "ejemplos_practicos": [
          "Tabla tecnica: altura, velocidad, energia."
        ],
        "sugerencias_metodologicas": "Pedir al alumnado que justifique la respuesta con el concepto exacto de la ingenieria y que separe datos criticos, dependencias y alcance.",
        "demostracion": "Tabla tecnica: altura, velocidad, energia.",
        "material_necesario": "Esquema de UAS C2 con limitadores.",
        "dinamica": "Clasificacion rapida tecnica u operacional.",
        "tiempo_recomendado": "8 min",
        "nivel_dificultad": "media",
        "competencias_trabajadas": [
          "Evaluacion del riesgo",
          "Aplicacion de mitigaciones A2",
          "Decision operacional justificada",
          "Uso responsable de sistemas tecnicos"
        ],
        "advertencias": [
          "Confundir atenuacion tecnica con una maniobra del piloto.",
          "Requisitos de transpondedor modo S: fuera del alcance del curso A2."
        ]
      }
    },
    {
      "id": 3,
      "titulo": "Dependencias tecnicas",
      "tipo": "concepto",
      "duracion": "7 min",
      "objetivo": "Relacionar las atenuaciones tecnicas con el marcado C2 y la configuracion del software.",
      "explicacion": "La ingenieria indica que las atenuaciones tecnicas dependen del marcado de Clase C2 y de la configuracion correcta del software por el piloto.",
      "contenido": "La presencia del sistema no sustituye la comprobacion y configuracion que corresponden al piloto antes de operar.",
      "ideas_clave": [
        "Marcado C2",
        "Configuracion",
        "Software",
        "Piloto"
      ],
      "resumen": "La mitigacion tecnica requiere UAS C2 y configuracion correcta.",
      "guion": "Insiste en que la tecnologia no protege si esta mal configurada.",
      "material": "Checklist de configuracion.",
      "pregunta": "De que depende la atenuacion tecnica segun la fuente?",
      "respuestas_esperadas": [
        "Marcado de Clase C2",
        "Configuracion correcta del software por el piloto"
      ],
      "error": "Confiar en que el sistema viene siempre listo sin revision.",
      "como_reconducir": "Volver a la dependencia explicita: marcado C2 y configuracion.",
      "demostracion": "Secuencia UAS C2 -> configurar -> comprobar -> operar.",
      "dinamica": "Resolucion colectiva de una secuencia previa al vuelo.",
      "no_explicar": "Detalles tecnicos no presentes sobre software del fabricante.",
      "enlace": "La siguiente pieza es el modo de baja velocidad.",
      "profesor_plus": {
        "objetivos_docentes": [
          "Relacionar las atenuaciones tecnicas con el marcado C2 y la configuracion del software."
        ],
        "ideas_clave_docentes": [
          "Marcado C2",
          "Configuracion",
          "Software",
          "Piloto"
        ],
        "explicacion_ampliada": "La ingenieria indica que las atenuaciones tecnicas dependen del marcado de Clase C2 y de la configuracion correcta del software por el piloto. La presencia del sistema no sustituye la comprobacion y configuracion que corresponden al piloto antes de operar. Insiste en que la tecnologia no protege si esta mal configurada.",
        "que_decir": "Insiste en que la tecnologia no protege si esta mal configurada.",
        "memorizar": [
          "Marcado C2",
          "Configuracion",
          "Software"
        ],
        "comprender": [
          "La ingenieria indica que las atenuaciones tecnicas dependen del marcado de Clase C2 y de la configuracion correcta del software por el piloto.",
          "La mitigacion tecnica requiere UAS C2 y configuracion correcta."
        ],
        "aplicar": [
          "La presencia del sistema no sustituye la comprobacion y configuracion que corresponden al piloto antes de operar.",
          "Volver a la dependencia explicita: marcado C2 y configuracion."
        ],
        "preguntas": [
          "De que depende la atenuacion tecnica segun la fuente?"
        ],
        "respuestas_esperadas": [
          "Marcado de Clase C2",
          "Configuracion correcta del software por el piloto"
        ],
        "error_habitual": "Confiar en que el sistema viene siempre listo sin revision.",
        "como_reconducir": "Volver a la dependencia explicita: marcado C2 y configuracion.",
        "ejemplos_practicos": [
          "Secuencia UAS C2 -> configurar -> comprobar -> operar."
        ],
        "sugerencias_metodologicas": "Pedir al alumnado que justifique la respuesta con el concepto exacto de la ingenieria y que separe datos criticos, dependencias y alcance.",
        "demostracion": "Secuencia UAS C2 -> configurar -> comprobar -> operar.",
        "material_necesario": "Checklist de configuracion.",
        "dinamica": "Resolucion colectiva de una secuencia previa al vuelo.",
        "tiempo_recomendado": "7 min",
        "nivel_dificultad": "media",
        "competencias_trabajadas": [
          "Evaluacion del riesgo",
          "Aplicacion de mitigaciones A2",
          "Decision operacional justificada",
          "Uso responsable de sistemas tecnicos"
        ],
        "advertencias": [
          "Confiar en que el sistema viene siempre listo sin revision.",
          "Detalles tecnicos no presentes sobre software del fabricante."
        ]
      }
    },
    {
      "id": 4,
      "titulo": "Modo de baja velocidad",
      "tipo": "concepto puente",
      "duracion": "8 min",
      "objetivo": "Comprender el modo de baja velocidad como puente entre requisitos C2 y reduccion de distancias.",
      "explicacion": "El modo de baja velocidad conecta los requisitos tecnicos de Clase C2 con la reduccion de distancias operativas.",
      "contenido": "La ingenieria lo identifica como la herramienta que permite pasar de 30 m a 5 m de distancia horizontal.",
      "ideas_clave": [
        "Modo lento",
        "Clase C2",
        "30 m",
        "5 m"
      ],
      "resumen": "Sin modo de baja velocidad no se desbloquea la operacion a 5 m indicada por la fuente.",
      "guion": "Presenta el modo lento como un puente, no como un dato aislado.",
      "material": "Diagrama 30 m -> modo lento -> 5 m.",
      "pregunta": "Que permite pasar de 30 m a 5 m?",
      "respuestas_esperadas": [
        "Modo de baja velocidad"
      ],
      "error": "Memorizar 5 m sin asociarlo al modo lento.",
      "como_reconducir": "Repetir la relacion: 5 m depende de modo de baja velocidad.",
      "demostracion": "Esquema de reduccion de distancia.",
      "dinamica": "Pregunta rapida de dependencia.",
      "no_explicar": "Otros modos no descritos en la fuente.",
      "enlace": "El modo lento tiene un dato critico de velocidad.",
      "profesor_plus": {
        "objetivos_docentes": [
          "Comprender el modo de baja velocidad como puente entre requisitos C2 y reduccion de distancias."
        ],
        "ideas_clave_docentes": [
          "Modo lento",
          "Clase C2",
          "30 m",
          "5 m"
        ],
        "explicacion_ampliada": "El modo de baja velocidad conecta los requisitos tecnicos de Clase C2 con la reduccion de distancias operativas. La ingenieria lo identifica como la herramienta que permite pasar de 30 m a 5 m de distancia horizontal. Presenta el modo lento como un puente, no como un dato aislado.",
        "que_decir": "Presenta el modo lento como un puente, no como un dato aislado.",
        "memorizar": [
          "Modo lento",
          "Clase C2",
          "30 m"
        ],
        "comprender": [
          "El modo de baja velocidad conecta los requisitos tecnicos de Clase C2 con la reduccion de distancias operativas.",
          "Sin modo de baja velocidad no se desbloquea la operacion a 5 m indicada por la fuente."
        ],
        "aplicar": [
          "La ingenieria lo identifica como la herramienta que permite pasar de 30 m a 5 m de distancia horizontal.",
          "Repetir la relacion: 5 m depende de modo de baja velocidad."
        ],
        "preguntas": [
          "Que permite pasar de 30 m a 5 m?"
        ],
        "respuestas_esperadas": [
          "Modo de baja velocidad"
        ],
        "error_habitual": "Memorizar 5 m sin asociarlo al modo lento.",
        "como_reconducir": "Repetir la relacion: 5 m depende de modo de baja velocidad.",
        "ejemplos_practicos": [
          "Aplicar el escenario de video profesional en una calle comercial manteniendo separacion minima y altura proporcional."
        ],
        "sugerencias_metodologicas": "Pedir al alumnado que justifique la respuesta con el concepto exacto de la ingenieria y que separe datos criticos, dependencias y alcance.",
        "demostracion": "Esquema de reduccion de distancia.",
        "material_necesario": "Tabla de datos criticos del Bloque 6.",
        "dinamica": "Pregunta rapida de dependencia.",
        "tiempo_recomendado": "8 min",
        "nivel_dificultad": "media",
        "competencias_trabajadas": [
          "Evaluacion del riesgo",
          "Aplicacion de mitigaciones A2",
          "Decision operacional justificada",
          "Uso responsable de sistemas tecnicos"
        ],
        "advertencias": [
          "Memorizar 5 m sin asociarlo al modo lento.",
          "Otros modos no descritos en la fuente."
        ]
      }
    },
    {
      "id": 5,
      "titulo": "Velocidad maxima del modo lento",
      "tipo": "dato critico",
      "duracion": "6 min",
      "objetivo": "Fijar el limite de velocidad asociado al modo de baja velocidad.",
      "explicacion": "La velocidad maxima del modo lento indicada en la ingenieria es menor o igual a 3 m/s.",
      "contenido": "Este dato se relaciona directamente con la posibilidad de operar a la distancia horizontal de 5 m.",
      "ideas_clave": [
        "<= 3 m/s",
        "Modo lento",
        "5 m"
      ],
      "resumen": "El modo lento se asocia al limite <= 3 m/s.",
      "guion": "No introduzcas conversiones ni valores no presentes; trabaja solo con 3 m/s.",
      "material": "Tarjeta de dato critico.",
      "pregunta": "Cual es la velocidad maxima del modo lento?",
      "respuestas_esperadas": [
        "Menor o igual a 3 m/s"
      ],
      "error": "Recordar 5 m pero olvidar <= 3 m/s.",
      "como_reconducir": "Asociar siempre 5 m con modo lento y <= 3 m/s.",
      "demostracion": "Triangulo 5 m - modo lento - <= 3 m/s.",
      "dinamica": "Memorizacion activa.",
      "no_explicar": "Equivalencias no presentes en la fuente.",
      "enlace": "Ahora pasamos a atenuaciones operacionales.",
      "profesor_plus": {
        "objetivos_docentes": [
          "Fijar el limite de velocidad asociado al modo de baja velocidad."
        ],
        "ideas_clave_docentes": [
          "<= 3 m/s",
          "Modo lento",
          "5 m"
        ],
        "explicacion_ampliada": "La velocidad maxima del modo lento indicada en la ingenieria es menor o igual a 3 m/s. Este dato se relaciona directamente con la posibilidad de operar a la distancia horizontal de 5 m. No introduzcas conversiones ni valores no presentes; trabaja solo con 3 m/s.",
        "que_decir": "No introduzcas conversiones ni valores no presentes; trabaja solo con 3 m/s.",
        "memorizar": [
          "<= 3 m/s",
          "Modo lento",
          "5 m"
        ],
        "comprender": [
          "La velocidad maxima del modo lento indicada en la ingenieria es menor o igual a 3 m/s.",
          "El modo lento se asocia al limite <= 3 m/s."
        ],
        "aplicar": [
          "Este dato se relaciona directamente con la posibilidad de operar a la distancia horizontal de 5 m.",
          "Asociar siempre 5 m con modo lento y <= 3 m/s."
        ],
        "preguntas": [
          "Cual es la velocidad maxima del modo lento?"
        ],
        "respuestas_esperadas": [
          "Menor o igual a 3 m/s"
        ],
        "error_habitual": "Recordar 5 m pero olvidar <= 3 m/s.",
        "como_reconducir": "Asociar siempre 5 m con modo lento y <= 3 m/s.",
        "ejemplos_practicos": [
          "Aplicar el escenario de video profesional en una calle comercial manteniendo separacion minima y altura proporcional."
        ],
        "sugerencias_metodologicas": "Pedir al alumnado que justifique la respuesta con el concepto exacto de la ingenieria y que separe datos criticos, dependencias y alcance.",
        "demostracion": "Triangulo 5 m - modo lento - <= 3 m/s.",
        "material_necesario": "Tabla de datos criticos del Bloque 6.",
        "dinamica": "Memorizacion activa.",
        "tiempo_recomendado": "6 min",
        "nivel_dificultad": "baja",
        "competencias_trabajadas": [
          "Evaluacion del riesgo",
          "Aplicacion de mitigaciones A2",
          "Decision operacional justificada",
          "Uso responsable de sistemas tecnicos"
        ],
        "advertencias": [
          "Recordar 5 m pero olvidar <= 3 m/s.",
          "Equivalencias no presentes en la fuente."
        ]
      }
    },
    {
      "id": 6,
      "titulo": "Atenuaciones operacionales",
      "tipo": "concepto",
      "duracion": "8 min",
      "objetivo": "Definir las atenuaciones operacionales y su finalidad.",
      "explicacion": "Son procedimientos y maniobras ejecutadas por el piloto a distancia para minimizar la exposicion al riesgo de personas no participantes.",
      "contenido": "Su finalidad es mantener margenes de seguridad dinamicos basados en la observacion del entorno.",
      "ideas_clave": [
        "Procedimientos",
        "Maniobras",
        "Personas no participantes",
        "Observacion"
      ],
      "resumen": "Las atenuaciones operacionales son acciones del piloto para adaptar la seguridad al entorno real.",
      "guion": "Contrasta esta pantalla con las atenuaciones tecnicas del sistema.",
      "material": "Tabla tecnica vs operacional.",
      "pregunta": "Quien ejecuta las atenuaciones operacionales?",
      "respuestas_esperadas": [
        "El piloto a distancia"
      ],
      "error": "Confundir operacional con una funcion automatica.",
      "como_reconducir": "Preguntar si la medida la ejecuta el piloto o el sistema.",
      "demostracion": "Clasificar ejemplos: limitar velocidad, mantener margen, observar entorno.",
      "dinamica": "Clasificacion por parejas.",
      "no_explicar": "Procedimientos de categoria especifica no presentes.",
      "enlace": "La consciencia situacional es una dependencia operacional.",
      "profesor_plus": {
        "objetivos_docentes": [
          "Definir las atenuaciones operacionales y su finalidad."
        ],
        "ideas_clave_docentes": [
          "Procedimientos",
          "Maniobras",
          "Personas no participantes",
          "Observacion"
        ],
        "explicacion_ampliada": "Son procedimientos y maniobras ejecutadas por el piloto a distancia para minimizar la exposicion al riesgo de personas no participantes. Su finalidad es mantener margenes de seguridad dinamicos basados en la observacion del entorno. Contrasta esta pantalla con las atenuaciones tecnicas del sistema.",
        "que_decir": "Contrasta esta pantalla con las atenuaciones tecnicas del sistema.",
        "memorizar": [
          "Procedimientos",
          "Maniobras",
          "Personas no participantes"
        ],
        "comprender": [
          "Son procedimientos y maniobras ejecutadas por el piloto a distancia para minimizar la exposicion al riesgo de personas no participantes.",
          "Las atenuaciones operacionales son acciones del piloto para adaptar la seguridad al entorno real."
        ],
        "aplicar": [
          "Su finalidad es mantener margenes de seguridad dinamicos basados en la observacion del entorno.",
          "Preguntar si la medida la ejecuta el piloto o el sistema."
        ],
        "preguntas": [
          "Quien ejecuta las atenuaciones operacionales?"
        ],
        "respuestas_esperadas": [
          "El piloto a distancia"
        ],
        "error_habitual": "Confundir operacional con una funcion automatica.",
        "como_reconducir": "Preguntar si la medida la ejecuta el piloto o el sistema.",
        "ejemplos_practicos": [
          "Clasificar ejemplos: limitar velocidad, mantener margen, observar entorno."
        ],
        "sugerencias_metodologicas": "Pedir al alumnado que justifique la respuesta con el concepto exacto de la ingenieria y que separe datos criticos, dependencias y alcance.",
        "demostracion": "Clasificar ejemplos: limitar velocidad, mantener margen, observar entorno.",
        "material_necesario": "Tabla tecnica vs operacional.",
        "dinamica": "Clasificacion por parejas.",
        "tiempo_recomendado": "8 min",
        "nivel_dificultad": "media",
        "competencias_trabajadas": [
          "Evaluacion del riesgo",
          "Aplicacion de mitigaciones A2",
          "Decision operacional justificada",
          "Consciencia situacional"
        ],
        "advertencias": [
          "Confundir operacional con una funcion automatica.",
          "Procedimientos de categoria especifica no presentes."
        ]
      }
    },
    {
      "id": 7,
      "titulo": "Consciencia situacional y entorno",
      "tipo": "dependencia",
      "duracion": "7 min",
      "objetivo": "Relacionar las atenuaciones operacionales con la consciencia situacional.",
      "explicacion": "La ingenieria vincula las atenuaciones operacionales con la consciencia situacional y la evaluacion de topografia y obstaculos.",
      "contenido": "La observacion del entorno permite mantener margenes dinamicos de seguridad y responder a cambios durante el vuelo.",
      "ideas_clave": [
        "Consciencia situacional",
        "Topografia",
        "Obstaculos",
        "Margenes dinamicos"
      ],
      "resumen": "La mitigacion operacional depende de leer el entorno antes y durante el vuelo.",
      "guion": "Haz visible que el entorno cambia y el margen debe adaptarse.",
      "material": "Escenario de calle comercial.",
      "pregunta": "De que dependen las atenuaciones operacionales?",
      "respuestas_esperadas": [
        "Consciencia situacional",
        "Evaluacion de topografia y obstaculos"
      ],
      "error": "Planificar una distancia fija sin observar cambios.",
      "como_reconducir": "Volver al concepto de margen dinamico.",
      "demostracion": "Marcar obstaculos y personas en un plano simple.",
      "dinamica": "Deteccion colectiva de riesgos en un escenario.",
      "no_explicar": "Metodos SORA paso a paso: fuera del alcance del curso A2.",
      "enlace": "Esa lectura del entorno empieza con la evaluacion del lugar.",
      "profesor_plus": {
        "objetivos_docentes": [
          "Relacionar las atenuaciones operacionales con la consciencia situacional."
        ],
        "ideas_clave_docentes": [
          "Consciencia situacional",
          "Topografia",
          "Obstaculos",
          "Margenes dinamicos"
        ],
        "explicacion_ampliada": "La ingenieria vincula las atenuaciones operacionales con la consciencia situacional y la evaluacion de topografia y obstaculos. La observacion del entorno permite mantener margenes dinamicos de seguridad y responder a cambios durante el vuelo. Haz visible que el entorno cambia y el margen debe adaptarse.",
        "que_decir": "Haz visible que el entorno cambia y el margen debe adaptarse.",
        "memorizar": [
          "Consciencia situacional",
          "Topografia",
          "Obstaculos"
        ],
        "comprender": [
          "La ingenieria vincula las atenuaciones operacionales con la consciencia situacional y la evaluacion de topografia y obstaculos.",
          "La mitigacion operacional depende de leer el entorno antes y durante el vuelo."
        ],
        "aplicar": [
          "La observacion del entorno permite mantener margenes dinamicos de seguridad y responder a cambios durante el vuelo.",
          "Volver al concepto de margen dinamico."
        ],
        "preguntas": [
          "De que dependen las atenuaciones operacionales?"
        ],
        "respuestas_esperadas": [
          "Consciencia situacional",
          "Evaluacion de topografia y obstaculos"
        ],
        "error_habitual": "Planificar una distancia fija sin observar cambios.",
        "como_reconducir": "Volver al concepto de margen dinamico.",
        "ejemplos_practicos": [
          "Marcar obstaculos y personas en un plano simple."
        ],
        "sugerencias_metodologicas": "Pedir al alumnado que justifique la respuesta con el concepto exacto de la ingenieria y que separe datos criticos, dependencias y alcance.",
        "demostracion": "Marcar obstaculos y personas en un plano simple.",
        "material_necesario": "Escenario de calle comercial.",
        "dinamica": "Deteccion colectiva de riesgos en un escenario.",
        "tiempo_recomendado": "7 min",
        "nivel_dificultad": "media",
        "competencias_trabajadas": [
          "Evaluacion del riesgo",
          "Aplicacion de mitigaciones A2",
          "Decision operacional justificada"
        ],
        "advertencias": [
          "Planificar una distancia fija sin observar cambios.",
          "Metodos SORA paso a paso: fuera del alcance del curso A2."
        ]
      }
    },
    {
      "id": 8,
      "titulo": "Evaluacion del riesgo del lugar",
      "tipo": "concepto central",
      "duracion": "9 min",
      "objetivo": "Definir la evaluacion del riesgo relacionado con el lugar.",
      "explicacion": "Es el analisis previo del entorno de operacion para identificar personas no participantes, obstaculos y zonas de prevencion.",
      "contenido": "Su finalidad es determinar si el volumen operacional y las zonas de prevencion de riesgos en tierra son adecuados para la mision.",
      "ideas_clave": [
        "Analisis previo",
        "Personas no participantes",
        "Obstaculos",
        "Zonas de prevencion"
      ],
      "resumen": "La evaluacion del lugar es troncal: sostiene cualquier decision de mitigacion.",
      "guion": "Presenta esta evaluacion como el paso que convierte una idea de vuelo en decision segura.",
      "material": "Croquis de volumen y zonas.",
      "pregunta": "Que debe identificar la evaluacion del lugar?",
      "respuestas_esperadas": [
        "Personas no participantes",
        "Obstaculos",
        "Zonas de prevencion"
      ],
      "error": "Evaluar solo el espacio aereo y olvidar el riesgo en tierra.",
      "como_reconducir": "Repetir que la fuente habla de entorno, obstaculos y zonas de prevencion en tierra.",
      "demostracion": "Dibujar volumen operacional y zona de prevencion.",
      "dinamica": "Analisis guiado de un escenario.",
      "no_explicar": "Estudios Aeronauticos de Seguridad complejos: fuera del alcance del curso A2.",
      "enlace": "El volumen operacional cambia con cada mision.",
      "profesor_plus": {
        "objetivos_docentes": [
          "Definir la evaluacion del riesgo relacionado con el lugar."
        ],
        "ideas_clave_docentes": [
          "Analisis previo",
          "Personas no participantes",
          "Obstaculos",
          "Zonas de prevencion"
        ],
        "explicacion_ampliada": "Es el analisis previo del entorno de operacion para identificar personas no participantes, obstaculos y zonas de prevencion. Su finalidad es determinar si el volumen operacional y las zonas de prevencion de riesgos en tierra son adecuados para la mision. Presenta esta evaluacion como el paso que convierte una idea de vuelo en decision segura.",
        "que_decir": "Presenta esta evaluacion como el paso que convierte una idea de vuelo en decision segura.",
        "memorizar": [
          "Analisis previo",
          "Personas no participantes",
          "Obstaculos"
        ],
        "comprender": [
          "Es el analisis previo del entorno de operacion para identificar personas no participantes, obstaculos y zonas de prevencion.",
          "La evaluacion del lugar es troncal: sostiene cualquier decision de mitigacion."
        ],
        "aplicar": [
          "Su finalidad es determinar si el volumen operacional y las zonas de prevencion de riesgos en tierra son adecuados para la mision.",
          "Repetir que la fuente habla de entorno, obstaculos y zonas de prevencion en tierra."
        ],
        "preguntas": [
          "Que debe identificar la evaluacion del lugar?"
        ],
        "respuestas_esperadas": [
          "Personas no participantes",
          "Obstaculos",
          "Zonas de prevencion"
        ],
        "error_habitual": "Evaluar solo el espacio aereo y olvidar el riesgo en tierra.",
        "como_reconducir": "Repetir que la fuente habla de entorno, obstaculos y zonas de prevencion en tierra.",
        "ejemplos_practicos": [
          "Trabajar sobre un croquis con personas no participantes, obstaculos y zonas de prevencion."
        ],
        "sugerencias_metodologicas": "Pedir al alumnado que justifique la respuesta con el concepto exacto de la ingenieria y que separe datos criticos, dependencias y alcance.",
        "demostracion": "Dibujar volumen operacional y zona de prevencion.",
        "material_necesario": "Croquis del entorno, volumen operacional y zonas de prevencion.",
        "dinamica": "Analisis guiado de un escenario.",
        "tiempo_recomendado": "9 min",
        "nivel_dificultad": "media",
        "competencias_trabajadas": [
          "Evaluacion del riesgo",
          "Aplicacion de mitigaciones A2",
          "Decision operacional justificada",
          "Consciencia situacional"
        ],
        "advertencias": [
          "Evaluar solo el espacio aereo y olvidar el riesgo en tierra.",
          "Estudios Aeronauticos de Seguridad complejos: fuera del alcance del curso A2."
        ]
      }
    },
    {
      "id": 9,
      "titulo": "Volumen operacional",
      "tipo": "concepto variable",
      "duracion": "7 min",
      "objetivo": "Comprender que el volumen operacional cambia segun la mision.",
      "explicacion": "La ingenieria clasifica el volumen operacional como concepto variable que cambia con cada mision segun la topografia y los objetivos.",
      "contenido": "El piloto debe relacionarlo con la evaluacion del lugar y con las zonas de prevencion de riesgos en tierra.",
      "ideas_clave": [
        "Volumen operacional",
        "Topografia",
        "Objetivos",
        "Mision"
      ],
      "resumen": "No existe un volumen universal: se define segun la mision y el entorno.",
      "guion": "Evita presentar el volumen como plantilla fija.",
      "material": "Dos croquis de mision diferentes.",
      "pregunta": "Por que cambia el volumen operacional?",
      "respuestas_esperadas": [
        "Por la topografia y los objetivos de cada mision"
      ],
      "error": "Copiar el mismo volumen para misiones diferentes.",
      "como_reconducir": "Volver a topografia y objetivos.",
      "demostracion": "Comparar calle comercial e inspeccion de tejado.",
      "dinamica": "Comparacion en grupo.",
      "no_explicar": "Modelos avanzados de riesgo no presentes.",
      "enlace": "La contencion ayuda a que el UAS no salga de ese volumen.",
      "profesor_plus": {
        "objetivos_docentes": [
          "Comprender que el volumen operacional cambia segun la mision."
        ],
        "ideas_clave_docentes": [
          "Volumen operacional",
          "Topografia",
          "Objetivos",
          "Mision"
        ],
        "explicacion_ampliada": "La ingenieria clasifica el volumen operacional como concepto variable que cambia con cada mision segun la topografia y los objetivos. El piloto debe relacionarlo con la evaluacion del lugar y con las zonas de prevencion de riesgos en tierra. Evita presentar el volumen como plantilla fija.",
        "que_decir": "Evita presentar el volumen como plantilla fija.",
        "memorizar": [
          "Volumen operacional",
          "Topografia",
          "Objetivos"
        ],
        "comprender": [
          "La ingenieria clasifica el volumen operacional como concepto variable que cambia con cada mision segun la topografia y los objetivos.",
          "No existe un volumen universal: se define segun la mision y el entorno."
        ],
        "aplicar": [
          "El piloto debe relacionarlo con la evaluacion del lugar y con las zonas de prevencion de riesgos en tierra.",
          "Volver a topografia y objetivos."
        ],
        "preguntas": [
          "Por que cambia el volumen operacional?"
        ],
        "respuestas_esperadas": [
          "Por la topografia y los objetivos de cada mision"
        ],
        "error_habitual": "Copiar el mismo volumen para misiones diferentes.",
        "como_reconducir": "Volver a topografia y objetivos.",
        "ejemplos_practicos": [
          "Trabajar sobre un croquis con personas no participantes, obstaculos y zonas de prevencion."
        ],
        "sugerencias_metodologicas": "Pedir al alumnado que justifique la respuesta con el concepto exacto de la ingenieria y que separe datos criticos, dependencias y alcance.",
        "demostracion": "Comparar calle comercial e inspeccion de tejado.",
        "material_necesario": "Croquis del entorno, volumen operacional y zonas de prevencion.",
        "dinamica": "Comparacion en grupo.",
        "tiempo_recomendado": "7 min",
        "nivel_dificultad": "media",
        "competencias_trabajadas": [
          "Evaluacion del riesgo",
          "Aplicacion de mitigaciones A2",
          "Decision operacional justificada",
          "Consciencia situacional"
        ],
        "advertencias": [
          "Copiar el mismo volumen para misiones diferentes.",
          "Modelos avanzados de riesgo no presentes."
        ]
      }
    },
    {
      "id": 10,
      "titulo": "Geoconsciencia y geofencing",
      "tipo": "concepto puente",
      "duracion": "8 min",
      "objetivo": "Explicar la geoconsciencia/geofencing como puente entre planificacion y contencion.",
      "explicacion": "La ingenieria lo define como puente entre la planificacion del espacio aereo y la contencion del UAS.",
      "contenido": "Su finalidad es asegurar que el dron no invada zonas prohibidas ni salga del volumen seguro definido.",
      "ideas_clave": [
        "Geoconsciencia",
        "Geofencing",
        "Planificacion",
        "Contencion"
      ],
      "resumen": "Geoconsciencia y geofencing conectan el plan con el limite operativo seguro.",
      "guion": "No profundices en sistemas no descritos; centra la explicacion en la relacion plan-contencion.",
      "material": "Mapa con volumen seguro y zona prohibida.",
      "pregunta": "Que conecta la geoconsciencia/geofencing?",
      "respuestas_esperadas": [
        "Planificacion del espacio aereo",
        "Contencion del UAS"
      ],
      "error": "Pensar que geoconsciencia reemplaza la evaluacion del piloto.",
      "como_reconducir": "Recordar que complementa, pero el piloto debe evaluar y actualizar.",
      "demostracion": "Dibujar limite virtual alrededor del volumen.",
      "dinamica": "Identificar zonas a evitar en un plano.",
      "no_explicar": "Requisitos avanzados de transpondedor modo S: fuera del alcance del curso A2.",
      "enlace": "La configuracion y actualizacion evitan limites obsoletos.",
      "profesor_plus": {
        "objetivos_docentes": [
          "Explicar la geoconsciencia/geofencing como puente entre planificacion y contencion."
        ],
        "ideas_clave_docentes": [
          "Geoconsciencia",
          "Geofencing",
          "Planificacion",
          "Contencion"
        ],
        "explicacion_ampliada": "La ingenieria lo define como puente entre la planificacion del espacio aereo y la contencion del UAS. Su finalidad es asegurar que el dron no invada zonas prohibidas ni salga del volumen seguro definido. No profundices en sistemas no descritos; centra la explicacion en la relacion plan-contencion.",
        "que_decir": "No profundices en sistemas no descritos; centra la explicacion en la relacion plan-contencion.",
        "memorizar": [
          "Geoconsciencia",
          "Geofencing",
          "Planificacion"
        ],
        "comprender": [
          "La ingenieria lo define como puente entre la planificacion del espacio aereo y la contencion del UAS.",
          "Geoconsciencia y geofencing conectan el plan con el limite operativo seguro."
        ],
        "aplicar": [
          "Su finalidad es asegurar que el dron no invada zonas prohibidas ni salga del volumen seguro definido.",
          "Recordar que complementa, pero el piloto debe evaluar y actualizar."
        ],
        "preguntas": [
          "Que conecta la geoconsciencia/geofencing?"
        ],
        "respuestas_esperadas": [
          "Planificacion del espacio aereo",
          "Contencion del UAS"
        ],
        "error_habitual": "Pensar que geoconsciencia reemplaza la evaluacion del piloto.",
        "como_reconducir": "Recordar que complementa, pero el piloto debe evaluar y actualizar.",
        "ejemplos_practicos": [
          "Usar el escenario de inspeccion de tejado con geo-caging para evitar la via publica colindante."
        ],
        "sugerencias_metodologicas": "Pedir al alumnado que justifique la respuesta con el concepto exacto de la ingenieria y que separe datos criticos, dependencias y alcance.",
        "demostracion": "Dibujar limite virtual alrededor del volumen.",
        "material_necesario": "Croquis del entorno, volumen operacional y zonas de prevencion.",
        "dinamica": "Identificar zonas a evitar en un plano.",
        "tiempo_recomendado": "8 min",
        "nivel_dificultad": "media",
        "competencias_trabajadas": [
          "Evaluacion del riesgo",
          "Aplicacion de mitigaciones A2",
          "Decision operacional justificada",
          "Uso responsable de sistemas tecnicos"
        ],
        "advertencias": [
          "Pensar que geoconsciencia reemplaza la evaluacion del piloto.",
          "Requisitos avanzados de transpondedor modo S: fuera del alcance del curso A2."
        ]
      }
    },
    {
      "id": 11,
      "titulo": "Datos geograficos actualizados",
      "tipo": "riesgo operacional",
      "duracion": "6 min",
      "objetivo": "Reconocer el riesgo de operar con limites geograficos obsoletos.",
      "explicacion": "La fuente identifica como error operacional no actualizar los datos geograficos del sistema de geoconsciencia.",
      "contenido": "Operar con limites de espacio aereo obsoletos puede comprometer la contencion y la prevencion de incidentes en zonas R/P.",
      "ideas_clave": [
        "Actualizacion",
        "Datos geograficos",
        "Limites obsoletos",
        "Zonas R/P"
      ],
      "resumen": "La geoconsciencia solo ayuda si sus datos son adecuados para la operacion.",
      "guion": "Presenta este punto como una comprobacion previa, sin ampliar bases de datos concretas.",
      "material": "Checklist de actualizacion.",
      "pregunta": "Que error operacional cita la ingenieria?",
      "respuestas_esperadas": [
        "No actualizar los datos geograficos del sistema de geoconsciencia"
      ],
      "error": "Creer que los limites digitales siempre estan actualizados.",
      "como_reconducir": "Pedir que el alumno lo incluya en la preparacion.",
      "demostracion": "Checklist antes de despegue.",
      "dinamica": "Revision individual de comprobaciones.",
      "no_explicar": "Procedimientos de proveedores concretos no presentes.",
      "enlace": "La contencion tambien aparece como geocaging/geofencing configurado.",
      "profesor_plus": {
        "objetivos_docentes": [
          "Reconocer el riesgo de operar con limites geograficos obsoletos."
        ],
        "ideas_clave_docentes": [
          "Actualizacion",
          "Datos geograficos",
          "Limites obsoletos",
          "Zonas R/P"
        ],
        "explicacion_ampliada": "La fuente identifica como error operacional no actualizar los datos geograficos del sistema de geoconsciencia. Operar con limites de espacio aereo obsoletos puede comprometer la contencion y la prevencion de incidentes en zonas R/P. Presenta este punto como una comprobacion previa, sin ampliar bases de datos concretas.",
        "que_decir": "Presenta este punto como una comprobacion previa, sin ampliar bases de datos concretas.",
        "memorizar": [
          "Actualizacion",
          "Datos geograficos",
          "Limites obsoletos"
        ],
        "comprender": [
          "La fuente identifica como error operacional no actualizar los datos geograficos del sistema de geoconsciencia.",
          "La geoconsciencia solo ayuda si sus datos son adecuados para la operacion."
        ],
        "aplicar": [
          "Operar con limites de espacio aereo obsoletos puede comprometer la contencion y la prevencion de incidentes en zonas R/P.",
          "Pedir que el alumno lo incluya en la preparacion."
        ],
        "preguntas": [
          "Que error operacional cita la ingenieria?"
        ],
        "respuestas_esperadas": [
          "No actualizar los datos geograficos del sistema de geoconsciencia"
        ],
        "error_habitual": "Creer que los limites digitales siempre estan actualizados.",
        "como_reconducir": "Pedir que el alumno lo incluya en la preparacion.",
        "ejemplos_practicos": [
          "Usar el escenario de inspeccion de tejado con geo-caging para evitar la via publica colindante."
        ],
        "sugerencias_metodologicas": "Pedir al alumnado que justifique la respuesta con el concepto exacto de la ingenieria y que separe datos criticos, dependencias y alcance.",
        "demostracion": "Checklist antes de despegue.",
        "material_necesario": "Tabla de datos criticos del Bloque 6.",
        "dinamica": "Revision individual de comprobaciones.",
        "tiempo_recomendado": "6 min",
        "nivel_dificultad": "media",
        "competencias_trabajadas": [
          "Evaluacion del riesgo",
          "Aplicacion de mitigaciones A2",
          "Decision operacional justificada"
        ],
        "advertencias": [
          "Creer que los limites digitales siempre estan actualizados.",
          "Procedimientos de proveedores concretos no presentes."
        ]
      }
    },
    {
      "id": 12,
      "titulo": "Contencion de vuelo",
      "tipo": "dependencia",
      "duracion": "7 min",
      "objetivo": "Relacionar geocaging/geofencing configurado con la prevencion de incidentes.",
      "explicacion": "La tabla de dependencias vincula la contencion de vuelo con geocaging/geofencing configurado.",
      "contenido": "Esa contencion desbloquea la prevencion de incidentes en zonas R/P y tiene importancia muy alta.",
      "ideas_clave": [
        "Contencion",
        "Geocaging",
        "Geofencing",
        "Zonas R/P"
      ],
      "resumen": "La contencion evita que el UAS salga del volumen seguro definido o invada zonas sensibles.",
      "guion": "Usa el escenario de inspeccion de tejado junto a via publica.",
      "material": "Croquis con limite virtual.",
      "pregunta": "De que depende la contencion de vuelo?",
      "respuestas_esperadas": [
        "Geocaging/geofencing configurado"
      ],
      "error": "Confundir contencion con recuperacion manual.",
      "como_reconducir": "Diferenciar limite preventivo y reaccion ante fallo.",
      "demostracion": "Dibujar limite y ruta prevista.",
      "dinamica": "Analisis de riesgo en croquis.",
      "no_explicar": "Metodologia SORA completa: fuera del alcance del curso A2.",
      "enlace": "Cuando algo falla, aparece la recuperacion manual.",
      "profesor_plus": {
        "objetivos_docentes": [
          "Relacionar geocaging/geofencing configurado con la prevencion de incidentes."
        ],
        "ideas_clave_docentes": [
          "Contencion",
          "Geocaging",
          "Geofencing",
          "Zonas R/P"
        ],
        "explicacion_ampliada": "La tabla de dependencias vincula la contencion de vuelo con geocaging/geofencing configurado. Esa contencion desbloquea la prevencion de incidentes en zonas R/P y tiene importancia muy alta. Usa el escenario de inspeccion de tejado junto a via publica.",
        "que_decir": "Usa el escenario de inspeccion de tejado junto a via publica.",
        "memorizar": [
          "Contencion",
          "Geocaging",
          "Geofencing"
        ],
        "comprender": [
          "La tabla de dependencias vincula la contencion de vuelo con geocaging/geofencing configurado.",
          "La contencion evita que el UAS salga del volumen seguro definido o invada zonas sensibles."
        ],
        "aplicar": [
          "Esa contencion desbloquea la prevencion de incidentes en zonas R/P y tiene importancia muy alta.",
          "Diferenciar limite preventivo y reaccion ante fallo."
        ],
        "preguntas": [
          "De que depende la contencion de vuelo?"
        ],
        "respuestas_esperadas": [
          "Geocaging/geofencing configurado"
        ],
        "error_habitual": "Confundir contencion con recuperacion manual.",
        "como_reconducir": "Diferenciar limite preventivo y reaccion ante fallo.",
        "ejemplos_practicos": [
          "Usar el escenario de inspeccion de tejado con geo-caging para evitar la via publica colindante."
        ],
        "sugerencias_metodologicas": "Pedir al alumnado que justifique la respuesta con el concepto exacto de la ingenieria y que separe datos criticos, dependencias y alcance.",
        "demostracion": "Dibujar limite y ruta prevista.",
        "material_necesario": "Croquis del entorno, volumen operacional y zonas de prevencion.",
        "dinamica": "Analisis de riesgo en croquis.",
        "tiempo_recomendado": "7 min",
        "nivel_dificultad": "media",
        "competencias_trabajadas": [
          "Evaluacion del riesgo",
          "Aplicacion de mitigaciones A2",
          "Decision operacional justificada",
          "Uso responsable de sistemas tecnicos"
        ],
        "advertencias": [
          "Confundir contencion con recuperacion manual.",
          "Metodologia SORA completa: fuera del alcance del curso A2."
        ]
      }
    },
    {
      "id": 13,
      "titulo": "Sistema de terminacion de vuelo",
      "tipo": "concepto",
      "duracion": "8 min",
      "objetivo": "Definir el sistema de terminacion de vuelo y su finalidad.",
      "explicacion": "Es un mecanismo tecnico que permite forzar el aterrizaje o parada de motores de forma inmediata.",
      "contenido": "Su finalidad es evitar que el UAS abandone el volumen operacional o se convierta en un peligro incontrolado, fly-away.",
      "ideas_clave": [
        "Terminacion de vuelo",
        "Aterrizaje forzado",
        "Parada de motores",
        "Fly-away"
      ],
      "resumen": "La terminacion de vuelo es una barrera tecnica ante perdida de control o salida del volumen.",
      "guion": "Tratalo como ultimo recurso tecnico citado por la ingenieria.",
      "material": "Secuencia riesgo -> terminacion.",
      "pregunta": "Que permite hacer el sistema de terminacion de vuelo?",
      "respuestas_esperadas": [
        "Forzar el aterrizaje",
        "Parar motores de forma inmediata"
      ],
      "error": "Usarlo como sustituto de la planificacion.",
      "como_reconducir": "Recordar que debe comprobarse antes del despegue y no reemplaza mitigaciones previas.",
      "demostracion": "Linea de barreras: planificar, contener, reaccionar.",
      "dinamica": "Debate breve sobre ultimo recurso.",
      "no_explicar": "Detalles tecnicos de fabricantes no presentes.",
      "enlace": "Este sistema exige comprobacion obligatoria previa.",
      "profesor_plus": {
        "objetivos_docentes": [
          "Definir el sistema de terminacion de vuelo y su finalidad."
        ],
        "ideas_clave_docentes": [
          "Terminacion de vuelo",
          "Aterrizaje forzado",
          "Parada de motores",
          "Fly-away"
        ],
        "explicacion_ampliada": "Es un mecanismo tecnico que permite forzar el aterrizaje o parada de motores de forma inmediata. Su finalidad es evitar que el UAS abandone el volumen operacional o se convierta en un peligro incontrolado, fly-away. Tratalo como ultimo recurso tecnico citado por la ingenieria.",
        "que_decir": "Tratalo como ultimo recurso tecnico citado por la ingenieria.",
        "memorizar": [
          "Terminacion de vuelo",
          "Aterrizaje forzado",
          "Parada de motores"
        ],
        "comprender": [
          "Es un mecanismo tecnico que permite forzar el aterrizaje o parada de motores de forma inmediata.",
          "La terminacion de vuelo es una barrera tecnica ante perdida de control o salida del volumen."
        ],
        "aplicar": [
          "Su finalidad es evitar que el UAS abandone el volumen operacional o se convierta en un peligro incontrolado, fly-away.",
          "Recordar que debe comprobarse antes del despegue y no reemplaza mitigaciones previas."
        ],
        "preguntas": [
          "Que permite hacer el sistema de terminacion de vuelo?"
        ],
        "respuestas_esperadas": [
          "Forzar el aterrizaje",
          "Parar motores de forma inmediata"
        ],
        "error_habitual": "Usarlo como sustituto de la planificacion.",
        "como_reconducir": "Recordar que debe comprobarse antes del despegue y no reemplaza mitigaciones previas.",
        "ejemplos_practicos": [
          "Analizar la perdida de senal GPS y la necesidad de recuperar control manual ante deriva hacia zona habitada."
        ],
        "sugerencias_metodologicas": "Pedir al alumnado que justifique la respuesta con el concepto exacto de la ingenieria y que separe datos criticos, dependencias y alcance.",
        "demostracion": "Linea de barreras: planificar, contener, reaccionar.",
        "material_necesario": "Checklist previo al despegue y escenario de fallo.",
        "dinamica": "Debate breve sobre ultimo recurso.",
        "tiempo_recomendado": "8 min",
        "nivel_dificultad": "media",
        "competencias_trabajadas": [
          "Evaluacion del riesgo",
          "Aplicacion de mitigaciones A2",
          "Decision operacional justificada",
          "Uso responsable de sistemas tecnicos"
        ],
        "advertencias": [
          "Usarlo como sustituto de la planificacion.",
          "Detalles tecnicos de fabricantes no presentes."
        ]
      }
    },
    {
      "id": 14,
      "titulo": "Comprobacion antes del despegue",
      "tipo": "aplicacion",
      "duracion": "7 min",
      "objetivo": "Fijar la comprobacion obligatoria del sistema de terminacion antes del despegue.",
      "explicacion": "La ingenieria indica que el sistema de terminacion de vuelo depende de una comprobacion obligatoria antes del despegue.",
      "contenido": "En A2, esta comprobacion es importante por la proximidad a personas y el tiempo minimo de reaccion.",
      "ideas_clave": [
        "Antes del despegue",
        "Comprobacion",
        "Proximidad",
        "Tiempo de reaccion"
      ],
      "resumen": "La seguridad de emergencia se prepara antes de volar, no cuando aparece el problema.",
      "guion": "Conecta la comprobacion previa con operaciones A2 a distancias reducidas.",
      "material": "Checklist previo.",
      "pregunta": "Cuando debe comprobarse el sistema de terminacion?",
      "respuestas_esperadas": [
        "Antes del despegue"
      ],
      "error": "Recordarlo solo cuando aparece la emergencia.",
      "como_reconducir": "Convertirlo en punto fijo del checklist.",
      "demostracion": "Insertar el item en una lista previa al vuelo.",
      "dinamica": "Construccion colectiva de checklist.",
      "no_explicar": "Protocolos no citados por la fuente.",
      "enlace": "Otro eje de aplicacion son las distancias A2.",
      "profesor_plus": {
        "objetivos_docentes": [
          "Fijar la comprobacion obligatoria del sistema de terminacion antes del despegue."
        ],
        "ideas_clave_docentes": [
          "Antes del despegue",
          "Comprobacion",
          "Proximidad",
          "Tiempo de reaccion"
        ],
        "explicacion_ampliada": "La ingenieria indica que el sistema de terminacion de vuelo depende de una comprobacion obligatoria antes del despegue. En A2, esta comprobacion es importante por la proximidad a personas y el tiempo minimo de reaccion. Conecta la comprobacion previa con operaciones A2 a distancias reducidas.",
        "que_decir": "Conecta la comprobacion previa con operaciones A2 a distancias reducidas.",
        "memorizar": [
          "Antes del despegue",
          "Comprobacion",
          "Proximidad"
        ],
        "comprender": [
          "La ingenieria indica que el sistema de terminacion de vuelo depende de una comprobacion obligatoria antes del despegue.",
          "La seguridad de emergencia se prepara antes de volar, no cuando aparece el problema."
        ],
        "aplicar": [
          "En A2, esta comprobacion es importante por la proximidad a personas y el tiempo minimo de reaccion.",
          "Convertirlo en punto fijo del checklist."
        ],
        "preguntas": [
          "Cuando debe comprobarse el sistema de terminacion?"
        ],
        "respuestas_esperadas": [
          "Antes del despegue"
        ],
        "error_habitual": "Recordarlo solo cuando aparece la emergencia.",
        "como_reconducir": "Convertirlo en punto fijo del checklist.",
        "ejemplos_practicos": [
          "Analizar la perdida de senal GPS y la necesidad de recuperar control manual ante deriva hacia zona habitada."
        ],
        "sugerencias_metodologicas": "Pedir al alumnado que justifique la respuesta con el concepto exacto de la ingenieria y que separe datos criticos, dependencias y alcance.",
        "demostracion": "Insertar el item en una lista previa al vuelo.",
        "material_necesario": "Checklist previo al despegue y escenario de fallo.",
        "dinamica": "Construccion colectiva de checklist.",
        "tiempo_recomendado": "7 min",
        "nivel_dificultad": "baja",
        "competencias_trabajadas": [
          "Evaluacion del riesgo",
          "Aplicacion de mitigaciones A2",
          "Decision operacional justificada"
        ],
        "advertencias": [
          "Recordarlo solo cuando aparece la emergencia.",
          "Protocolos no citados por la fuente."
        ]
      }
    },
    {
      "id": 15,
      "titulo": "Distancias A2: 30 m y 5 m",
      "tipo": "dato critico",
      "duracion": "8 min",
      "objetivo": "Memorizar y aplicar las distancias fijas indicadas para A2.",
      "explicacion": "La ingenieria fija 30 metros como distancia general y 5 metros en modo lento.",
      "contenido": "El vuelo a 5 metros depende del modo baja velocidad y desbloquea la operacion urbana en A2.",
      "ideas_clave": [
        "30 m general",
        "5 m modo lento",
        "Operacion urbana A2"
      ],
      "resumen": "30 m es la referencia general; 5 m requiere modo lento.",
      "guion": "Insiste en dependencia y no solo en memorizacion.",
      "material": "Tarjeta comparativa 30/5.",
      "pregunta": "Que distancia corresponde al modo lento?",
      "respuestas_esperadas": [
        "5 metros"
      ],
      "error": "Aplicar 5 m sin modo lento.",
      "como_reconducir": "Preguntar siempre cual es la condicion que desbloquea los 5 m.",
      "demostracion": "Comparativa 30 m normal / 5 m modo lento.",
      "dinamica": "Pregunta tipo examen.",
      "no_explicar": "Otras distancias no presentes en la ingenieria.",
      "enlace": "La distancia se completa con la regla 1:1.",
      "profesor_plus": {
        "objetivos_docentes": [
          "Memorizar y aplicar las distancias fijas indicadas para A2."
        ],
        "ideas_clave_docentes": [
          "30 m general",
          "5 m modo lento",
          "Operacion urbana A2"
        ],
        "explicacion_ampliada": "La ingenieria fija 30 metros como distancia general y 5 metros en modo lento. El vuelo a 5 metros depende del modo baja velocidad y desbloquea la operacion urbana en A2. Insiste en dependencia y no solo en memorizacion.",
        "que_decir": "Insiste en dependencia y no solo en memorizacion.",
        "memorizar": [
          "30 m general",
          "5 m modo lento",
          "Operacion urbana A2"
        ],
        "comprender": [
          "La ingenieria fija 30 metros como distancia general y 5 metros en modo lento.",
          "30 m es la referencia general; 5 m requiere modo lento."
        ],
        "aplicar": [
          "El vuelo a 5 metros depende del modo baja velocidad y desbloquea la operacion urbana en A2.",
          "Preguntar siempre cual es la condicion que desbloquea los 5 m."
        ],
        "preguntas": [
          "Que distancia corresponde al modo lento?"
        ],
        "respuestas_esperadas": [
          "5 metros"
        ],
        "error_habitual": "Aplicar 5 m sin modo lento.",
        "como_reconducir": "Preguntar siempre cual es la condicion que desbloquea los 5 m.",
        "ejemplos_practicos": [
          "Aplicar el escenario de video profesional en una calle comercial manteniendo separacion minima y altura proporcional."
        ],
        "sugerencias_metodologicas": "Pedir al alumnado que justifique la respuesta con el concepto exacto de la ingenieria y que separe datos criticos, dependencias y alcance.",
        "demostracion": "Comparativa 30 m normal / 5 m modo lento.",
        "material_necesario": "Tabla de datos criticos del Bloque 6.",
        "dinamica": "Pregunta tipo examen.",
        "tiempo_recomendado": "8 min",
        "nivel_dificultad": "media",
        "competencias_trabajadas": [
          "Evaluacion del riesgo",
          "Aplicacion de mitigaciones A2",
          "Decision operacional justificada",
          "Consciencia situacional"
        ],
        "advertencias": [
          "Aplicar 5 m sin modo lento.",
          "Otras distancias no presentes en la ingenieria."
        ]
      }
    },
    {
      "id": 16,
      "titulo": "Regla 1:1",
      "tipo": "dato critico",
      "duracion": "8 min",
      "objetivo": "Comprender la altura proporcional indicada por la Regla 1:1.",
      "explicacion": "La ingenieria define la altura proporcional como altura menor o igual a la distancia horizontal.",
      "contenido": "En el escenario de calle comercial, se cita mantener separacion minima y altura proporcional mediante la Regla 1:1.",
      "ideas_clave": [
        "Regla 1:1",
        "Altura",
        "Distancia horizontal",
        "Proporcionalidad"
      ],
      "resumen": "La altura debe mantenerse menor o igual a la distancia horizontal.",
      "guion": "Usa un dibujo simple de altura y distancia horizontal, sin anadir formulas externas.",
      "material": "Diagrama altura/distancia.",
      "pregunta": "Como se expresa la Regla 1:1 en la ingenieria?",
      "respuestas_esperadas": [
        "Altura <= distancia horizontal"
      ],
      "error": "Desligar la altura de la distancia horizontal.",
      "como_reconducir": "Dibujar ambas magnitudes juntas.",
      "demostracion": "Triangulo con altura y distancia.",
      "dinamica": "Aplicacion visual guiada.",
      "no_explicar": "Calculos no incluidos en la fuente.",
      "enlace": "Estos datos se aplican ante personas no participantes.",
      "profesor_plus": {
        "objetivos_docentes": [
          "Comprender la altura proporcional indicada por la Regla 1:1."
        ],
        "ideas_clave_docentes": [
          "Regla 1:1",
          "Altura",
          "Distancia horizontal",
          "Proporcionalidad"
        ],
        "explicacion_ampliada": "La ingenieria define la altura proporcional como altura menor o igual a la distancia horizontal. En el escenario de calle comercial, se cita mantener separacion minima y altura proporcional mediante la Regla 1:1. Usa un dibujo simple de altura y distancia horizontal, sin anadir formulas externas.",
        "que_decir": "Usa un dibujo simple de altura y distancia horizontal, sin anadir formulas externas.",
        "memorizar": [
          "Regla 1:1",
          "Altura",
          "Distancia horizontal"
        ],
        "comprender": [
          "La ingenieria define la altura proporcional como altura menor o igual a la distancia horizontal.",
          "La altura debe mantenerse menor o igual a la distancia horizontal."
        ],
        "aplicar": [
          "En el escenario de calle comercial, se cita mantener separacion minima y altura proporcional mediante la Regla 1:1.",
          "Dibujar ambas magnitudes juntas."
        ],
        "preguntas": [
          "Como se expresa la Regla 1:1 en la ingenieria?"
        ],
        "respuestas_esperadas": [
          "Altura <= distancia horizontal"
        ],
        "error_habitual": "Desligar la altura de la distancia horizontal.",
        "como_reconducir": "Dibujar ambas magnitudes juntas.",
        "ejemplos_practicos": [
          "Aplicar el escenario de video profesional en una calle comercial manteniendo separacion minima y altura proporcional."
        ],
        "sugerencias_metodologicas": "Pedir al alumnado que justifique la respuesta con el concepto exacto de la ingenieria y que separe datos criticos, dependencias y alcance.",
        "demostracion": "Triangulo con altura y distancia.",
        "material_necesario": "Tabla de datos criticos del Bloque 6.",
        "dinamica": "Aplicacion visual guiada.",
        "tiempo_recomendado": "8 min",
        "nivel_dificultad": "media",
        "competencias_trabajadas": [
          "Evaluacion del riesgo",
          "Aplicacion de mitigaciones A2",
          "Decision operacional justificada",
          "Consciencia situacional"
        ],
        "advertencias": [
          "Desligar la altura de la distancia horizontal.",
          "Calculos no incluidos en la fuente."
        ]
      }
    },
    {
      "id": 17,
      "titulo": "Personas no participantes",
      "tipo": "aplicacion",
      "duracion": "8 min",
      "objetivo": "Aplicar las mitigaciones ante presencia o entrada de personas no participantes.",
      "explicacion": "El grafo comienza con identificacion de personas no participantes y culmina en gestion de incursiones de terceros.",
      "contenido": "Si una persona no participante entra en la zona de prevencion de riesgos en tierra, el piloto debe aplicar atenuaciones operacionales para minimizar la exposicion al riesgo.",
      "ideas_clave": [
        "Personas no participantes",
        "Zona de prevencion",
        "Incursion",
        "Gestion del riesgo"
      ],
      "resumen": "La aparicion de terceros obliga a observar, decidir y mantener margenes de seguridad.",
      "guion": "No formules una solucion unica no presente; trabaja la decision justificada.",
      "material": "Escenario con incursion.",
      "pregunta": "Que concepto del grafo se aplica ante incursiones de terceros?",
      "respuestas_esperadas": [
        "Gestion de incursiones de terceros",
        "Atenuaciones operacionales"
      ],
      "error": "Continuar la operacion como si la zona siguiera despejada.",
      "como_reconducir": "Volver a minimizar exposicion al riesgo y margen dinamico.",
      "demostracion": "Marcar la nueva posicion de la persona en el croquis.",
      "dinamica": "Decision colectiva justificada.",
      "no_explicar": "Procedimientos detallados no presentes en la fuente.",
      "enlace": "La recuperacion manual aparece cuando los sistemas automaticos fallan.",
      "profesor_plus": {
        "objetivos_docentes": [
          "Aplicar las mitigaciones ante presencia o entrada de personas no participantes."
        ],
        "ideas_clave_docentes": [
          "Personas no participantes",
          "Zona de prevencion",
          "Incursion",
          "Gestion del riesgo"
        ],
        "explicacion_ampliada": "El grafo comienza con identificacion de personas no participantes y culmina en gestion de incursiones de terceros. Si una persona no participante entra en la zona de prevencion de riesgos en tierra, el piloto debe aplicar atenuaciones operacionales para minimizar la exposicion al riesgo. No formules una solucion unica no presente; trabaja la decision justificada.",
        "que_decir": "No formules una solucion unica no presente; trabaja la decision justificada.",
        "memorizar": [
          "Personas no participantes",
          "Zona de prevencion",
          "Incursion"
        ],
        "comprender": [
          "El grafo comienza con identificacion de personas no participantes y culmina en gestion de incursiones de terceros.",
          "La aparicion de terceros obliga a observar, decidir y mantener margenes de seguridad."
        ],
        "aplicar": [
          "Si una persona no participante entra en la zona de prevencion de riesgos en tierra, el piloto debe aplicar atenuaciones operacionales para minimizar la exposicion al riesgo.",
          "Volver a minimizar exposicion al riesgo y margen dinamico."
        ],
        "preguntas": [
          "Que concepto del grafo se aplica ante incursiones de terceros?"
        ],
        "respuestas_esperadas": [
          "Gestion de incursiones de terceros",
          "Atenuaciones operacionales"
        ],
        "error_habitual": "Continuar la operacion como si la zona siguiera despejada.",
        "como_reconducir": "Volver a minimizar exposicion al riesgo y margen dinamico.",
        "ejemplos_practicos": [
          "Trabajar sobre un croquis con personas no participantes, obstaculos y zonas de prevencion."
        ],
        "sugerencias_metodologicas": "Pedir al alumnado que justifique la respuesta con el concepto exacto de la ingenieria y que separe datos criticos, dependencias y alcance.",
        "demostracion": "Marcar la nueva posicion de la persona en el croquis.",
        "material_necesario": "Croquis del entorno, volumen operacional y zonas de prevencion.",
        "dinamica": "Decision colectiva justificada.",
        "tiempo_recomendado": "8 min",
        "nivel_dificultad": "alta",
        "competencias_trabajadas": [
          "Evaluacion del riesgo",
          "Aplicacion de mitigaciones A2",
          "Decision operacional justificada",
          "Consciencia situacional"
        ],
        "advertencias": [
          "Continuar la operacion como si la zona siguiera despejada.",
          "Procedimientos detallados no presentes en la fuente."
        ]
      }
    },
    {
      "id": 18,
      "titulo": "Recuperacion manual",
      "tipo": "riesgo",
      "duracion": "8 min",
      "objetivo": "Comprender la recuperacion manual como respuesta ante fallo de sistemas automaticos.",
      "explicacion": "La tabla indica que la recuperacion manual depende de la desactivacion de sistemas automaticos y desbloquea el control en situaciones de riesgo imprevisto.",
      "contenido": "La ingenieria advierte contra confiar exclusivamente en los sistemas automaticos y no estar preparado para reanudar el control manual si fallan.",
      "ideas_clave": [
        "Recuperacion manual",
        "Sistemas automaticos",
        "Riesgo imprevisto",
        "Control"
      ],
      "resumen": "El piloto debe estar preparado para recuperar el control manual si fallan automatismos.",
      "guion": "Conecta este punto con el escenario de perdida de senal GPS.",
      "material": "Secuencia fallo -> recuperacion.",
      "pregunta": "Que error habitual cita la ingenieria respecto a sistemas automaticos?",
      "respuestas_esperadas": [
        "Confiar exclusivamente en ellos",
        "No estar preparado para reanudar control manual"
      ],
      "error": "Creer que los automaticos eliminan la necesidad de habilidad del piloto.",
      "como_reconducir": "Volver a la responsabilidad de reanudar control manual.",
      "demostracion": "Analizar perdida de senal GPS y deriva hacia zona habitada.",
      "dinamica": "Escenario de reaccion guiado.",
      "no_explicar": "Detalles tecnicos de GPS no presentes.",
      "enlace": "La carga util tambien cambia la evaluacion de riesgo.",
      "profesor_plus": {
        "objetivos_docentes": [
          "Comprender la recuperacion manual como respuesta ante fallo de sistemas automaticos."
        ],
        "ideas_clave_docentes": [
          "Recuperacion manual",
          "Sistemas automaticos",
          "Riesgo imprevisto",
          "Control"
        ],
        "explicacion_ampliada": "La tabla indica que la recuperacion manual depende de la desactivacion de sistemas automaticos y desbloquea el control en situaciones de riesgo imprevisto. La ingenieria advierte contra confiar exclusivamente en los sistemas automaticos y no estar preparado para reanudar el control manual si fallan. Conecta este punto con el escenario de perdida de senal GPS.",
        "que_decir": "Conecta este punto con el escenario de perdida de senal GPS.",
        "memorizar": [
          "Recuperacion manual",
          "Sistemas automaticos",
          "Riesgo imprevisto"
        ],
        "comprender": [
          "La tabla indica que la recuperacion manual depende de la desactivacion de sistemas automaticos y desbloquea el control en situaciones de riesgo imprevisto.",
          "El piloto debe estar preparado para recuperar el control manual si fallan automatismos."
        ],
        "aplicar": [
          "La ingenieria advierte contra confiar exclusivamente en los sistemas automaticos y no estar preparado para reanudar el control manual si fallan.",
          "Volver a la responsabilidad de reanudar control manual."
        ],
        "preguntas": [
          "Que error habitual cita la ingenieria respecto a sistemas automaticos?"
        ],
        "respuestas_esperadas": [
          "Confiar exclusivamente en ellos",
          "No estar preparado para reanudar control manual"
        ],
        "error_habitual": "Creer que los automaticos eliminan la necesidad de habilidad del piloto.",
        "como_reconducir": "Volver a la responsabilidad de reanudar control manual.",
        "ejemplos_practicos": [
          "Analizar la perdida de senal GPS y la necesidad de recuperar control manual ante deriva hacia zona habitada."
        ],
        "sugerencias_metodologicas": "Pedir al alumnado que justifique la respuesta con el concepto exacto de la ingenieria y que separe datos criticos, dependencias y alcance.",
        "demostracion": "Analizar perdida de senal GPS y deriva hacia zona habitada.",
        "material_necesario": "Checklist previo al despegue y escenario de fallo.",
        "dinamica": "Escenario de reaccion guiado.",
        "tiempo_recomendado": "8 min",
        "nivel_dificultad": "alta",
        "competencias_trabajadas": [
          "Evaluacion del riesgo",
          "Aplicacion de mitigaciones A2",
          "Decision operacional justificada",
          "Consciencia situacional"
        ],
        "advertencias": [
          "Creer que los automaticos eliminan la necesidad de habilidad del piloto.",
          "Detalles tecnicos de GPS no presentes."
        ]
      }
    },
    {
      "id": 19,
      "titulo": "Carga util y energia de impacto",
      "tipo": "concepto variable",
      "duracion": "7 min",
      "objetivo": "Relacionar carga util y dispositivos de limitacion de energia con la evaluacion del riesgo.",
      "explicacion": "La carga util debe verificarse en cada configuracion por su compatibilidad y efecto en el riesgo de impacto.",
      "contenido": "El uso de dispositivos de limitacion de energia de impacto aparece como complementario en la auditoria de la ingenieria.",
      "ideas_clave": [
        "Carga util",
        "Compatibilidad",
        "Riesgo de impacto",
        "Limitacion de energia"
      ],
      "resumen": "Cada configuracion de carga puede cambiar la evaluacion del riesgo.",
      "guion": "Mantente en el nivel de la fuente: verificar compatibilidad y efecto en el riesgo.",
      "material": "Tabla configuracion/riesgo.",
      "pregunta": "Que debe verificarse en cada configuracion de carga util?",
      "respuestas_esperadas": [
        "Compatibilidad",
        "Efecto en el riesgo de impacto"
      ],
      "error": "Tratar la carga util como neutra para la seguridad.",
      "como_reconducir": "Vincular carga, compatibilidad y riesgo de impacto.",
      "demostracion": "Comparar configuraciones sin valores nuevos.",
      "dinamica": "Reflexion individual con puesta en comun.",
      "no_explicar": "Vuelo sobre aglomeraciones y categoria especifica: fuera del alcance del curso A2.",
      "enlace": "Cerramos con datos criticos y limites de alcance.",
      "profesor_plus": {
        "objetivos_docentes": [
          "Relacionar carga util y dispositivos de limitacion de energia con la evaluacion del riesgo."
        ],
        "ideas_clave_docentes": [
          "Carga util",
          "Compatibilidad",
          "Riesgo de impacto",
          "Limitacion de energia"
        ],
        "explicacion_ampliada": "La carga util debe verificarse en cada configuracion por su compatibilidad y efecto en el riesgo de impacto. El uso de dispositivos de limitacion de energia de impacto aparece como complementario en la auditoria de la ingenieria. Mantente en el nivel de la fuente: verificar compatibilidad y efecto en el riesgo.",
        "que_decir": "Mantente en el nivel de la fuente: verificar compatibilidad y efecto en el riesgo.",
        "memorizar": [
          "Carga util",
          "Compatibilidad",
          "Riesgo de impacto"
        ],
        "comprender": [
          "La carga util debe verificarse en cada configuracion por su compatibilidad y efecto en el riesgo de impacto.",
          "Cada configuracion de carga puede cambiar la evaluacion del riesgo."
        ],
        "aplicar": [
          "El uso de dispositivos de limitacion de energia de impacto aparece como complementario en la auditoria de la ingenieria.",
          "Vincular carga, compatibilidad y riesgo de impacto."
        ],
        "preguntas": [
          "Que debe verificarse en cada configuracion de carga util?"
        ],
        "respuestas_esperadas": [
          "Compatibilidad",
          "Efecto en el riesgo de impacto"
        ],
        "error_habitual": "Tratar la carga util como neutra para la seguridad.",
        "como_reconducir": "Vincular carga, compatibilidad y riesgo de impacto.",
        "ejemplos_practicos": [
          "Comparar configuraciones sin valores nuevos."
        ],
        "sugerencias_metodologicas": "Pedir al alumnado que justifique la respuesta con el concepto exacto de la ingenieria y que separe datos criticos, dependencias y alcance.",
        "demostracion": "Comparar configuraciones sin valores nuevos.",
        "material_necesario": "Tabla configuracion/riesgo.",
        "dinamica": "Reflexion individual con puesta en comun.",
        "tiempo_recomendado": "7 min",
        "nivel_dificultad": "alta",
        "competencias_trabajadas": [
          "Evaluacion del riesgo",
          "Aplicacion de mitigaciones A2",
          "Decision operacional justificada"
        ],
        "advertencias": [
          "Tratar la carga util como neutra para la seguridad.",
          "Vuelo sobre aglomeraciones y categoria especifica: fuera del alcance del curso A2."
        ]
      }
    },
    {
      "id": 20,
      "titulo": "Cierre del Bloque 6 Base",
      "tipo": "cierre",
      "duracion": "6 min",
      "objetivo": "Cerrar el Bloque Base fijando imprescindibles, complementarios y fuera de alcance.",
      "explicacion": "Imprescindible: distancias 30 m y 5 m, modo baja velocidad, geoconsciencia, limitacion de altura, regla 1:1 y evaluacion del riesgo del lugar.",
      "contenido": "Complementario: dispositivos de limitacion de energia de impacto y coordinacion tactica con observadores. Fuera del alcance: SORA completa, EAS complejos de categoria especifica y transpondedor modo S.",
      "ideas_clave": [
        "30 m / 5 m",
        "Modo lento",
        "Geoconsciencia",
        "Regla 1:1",
        "Evaluacion del lugar"
      ],
      "resumen": "El Bloque 6 Base queda listo para generar Flashcards segun el flujo DronLab SDK.",
      "guion": "Cierra con una cadena: personas y obstaculos, atenuaciones tecnicas, atenuaciones operacionales, aplicacion segura.",
      "material": "Checklist final del bloque.",
      "pregunta": "Que conceptos son imprescindibles en el Bloque 6 A2?",
      "respuestas_esperadas": [
        "30 m y 5 m",
        "Modo baja velocidad",
        "Geoconsciencia",
        "Limitacion de altura",
        "Regla 1:1",
        "Evaluacion del riesgo del lugar"
      ],
      "error": "Abrir contenidos SORA, EAS complejos o transpondedor modo S.",
      "como_reconducir": "Volver al alcance A2 indicado por la ingenieria.",
      "demostracion": "Checklist de datos criticos y alcance.",
      "dinamica": "Clasificacion final A/B/C.",
      "no_explicar": "SORA completa, EAS complejos de categoria especifica y transpondedor modo S: fuera del alcance del curso A2.",
      "enlace": "Bloque 6 integrado y pendiente solo de validacion por experto.",
      "profesor_plus": {
        "objetivos_docentes": [
          "Cerrar el Bloque Base fijando imprescindibles, complementarios y fuera de alcance."
        ],
        "ideas_clave_docentes": [
          "30 m / 5 m",
          "Modo lento",
          "Geoconsciencia",
          "Regla 1:1",
          "Evaluacion del lugar"
        ],
        "explicacion_ampliada": "Imprescindible: distancias 30 m y 5 m, modo baja velocidad, geoconsciencia, limitacion de altura, regla 1:1 y evaluacion del riesgo del lugar. Complementario: dispositivos de limitacion de energia de impacto y coordinacion tactica con observadores. Fuera del alcance: SORA completa, EAS complejos de categoria especifica y transpondedor modo S. Cierra con una cadena: personas y obstaculos, atenuaciones tecnicas, atenuaciones operacionales, aplicacion segura.",
        "que_decir": "Cierra con una cadena: personas y obstaculos, atenuaciones tecnicas, atenuaciones operacionales, aplicacion segura.",
        "memorizar": [
          "30 m / 5 m",
          "Modo lento",
          "Geoconsciencia"
        ],
        "comprender": [
          "Imprescindible: distancias 30 m y 5 m, modo baja velocidad, geoconsciencia, limitacion de altura, regla 1:1 y evaluacion del riesgo del lugar.",
          "El Bloque 6 Base queda listo para generar Flashcards segun el flujo DronLab SDK."
        ],
        "aplicar": [
          "Complementario: dispositivos de limitacion de energia de impacto y coordinacion tactica con observadores. Fuera del alcance: SORA completa, EAS complejos de categoria especifica y transpondedor modo S.",
          "Volver al alcance A2 indicado por la ingenieria."
        ],
        "preguntas": [
          "Que conceptos son imprescindibles en el Bloque 6 A2?"
        ],
        "respuestas_esperadas": [
          "30 m y 5 m",
          "Modo baja velocidad",
          "Geoconsciencia",
          "Limitacion de altura",
          "Regla 1:1",
          "Evaluacion del riesgo del lugar"
        ],
        "error_habitual": "Abrir contenidos SORA, EAS complejos o transpondedor modo S.",
        "como_reconducir": "Volver al alcance A2 indicado por la ingenieria.",
        "ejemplos_practicos": [
          "Checklist de datos criticos y alcance."
        ],
        "sugerencias_metodologicas": "Pedir al alumnado que justifique la respuesta con el concepto exacto de la ingenieria y que separe datos criticos, dependencias y alcance.",
        "demostracion": "Checklist de datos criticos y alcance.",
        "material_necesario": "Checklist final del bloque.",
        "dinamica": "Clasificacion final A/B/C.",
        "tiempo_recomendado": "6 min",
        "nivel_dificultad": "baja",
        "competencias_trabajadas": [
          "Evaluacion del riesgo",
          "Aplicacion de mitigaciones A2",
          "Decision operacional justificada"
        ],
        "advertencias": [
          "Abrir contenidos SORA, EAS complejos o transpondedor modo S.",
          "SORA completa, EAS complejos de categoria especifica y transpondedor modo S: fuera del alcance del curso A2."
        ]
      }
    }
  ]
};
