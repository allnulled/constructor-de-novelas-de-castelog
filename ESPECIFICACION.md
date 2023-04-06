# Especificación de Novelo

El juego consiste en:
- Ruta:
    - Especifica la localización del personaje.
    - También sirve para moverse porque
        - hay un botón de mapa
        - que despliega un menú absoluto de un mapa
        - y permite desplazarse rápidamente por los lugares conocidos
- Objetos locales
    - Especifica la lista de objetos contenidos en la localización actual
    - Al clicar se muestran las acciones o verbos aplicables al objeto
- Consola local

## Interfaces de dentro del scripting del juego

A continuación se describen los contratos de clases mínimos requeridos por las clases propias:

Toda emisión y recepción de acción sigue el siguiente patrón:
    - Emitir  acción: { con: otros_datos }
    - Recibir acción: { con: otros_datos, cometida_por: sujeto }.
    - Recibir acción: { con: otros_datos, cometida_por: otro_dato }.

Todo lugar debe:
    - Emitir  acciones opcionalmente.
    - Recibir acción de "entrar", { cometida por: protagonista }.
    - Recibir acción de "salir", { cometida por: protagonista }.
    - Recibir otras acciones opcionalmente.

Todo persona debe:
    - Emitir  acciones opcionalmente.
    - Recibir acción de "dialogar", { cometida por: protagonista }.
    - Recibir otras acciones opcionalmente.

Todo objeto debe:
    - Emitir  acciones opcionalmente.
    - Recibir acción de "observar", { cometida por: protagonista }.
    - Recibir otras acciones opcionalmente.

## Condiciones del scripting del juego

· Todos los scripts deben disponer de acceso a las grandes variables {objetos, lugares, personas, sucesos} mediante 1 variable.

```calo
desacoplo constantes { personas, objetos, lugares, sucesos, mundo, localizacion, protagonista } a partir de juego.
```

· Todos los scripts deben tener objetos: objeto con todos los objetos que no son personas ni lugares.
· Todos los scripts deben tener personas: objeto con todos los objetos que son persona.
· Todos los scripts deben tener lugares: objeto con todos los objetos que son lugares.
· Todos los scripts deben tener mundo: objeto con todos los grupos de objetos grandes (objetos, personas y lugares).
· Todos los scripts deben tener localizacion: objeto con todos los grupos de objetos grandes (objetos, personas y lugares) pero del lugar actual.
· Todos los scripts deben tener ruta: texto con la ruta del lugar donde se halla el protagonista
· Todos los scripts deben tener protagonista: objeto del personaje principal de la historia
· Todos los scripts deben tener variables: objeto de las variables declaradas.
· Todos los scripts deben tener utilidades: objeto de las utilidades declaradas.
· Todos los scripts deben tener juego: objeto del que cuelgan todos los anteriores, para no ensuciar los nombres.
· Todos los scripts deben tener this: objeto de la interfaz que están tratando (objeto, persona, lugar, suceso, evento).

```calo
imprimo mundo.objetos filtrado por una lambda con (item) donde {
  retorno item.nombre es igual que "Carl Carlson C18".
}.
```
retorno mundo.personas
retorno mundo.objetos
retorno mundo.lugares
retorno localizacion.personas
retorno localizacion.objetos
retorno localizacion.lugares
retorno protagonista._("ir", {a: mundo.lugares.casa.habitacion }).
hago protagonista._("abrir", mundo.objetos.pc).
hago protagonista._("escribir", {en: mundo.objetos.pc}, "código").
hago protagonista._("coger", mundo.objetos.llaves).
hago protagonista._("abrir", localizacion.lugares.puerta.uno).
hago protagonista._("ir", {a:localizacion.lugares.puerta.uno}).

