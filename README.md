# Constructor de novelas de Castelog

Construcción de novelas gráficas en formato web con Castelog.

## Versión online

Puedes acceder a la versión online en:

*[https://allnulled.github.io/constructor-de-novelas-de-castelog](https://allnulled.github.io/constructor-de-novelas-de-castelog)*

## Instalación

**Paso 1**. Abre un directorio limpio, clona este proyecto e instala las dependencias.

```sh
mkdir directorio-limpio
cd directorio-limpio
git clone https://github.com/allnulled/constructor-de-novelas-de-castelog.git .
npm install
```

**Paso 2**. Arranca el servidor de test que nos sirve la aplicación de *Constructor de novelas gráficas de calo*.

```sh
npm test
```

Para desarrollo, puedes editar los ficheros *.calo* y generar sus *.html* o *.js* automáticamente.

## ¿Para qué sirve?

El «Constructor-de-novelas-de-calo» es:
  - una interfaz web de usuario
  - destinada a crear y usar documentos que:
    - sirven para representar novelas gráficas
  - mediante (80%) interacción gráfica + (20%) scripting
  - usando el lenguaje Calo

Una web para crear novelas gráficas con Calo.

## ¿Qué es una novela gráfica?

Es un formato de aplicación que queda como un punto intermedio entre:
  1) *aventura gráfica*, historia narrada con código de lenguaje de programación, un formato 100% dinámico
  2) *novela escrita*, historia narrada con lenguaje natural, un formato 100% estático
  3) *historia con decisiones*, esas historias que te dejaban escoger, de vez en cuando, entre varias opciones, y te redireccionaban a otra página (es decir, novelas escritas con GOTOs sueltos)

El formato 1 y 2 estarían en los polos. El 3 estaría más hacia el 2 que hacia el 1. Y la novela gráfica estaría más hacia el 1 que hacia el 2.

Lo interesante para mí es:

  1) ofrecer la facilidad de escribir una novela escrita teniendo en cuenta una memoria de notas organizadas
  2) ennmarcada en un contexto interactivo pero limitado, como el de una aventura gráfica clásica
  3) que permita a un usuario novel hacer incorporaciones progresivas de código dentro de la aventura
  4) que permita a un usuario avanzado crear lógicas de juego libres
  5) donde la interfaz de juego pueda
    6) permanecer sencilla
    7) administrando los datos eficientemente
    8) dejando la vía libre para que otro software, quizá provisto de inteligencia artificial, se ocupe del aspecto más artístico y menos guionístico/novelístico.

Quizá, en un futuro, se puedan escribir, primero cómics, luego animes, y luego series humanas realistas, solo con esto, y un poco de algoritmos mágicos de esos que dicen que tienen por ahí: ChatGPT, deep fake, mecánicas del cuerpo humano, funciones de física natural, diccionarios de sprites, etc. Yo me tengo que quedar aquí, no tengo tanto conocimiento ni fe. Pero sí, reproducir un telediario incluso, un programa de televisión típico como un concurso, una serie de dibujos o de personas,etc. simplemente como el producto de la definición de un guión suficiente + una serie de procesos usando algoritmos de inteligencia artificial. Y nada más. Sólo eso. No personas. No dinero. No élites financiando nada. Unos programas falseando todo lo que ves, para que lo creas, lo imites, lo pienses, lo seas. Pero solo un guión y programas.

<a href="https://www.youtube.com/watch?v=sPnR7e1xs7M">Era un teatro, todo era ficción, solo una ilusión, luces en un decorado y frases de un guión...</a> ¿Tú te lo crees? ¿Que aquello que llamabas colegio... era solo... un escenario? Y tú eras el único público de la función.

## Uso

Así en brainstorming.

