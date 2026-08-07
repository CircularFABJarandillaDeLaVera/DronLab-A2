Este análisis técnico se basa en las materias específicas de examen para la subcategoría A2 definidas en la normativa y los catálogos de mitigaciones de las fuentes oficiales
.
1. Conceptos principales
Atenuaciones técnicas:
Definición: Funciones o dispositivos integrados en el UAS de Clase C2 diseñados para reducir la probabilidad o la gravedad de un accidente
.
Finalidad: Limitar físicamente las capacidades de la aeronave (altura, velocidad, energía) para proteger a terceros en tierra
.
Importancia: Crítica para operar legalmente a distancias reducidas en entornos urbanos
.
Dependencias: Marcado de Clase C2 y configuración correcta del software por el piloto
.
Nivel de aprendizaje: Comprender y Aplicar.
Atenuaciones operacionales:
Definición: Procedimientos y maniobras ejecutadas por el piloto a distancia para minimizar la exposición al riesgo de personas no participantes
.
Finalidad: Mantener márgenes de seguridad dinámicos basados en la observación del entorno
.
Importancia: Vital para la seguridad pública; complementa las salvaguardas tecnológicas
.
Dependencias: Consciencia situacional y evaluación de la topografía/obstáculos
.
Nivel de aprendizaje: Aplicar.
Sistema de terminación de vuelo:
Definición: Mecanismo técnico que permite forzar el aterrizaje o parada de motores de forma inmediata
.
Finalidad: Evitar que el UAS abandone el volumen operacional o se convierta en un peligro incontrolado (fly-away)
.
Importancia: Alta en operaciones A2 donde el tiempo de reacción es mínimo por la proximidad a personas
.
Dependencias: Comprobación obligatoria antes del despegue
.
Nivel de aprendizaje: Comprender y Aplicar.
Evaluación del riesgo relacionado con el lugar:
Definición: Análisis previo del entorno de operación para identificar personas no participantes, obstáculos y zonas de prevención
.
Finalidad: Determinar si el volumen operacional y las zonas de prevención de riesgos en tierra son adecuados para la misión
.
Importancia: Troncal; es la base de cualquier decisión de mitigación
.
Dependencias: Información sobre el espacio aéreo y geografía del vuelo
.
Nivel de aprendizaje: Aplicar.
2. Conceptos puente
Modo de baja velocidad: Conecta los Requisitos Técnicos (Clase C2) con la Reducción de Distancias Operativas. Es la herramienta que permite pasar de 30m a 5m de distancia horizontal
.
Geoconsciencia / Geofencing: Puente entre la Planificación (Espacio Aéreo) y la Contención del UAS. Asegura que el dron no invada zonas prohibidas ni salga del volumen seguro definido
.
3. Grafo de conocimiento
Conceptos iniciales (Identificación de personas no participantes + Detección de obstáculos en tierra
) -> Intermedios (Selección de atenuaciones técnicas: modo lento, limitadores de altura/velocidad
) -> Centrales (Aplicación de atenuaciones operacionales: distancias de seguridad 30m/5m y Regla 1:1
) -> Aplicación (Vuelo seguro en entornos complejos + Gestión de incursiones de terceros
)
4. Dependencias
Concepto
Depende de
Desbloquea
Importancia
Vuelo a 5 metros
Modo baja velocidad -> 3m/s
Operación urbana en A2
Crítica
Reducción de daños
Dispositivo limitación energía impacto
Vuelo sobre aglomeraciones (casos específicos)
Alta
Contención de vuelo
Geocaging / Geofencing configurado
Prevención de incidentes en zonas R/P
Muy Alta
Recuperación manual
Desactivación de sistemas automáticos
Control en situaciones de riesgo imprevisto
Vital
5. Conceptos estables
Nota de aprobado: 75% en el examen específico A2
.
Distancias fijas: 30 metros (general) y 5 metros (modo lento)
.
Prohibición absoluta: Nunca volar sobre concentraciones de personas en categoría abierta
.
6. Conceptos variables
Volumen operacional: Cambia con cada misión según la topografía y los objetivos
.
Carga útil (Payload): Debe verificarse su compatibilidad y efecto en el riesgo de impacto para cada configuración
.
Atenuaciones tácticas adicionales: Pueden ser requeridas por el proveedor ATS (ej. observador de espacio aéreo)
.
7. Riesgos y errores
Habituales: Confiar exclusivamente en los sistemas automáticos y no estar preparado para reanudar el control manual si fallan
.
De examen: Confundir las atenuaciones técnicas (hardware/software) con las operacionales (maniobras/distancias)
.
Operacionales: No actualizar los datos geográficos del sistema de geoconsciencia, operando con límites de espacio aéreo obsoletos
.
8. Preguntas que nacen del bloque
¿Qué dispositivo técnico es obligatorio para reducir la distancia de seguridad a 5 metros respecto a personas ajenas?
¿Cómo afecta el uso de un sistema de limitación de la energía de impacto a la evaluación del riesgo en tierra según la normativa nacional?
¿En qué fase de la operación debe el piloto establecer los sistemas de limitación de altura y velocidad?
¿Qué acción debe tomar el piloto si una persona no participante entra en la zona de prevención de riesgos en tierra durante el vuelo?
9. Escenarios reales implícitos
Realización de un vídeo profesional en una calle comercial manteniendo la separación mínima y la altura proporcional (Regla 1:1)
.
Pérdida de señal GPS que obliga al piloto a reanudar el control manual para evitar que el dron derive hacia una zona habitada
.
Configuración de un "geo-caging" virtual para realizar una inspección de tejado sin riesgo de que el dron vuele hacia la vía pública colindante
.
10. Datos críticos
Parámetro / Requisito
Valor / Límite
Fuente
Distancia horizontal A2 (Normal)
-> 30 metros
Distancia horizontal A2 (Modo lento)
-> 5 metros
Velocidad máxima modo lento
-> 3 m/s
Altura proporcional (Regla 1:1)
Altura -> Distancia horizontal
Umbral de examen A2
75% aciertos
Limitación de altura general
120 metros AGL
11. Auditoría
A) Imprescindible para el Bloque 6 A2: Distancias de seguridad (30m/5m), modo baja velocidad, geoconsciencia, limitación de altura, regla 1:1 y evaluación del riesgo del lugar.
B) Complementario: Uso de dispositivos de limitación de energía de impacto y coordinación táctica con observadores.
C) Fuera del alcance del A2: Metodología SORA completa (paso a paso), Estudios Aeronáuticos de Seguridad (EAS) complejos para categoría específica y requisitos de transpondedor modo S (citados como atenuaciones avanzadas).
Bloque 6 A2 auditado y listo para generar DronLab SDK.
