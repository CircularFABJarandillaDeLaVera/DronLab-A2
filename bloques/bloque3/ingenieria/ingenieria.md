Ingeniería del Conocimiento: Bloque 3 A2 - Operaciones en Subcategoría A2
Este análisis se centra en la gestión de distancias de seguridad y reglas de sobrevuelo, pilares fundamentales de la subcategoría A2 según la normativa EASA integrada en las fuentes.
1. Conceptos principales
Vuelo cerca de personas (Subcategoría A2):
Definición: Operación en categoría «abierta» que permite reducir la distancia a personas no participantes respecto a lo permitido en A3, utilizando drones de clase C2
.
Finalidad: Permitir el uso de UAS en entornos urbanos o con presencia de terceros bajo estrictas medidas de seguridad
.
Importancia: Crítica; define el límite legal entre una operación de bajo riesgo y una sanción grave por seguridad pública.
Dependencias: Certificado de competencia A2 y uso de UAS con marcado de Clase C2
.
Nivel de aprendizaje: Aplicación y Análisis.
Distancia Horizontal General (30 metros):
Definición: Distancia mínima de seguridad que el piloto debe mantener en todo momento entre el dron y cualquier persona no participante
.
Finalidad: Proporcionar un margen de seguridad suficiente ante un fallo técnico o error de pilotaje para evitar un impacto directo.
Importancia: Troncal para el examen A2 y la planificación operativa.
Dependencias: Consciencia situacional y evaluación visual de distancias
.
Nivel de aprendizaje: Memorizar y Aplicar.
Distancia Reducida (5 metros):
Definición: Excepción que permite acercarse a personas no participantes hasta un límite de 5 metros horizontales
.
Finalidad: Facilitar operaciones en espacios confinados o inspecciones detalladas.
Importancia: Vital para trabajos profesionales en ciudad.
Dependencias: Activación obligatoria del modo de baja velocidad (máx. 3 m/s) en el UAS C2
.
Nivel de aprendizaje: Aplicar.
Regla 1:1 (Efecto "Cúpula" de Seguridad):
Definición: Principio de proporcionalidad donde la distancia horizontal a personas ajenas no debe ser inferior a la altura a la que vuela el dron
.
Finalidad: Asegurar que, en caso de caída balística o planeo accidental, el dron no alcance a la persona en tierra.
Ejemplo: Si el dron vuela a 20 metros de altura, debe estar al menos a 20 metros de distancia horizontal de la persona
.
Nivel de aprendizaje: Comprender y Aplicar.
2. Conceptos puente
Personas participantes vs. No participantes: Conecta el Factor Humano (Bloque 7) con las Reglas de Operación. Sin distinguir quién ha sido instruido y quién es ajeno, el piloto no sabe qué distancia aplicar
. Error evitado: Volar sobre clientes o personal propio creyendo que son "participantes" sin haberles dado las instrucciones de seguridad previas.
Modo de baja velocidad: Puente técnico entre el Diseño del UAS (Bloque 2) y la Reducción de Riesgo. Es la condición técnica sine qua non para romper la barrera de los 30 metros
.
3. Grafo de conocimiento (Subcategoría A2)
Conceptos iniciales (Identificación de personas no participantes + Volumen operacional) ?" Intermedios (Evaluación del entorno + Regla general de los 30 metros) ?" Centrales (Modo de baja velocidad < 3m/s + Regla 1:1 + Límite de 5 metros) ?" Aplicación (Planificación de trayectorias seguras + Monitorización constante de distancias)
4. Dependencias
Concepto
?" Depende de ?"
?" Desbloquea ?"
Importancia
Vuelo a <30m
Marcado Clase C2
Operación urbana legal
Crítica
Límite 5m
Modo baja velocidad
Proximidad máxima a terceros
Muy Alta
Regla 1:1
Telemetría de altura (AGL)
Seguridad balística real
Alta
Sobrevuelo
Subcategoría A1 (C0/C1)
Vuelo sobre personas (prohibido en A2)
Crítica
5. Conceptos estables
Prohibición de concentraciones: Nunca se vuela sobre multitudes en categoría abierta
.
Límite de velocidad baja: Siempre 3 m/s para drones de clase C2
.
Prioridad de paso: Las aeronaves tripuladas siempre tienen preferencia
.
6. Conceptos variables
Evaluación del riesgo en tierra: Depende de la densidad de personas y la capacidad del piloto para reaccionar ante ráfagas de viento que puedan desplazar el UAS
.
Estimación visual: La percepción de los 30m o 5m varía según la iluminación y el tamaño del UAS.
7. Riesgos y errores
Habituales: Olvidar que la Regla 1:1 es dinámica; si subes el dron, debes alejarte más de la persona.
De examen: Creer que un dron C2 puede volar sobre personas ajenas de forma deliberada (prohibido, debe mantenerse a 30m/5m)
.
Operacionales: Confiar en que el modo lento está activo sin verificar el indicador en la RPS (estación de control) antes de acercarse a personas.
8. Preguntas que nacen del bloque
¿Cómo se aplica la regla 1:1 si el dron vuela a una altura de 2 metros sobre una persona?
¿Es obligatorio que las personas participantes lleven chalecos reflectantes para distinguirlas de las ajenas?
¿Qué acción debe tomar el piloto si una persona no participante entra corriendo en el radio de los 5 metros mientras el dron está en modo lento?
9. Escenarios reales implícitos
Grabación de un edificio de oficinas con peatones en la acera de enfrente (uso de 30m).
Inspección de una antena en una azotea con operarios no relacionados a 10 metros (uso de modo lento y 5m).
10. Datos críticos (Operaciones A2)
Parámetro
Valor / Condición
Fuente
Distancia Horizontal Mínima
30 metros (General)
Distancia con Modo Lento
5 metros (Mínimo absoluto)
Velocidad en Modo Lento
? 3 m/s
Proporción Altura/Distancia
Regla 1:1
Sobrevuelo de Concentraciones
PROHIBIDO
11. Auditoría
A) Imprescindible para el Bloque 3 A2: Distancias de 30m/5m, Regla 1:1, modo baja velocidad y definición de personas no participantes.
B) Complementario: Diferencias con las zonas de seguridad de aeródromos (8km) para evitar confundir distancias operativas con geográficas
.
C) Fuera del alcance: Búfer de riesgo en tierra para STS-01 (cálculo basado en 1xV_viento) y atenuaciones estratégicas EARO de 60m para CTR
.
OK "Bloque 3 A2 auditado y listo para generar DronLab SDK."