- Hay lugares, personas, objetos.
- Luego hay prototipos, que pueden ser igual lugares, personas u objetos. Representan un estado inicial, desde el cual luego detallas al lugar, persona u objeto específico.
- Hay eventos. Son pares de desencadenante-consecuencia, en formato código para máxima flexibilidad.
- Hay variables. Son pares de texto-valor, de uso genérico.
- Hay funciones. Son pares de texto-función, de uso genérico también.
- Hay sucesos. Son registros de cosas que han ocurrido durante la ejecución del programa. Un histórico de eventos.
- Hay preferencias. Son pares de texto-valor, se usan a modo de configuraciones personales del usuario.
- Hay la pantalla de en vivo. Sería la pantalla donde se desarrolla la acción.

## ¿Por qué si ya existen tropocientas?

Tampoco he probado todo el software del mundo. No sé. Pero bueno, representa como el `set up` del universo, pero adaptado a un tipo cualquiera delante de su PC, y se dispone a escribir una historia, que sigue una coherencia.

En teoría, este software permite "crear universos" con Castelog. Permite crear lugares, objetos, personas y eventos que relacionan los cambios de estado y las acciones de estos objetos, con bloques lógicos que pueden propagar cambios a su vez. Es decir: cosas, y causalidad. Lo demás, es una representación de los datos: posición espacial, composicion, estado de los componentes, leyes gobernando cada cambios, colores de cada textura de cada objeto, etc. Es decir: más datos, más detalles, y más formas de acceder y alterar estos datos. Pero la base de datos del universo, y sus triggers o propagadores, se puede ir haciendo. Pero obviando todos los objetos y todas las leyes naturales base, uno tendría esto, más o menos: *las (leyes y objetos, o) herramientas lógicas para construir una historia*. Y a parti de ahí, se crean las leyes y objetos base (*creacionismo*, todos los paneles excepto el "En vivo"), y luego se desarrollan las decisiones y los consecuentes cambios de estado (*evolucionismo*, el panel de "En vivo").

En tanto que comparado con el universo... bueno. Lo primero que se echa en falta es un panel, entero, solo para objetos mentales. Luego la gestión de la física, matemática, y demás ingeniería mecánica para empirizar los datos (visualizar, oír, saborear, oler, notar, imaginar o simplemente sentir en un sentido amplio, ni siquiera se sabe cuán amplio). Pero los datos están sucediendo al margen de su percepción, algo computa los datos aún cuando nosotros no: al dormir, al no observar, etc. y mantiene una coherencia con el pasado (o con la sensación de memoria que tenemos, al menos). La memoria sería el espacio que se echaría en falta. Luego una interfaz 3D computando toda la complejidad. Luego, los eventos de la complejidad natural: todas las leyes físicas, químicas, biológicas, neurológicas y finalmente psíquicas que gobiernan el universo, pero expresadas en forma de eventos (o parejas de desencadenante y función). Una vez has diseñado todas las leyes naturales, cómo se espera van a comportarse todos los objetos conforme a sus estados y demás, empiezas a escribir una historia.

En la historia, vas a destacar los objetos que más te interesen para su desarrollo. Si fuéramos pelotas, igual los objetos interesantes serían "pelotas" y no "personas". Al ser "personas", se destacan los objetos de tipo "persona". El tiempo es un multiplicador de los objetos: un objeto en el tiempo, implica muchos objetos en diferentes puntos del tiempo, e implica acceso empírico exclusivamente al último de la cola. El espacio es un divisor de los objetos: un yo en el espacio, implica un aquí, y un aquí implica un allí, y un allí implica un compartimento donde no se tiene acceso empírico directo. Por esto, después de las personas, se destacan los lugares, como objetos especiales con características comunes. Lugares, personas, y en un sentido más general, objetos, de cualquier tipo, incluyendo lugares y personas: simplemente, objetos de la realidad. Posteriormente, leyes o eventos que los gobiernan.

Pues, en esencia, un universo funcionaría así. Un cerebro. Un sistema operativo. A ver, ya me entiendes.

## Licencia

Legal y regalada debería ser, para todo el que la quiera. Malditos.