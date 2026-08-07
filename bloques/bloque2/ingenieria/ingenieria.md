Ingeniería del Conocimiento: Bloque 2 A2 - El Sistema UAS de Clase C2
1. Conceptos principales
UAS de Clase C2:
Definición: Aeronave no tripulada con una masa máxima al despegue (MTOM) inferior a 4 kg que dispone de un marcado de clase oficial y cumple los requisitos técnicos del Reglamento (UE) 2019/945
.
Finalidad: Permitir la operatividad en la subcategoría A2 (vuelo cerca de personas) garantizando estándares de seguridad y mitigación de daños
.
Importancia: Crítica; es el único tipo de dron con marcado de clase habilitado para reducir distancias de seguridad hasta los 5 metros
.
Dependencias: Etiqueta física de clase "C2", número de serie único y fuente de alimentación eléctrica
.
Nivel de aprendizaje: Memorizar (características) y Comprender (funciones).
Modo de baja velocidad:
Definición: Función seleccionable desde la estación de control que limita la velocidad de avance de la aeronave a un máximo de 3 m/s
.
Finalidad: Reducir la energía de impacto en caso de colisión y aumentar el tiempo de reacción del piloto
.
Importancia: Vital para la legalidad del vuelo a menos de 30 metros de personas ajenas
.
Dependencias: Activación manual por el piloto a distancia (excepto en ala fija, donde no aplica esta reducción)
.
Nivel de aprendizaje: Aplicar.
Identificación a distancia directa (DRI):
Definición: Sistema que emite periódicamente datos de identificación del operador, número de serie de la aeronave, posición, altura, trayectoria y velocidad
.
Finalidad: Facilitar la vigilancia y supervisión por parte de las autoridades competentes durante el vuelo
.
Importancia: Alta; su mal funcionamiento o falta de carga del número de operador invalida la operación
.
Dependencias: Carga previa del número de registro de operador obtenido en la sede electrónica de AESA
.
Nivel de aprendizaje: Aplicar.
Geoconsciencia:
Definición: Función técnica que avisa al piloto cuando la aeronave se aproxima a los límites de una zona geográfica de UAS restringida o prohibida
.
Finalidad: Prevenir incursiones accidentales en espacios aéreos protegidos o peligrosos
.
Importancia: Alta; constituye una salvaguarda tecnológica ante errores de navegación
.
Dependencias: Actualización de los datos geográficos proporcionados por las autoridades (ej. ENAIRE Drones)
.
Nivel de aprendizaje: Aplicar.
2. Conceptos puente
Instrucciones del fabricante: Es el puente normativo que conecta el Conocimiento General del UAS (Bloque 6 de A1/A3) con la Operativa específica de A2. Sin seguir el manual, no se pueden verificar los límites de peso, batería o configuración del modo de baja velocidad
.
Enlace de mando y control (C2): Conecta la Estación de Pilotaje (RPS) con la Aeronave. La clase C2 exige que este enlace esté protegido contra accesos no autorizados y disponga de métodos de recuperación ante su pérdida
.
3. Grafo de conocimiento
Conceptos iniciales (Marcado de Clase C2 + MTOM < 4kg + Alimentación eléctrica)
 -> Intermedios (Configuración de Remote ID + Carga de zonas en Geoconsciencia + Luces nocturnas)
 -> Centrales (Gestión del Modo de baja velocidad + Avisos de batería baja en UAS y RPS)
 -> Aplicación (Vuelo a 5m de personas ajenas + Gestión de fallos de sistema)
4. Dependencias
Concepto
Depende de
Desbloquea
Importancia
Vuelo a 5 metros
Modo baja velocidad (<3m/s)
Operaciones en entornos urbanos
Crítica
Identificación DRI
Número de Operador AESA
Legalidad de la aeronave en vuelo
Vital
Geoconsciencia
Actualización de software/datos
Prevención de incursiones en zonas P/R
Alta
Avisos de batería
Sensores del UAS y RPS
Gestión de autonomía y RTH seguro
Crítica
5. Conceptos estables
Límite de masa de la Clase C2: Inferior a 4 kg
.
Velocidad límite en modo lento: 3 m/s
.
Techo de altura limitado por software/configuración: 120 metros
.
Requisito de luces visibles de noche y para control de altitud
.
6. Conceptos variables
Versión de software/firmware: Debe ser siempre la última publicada por el fabricante tanto en la aeronave como en la estación de pilotaje (RPS)
.
Información geográfica: Depende de la actualización periódica de las bases de datos de zonas geográficas de UAS
.
Margen de aviso de batería: Ajustable según la resistencia y distancia de la operación
.
7. Riesgos y errores
Habituales: No asegurar correctamente los componentes amovibles (hélices, cámaras)
.
De examen: Confundir la MTOM de la clase C2 (4 kg) con los límites de la clase C1 (900 g) o C3 (25 kg)
.
Operacionales: Confundir el número de identificación de piloto (ESP-RP-...) con el número de operador al configurar el sistema DRI
. No verificar el funcionamiento del enlace C2 antes del despegue
.
8. Preguntas que nacen del bloque
¿Es obligatorio que un UAS C2 tenga un sistema de aviso de batería baja tanto en el dron como en el mando?
.
¿Qué sucede si el piloto no activa el modo de baja velocidad al acercarse a personas a 10 metros?
.
¿Qué datos exactos emite el sistema de identificación a distancia directa en una aeronave C2?
.
¿Es legal modificar físicamente un UAS de clase C2 añadiendo accesorios que superen su MTOM original?
.
9. Escenarios reales implícitos
Un piloto realiza una inspección de fachada y debe activar el modo de baja velocidad para mantener la separación de 5 metros con un peatón en la acera
.
Durante el pre-vuelo, el piloto detecta que el software de la RPS no coincide con el del dron, impidiendo el despegue por seguridad
.
La aeronave emite un aviso sonoro de "batería baja" al piloto cuando queda un margen suficiente para un aterrizaje seguro
.
10. Datos críticos
Parámetro
Valor / Requisito
Fuente
MTOM Clase C2
< 4 kg
Velocidad baja
-> 3 m/s
Altura máxima
120 m
Índice K
< 4 (para operar)
DRI Emite:
Nº operador, serie, posición, altura, trayectoria, velocidad
Actualización
 software publicado por el fabricante
11. Auditoría
A) Imprescindible para el Bloque 2 A2: Definición de Clase C2, modo de baja velocidad, requisitos de geoconsciencia, Remote ID y sistema de aviso de batería.
B) Complementario: Métodos de terminación de vuelo o recuperación de enlace; procedimientos de actualización de software.
C) Fuera del alcance del A2: Escenarios Estándar Nacionales (STS-ES) y sus requisitos específicos de aeronave (como los del STS-ES-02NE de < 25kg)
.
"Bloque 2 A2 auditado y listo para generar DronLab SDK."
