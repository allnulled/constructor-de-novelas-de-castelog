# Teoría de la historiación

La historia como elemento multidisciplinar y multidimensional puede analizarse conceptualmente. Este documento persigue eso mismo.

## Elementos de una historia

En toda historia se suceden unos conjuntos conceptualizables. Estos son:

- **Objetos**. Son cosas con *propiedades* y *habilidades* individuales así como globales.
- **Personas**. Son *objetos* que tienen la *habilidad* innata de ser y hacer cosas típicas de persona.
- **Lugares**. Son *objetos* que tienen la *habilidad* innata de **contener** otros *objetos*.
- **Eventos**. Son *objetos* que representan escuchas a cambios de estado y sus correspondientes acciones consecuentes. Se pueden especificar en forma de:
  - (0) script: una función que se supone usaría la API de Eventos de Novelo.
  - (1) escucha + función: se especifica una fuente de cambio y el cambio. Las escuchas pueden ser:
    - (1) sujeto + verbo + complementos preposicionales: si se está efectuando un verbo mediante un sujeto con ciertas combinaciones preposicionales.
    - (2) sujeto + verbo: si se está efectuando un verbo mediante un sujeto
    - (3) sujeto: si se está accionando mediante un sujeto
    - (4) verbo: si se está accionando un verbo
    - (5) combinaciones lógicas (GROUP, AND y OR) de los anteriores
- **Variables**. Es un *objeto* que contiene valores interesantes para la completación de la historia. Se definen aparte para así separar la lógica "dura" de la historia de la lógica "blanda".
- **Utilidades**. Es un *objeto* que contiene funciones y valores interesantes para la completación de la historia. Esto complementa a las variables, más destinadas a datos que a funciones, aunque son lo mismo.
- **Sucesos**. Son *objetos* que conjunta y ordenadamente representan cambios efectuados sobre el estado original de los datos de forma sucesiva de principio a final. Los eventos son los que deciden si una llamada es notificada como suceso o no.

## Desarrollo de una historia

La historia se inicia con:
  - una serie de objetos con estados
  - una serie de funciones llamadas por ciertos cambios de estado

La historia se continúa con:
  - una serie de sucesos que se aplican consecutivamente sobre el estado y los eventos iniciales.

## 

