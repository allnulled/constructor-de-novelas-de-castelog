
const NoveloVistaEnVivo = Castelog.metodos.un_componente_vue2("NoveloVistaEnVivo",
  "<div class=\"NoveloVistaEnVivo Component\">"
 + "    <div v-if=\"error_actual\" class=\"caja_de_error\">"
 + "      <div>{{ error_actual.name }}: {{ error_actual.message }}</div>"
 + "    </div>"
 + "    <div v-if=\"!esta_cargado\">"
 + "      <div role=\"progressbar\" class=\"animate\">"
 + "        <div style=\"width: 100%\"></div>"
 + "      </div>"
 + "    </div>"
 + "    <div v-else>"
 + "      <button class=\"w_100\" v-on:click=\"() => cargar_todo(true)\">Recargar</button>"
 + "      <div v-if=\"!protagonista\">"
 + "        No existe ningún protagonista. Crea una persona de nombre «protagonista» para continuar."
 + "      </div>"
 + "      <div v-else-if=\"!localizacion\">"
 + "        El protagonista no tiene localización asignada. Asígnale una para continuar."
 + "      </div>"
 + "      <div v-else>"
 + "        <div v-if=\"objetos && objetos.length\">"
 + "          <span>"
 + "            <span>En </span>"
 + "            <span class=\"texto_como_link\">{{ localizacion }}</span>"
 + "            <span> hay:</span>"
 + "          </span>"
 + "          <ol>"
 + "            <li v-for=\"objeto, objeto_index in objetos\" v-bind:key=\"'en-vivo-objeto-' + objeto_index\">"
 + "              <div class=\"texto_como_link\" v-on:click=\"() => alternar_estado_de_objeto(objeto)\">{{ objeto.nombre }}</div>"
 + "              <ol>"
 + "                <template v-for=\"prop, prop_index in objeto\">"
 + "                  <li v-if=\"no_esta_prohibida(prop_index) && typeof prop === 'undefined'\" v-bind:key=\"'en-vivo-objeto-' + objeto_index + '-prop-undefined-' + prop_index\">"
 + "                    <span class=\"texto_de_objeto_1\">[{{ typeof prop }}]</span>"
 + "                    <span class=\"texto_de_objeto_2\">{{ prop_index }}</span>"
 + "                    <span class=\"texto_de_objeto_3\"> = </span>"
 + "                    <span class=\"texto_de_objeto_4\">{{ JSON.stringify(prop) }}</span>"
 + "                  </li>"
 + "                </template>"
 + "                <template v-for=\"prop, prop_index in objeto\">"
 + "                  <li v-if=\"no_esta_prohibida(prop_index) && typeof prop === 'boolean'\" v-bind:key=\"'en-vivo-objeto-' + objeto_index + '-prop-boolean-' + prop_index\">"
 + "                    <span class=\"texto_de_objeto_1\">[{{ typeof prop }}]</span>"
 + "                    <span class=\"texto_de_objeto_2\">{{ prop_index }}</span>"
 + "                    <span class=\"texto_de_objeto_3\"> = </span>"
 + "                    <span class=\"texto_de_objeto_4\">{{ JSON.stringify(prop) }}</span>"
 + "                  </li>"
 + "                </template>"
 + "                <template v-for=\"prop, prop_index in objeto\">"
 + "                  <li v-if=\"no_esta_prohibida(prop_index) && typeof prop === 'number'\" v-bind:key=\"'en-vivo-objeto-' + objeto_index + '-prop-number-' + prop_index\">"
 + "                    <span class=\"texto_de_objeto_1\">[{{ typeof prop }}]</span>"
 + "                    <span class=\"texto_de_objeto_2\">{{ prop_index }}</span>"
 + "                    <span class=\"texto_de_objeto_3\"> = </span>"
 + "                    <span class=\"texto_de_objeto_4\">{{ JSON.stringify(prop) }}</span>"
 + "                  </li>"
 + "                </template>"
 + "                <template v-for=\"prop, prop_index in objeto\">"
 + "                  <li v-if=\"no_esta_prohibida(prop_index) && typeof prop === 'string'\" v-bind:key=\"'en-vivo-objeto-' + objeto_index + '-prop-string-' + prop_index\">"
 + "                    <span class=\"texto_de_objeto_1\">[{{ typeof prop }}]</span>"
 + "                    <span class=\"texto_de_objeto_2\">{{ prop_index }}</span>"
 + "                    <span class=\"texto_de_objeto_3\"> = </span>"
 + "                    <span class=\"texto_de_objeto_4\" v-if=\"prop.length < 20\">{{ JSON.stringify(prop) }}</span>"
 + "                    <span class=\"texto_de_objeto_4\" v-else>{{ JSON.stringify(prop).length }}B</span>"
 + "                  </li>"
 + "                </template>"
 + "                <template v-for=\"prop, prop_index in objeto\">"
 + "                  <li v-if=\"no_esta_prohibida(prop_index) && Array.isArray(prop)\" v-bind:key=\"'en-vivo-objeto-' + objeto_index + '-prop-object-' + prop_index\">"
 + "                    <span class=\"texto_de_objeto_1\">[List]</span>"
 + "                    <span class=\"texto_de_objeto_2\">{{ prop_index }}</span>"
 + "                    <span class=\"texto_de_objeto_3\"> = </span>"
 + "                    <span class=\"texto_de_objeto_4\">{{ prop.length }} ítems en {{ JSON.stringify(prop).length }}B</span>"
 + "                  </li>"
 + "                </template>"
 + "                <template v-for=\"prop, prop_index in objeto\">"
 + "                  <li v-if=\"no_esta_prohibida(prop_index) && (typeof prop === 'object') && (!Array.isArray(prop))\" v-bind:key=\"'en-vivo-objeto-' + objeto_index + '-prop-object-' + prop_index\">"
 + "                    <span class=\"texto_de_objeto_1\">[{{ typeof prop }}]</span>"
 + "                    <span class=\"texto_de_objeto_2\">{{ prop_index }}</span>"
 + "                    <span class=\"texto_de_objeto_3\"> = </span>"
 + "                    <span class=\"texto_de_objeto_4\">{{ Object.keys(prop).length }} propiedades en {{ JSON.stringify(prop).length }}B</span>"
 + "                  </li>"
 + "                </template>"
 + "                <template v-for=\"prop, prop_index in objeto\">"
 + "                  <li v-if=\"no_esta_prohibida(prop_index) && typeof prop === 'function'\" v-bind:key=\"'en-vivo-objeto-' + objeto_index + '-prop-function-' + prop_index\">"
 + "                    <span class=\"texto_de_objeto_1\">[{{ typeof prop }}]</span>"
 + "                    <span class=\"texto_como_link\" v-on:click=\"() => ejecutar_accion(prop_index, objeto, objeto_index)\">{{ prop_index }}</span>"
 + "                    <span class=\"texto_de_objeto_3\"> = </span>"
 + "                    <span class=\"texto_de_objeto_4\">{{ JSON.stringify(prop.toString()).length }}B</span>"
 + "                  </li>"
 + "                </template>"
 + "              </ol>"
 + "            </li>"
 + "          </ol>"
 + "        </div>"
 + "        <div v-else>"
 + "          <span>"
 + "            <span>En </span>"
 + "            <span class=\"texto_como_link\">{{ localizacion }}</span>"
 + "            <span> no hay nada.</span>"
 + "          </span>"
 + "        </div>"
 + "        <div v-if=\"salidas && salidas.length\">"
 + "          <span>Puedes salir por:</span>"
 + "          <ol>"
 + "            <li v-for=\"salida, salida_index in salidas\" v-bind:key=\"'en-vivo-salida-' + salida_index\">"
 + "              <span class=\"texto_como_link\" v-on:click=\"() => aplicar_salida(salida)\">{{ salida.nombre }}</span>"
 + "            </li>"
 + "          </ol>"
 + "        </div>"
 + "        <div v-else>"
 + "          <span>No hay salidas.</span>"
 + "        </div>"
 + "      </div>"
 + "    </div>"
 + "    <div>"
 + "      <div v-for=\"mensaje, mensaje_index in mensajes_de_salida\" v-bind:key=\"'mensaje-de-salida-numero-' + mensaje_index\">"
 + "        <div>{{ mensaje }}</div>"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ raiz:{ type:Object,
required:true
}
},
data() {try {
console.log('[DEBUG]', "NoveloVistaEnVivo.data");
return { protagonista:undefined,
localizacion:undefined,
salidas:undefined,
objetos:undefined,
esta_cargado:false,
juego:undefined,
mensajes_de_salida:[  ],
error_actual:undefined,
error_actual_temporizador:undefined,
propiedades_prohibidas:[ "nombre",
"esta_mostrando_detalles_en_vivo",
"esta_mostrando_detalles",
"localizacion" ]
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ no_esta_prohibida:function( indice ) {try {
console.log('[DEBUG]', "NoveloVistaEnVivo.methods.no_esta_prohibida");
return (!(((item, list) => list.indexOf(item) !== -1)(indice, [ "nombre",
"localizacion",
"esta_mostrando_detalles",
"esta_mostrando_detalles_en_vivo",
"script" ])));
} catch(error) {
console.log(error);
throw error;
}

},
alternar_estado_de_objeto:function( objeto ) {try {
console.log('[DEBUG]', "NoveloVistaEnVivo.methods.alternar_estado_de_objeto");
objeto.esta_mostrando_detalles_en_vivo = (!(objeto.esta_mostrando_detalles_en_vivo));
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
aplicar_salida:function( salida ) {try {
console.log('[DEBUG]', "NoveloVistaEnVivo.methods.aplicar_salidas");
this.cambiar_protagonista( { localizacion:salida.nombre
} );
this.cargar_todo( true );
} catch(error) {
console.log(error);
throw error;
}

},
calcular_salidas:function(  ) {try {
console.log('[DEBUG]', "NoveloVistaEnVivo.methods.calcular_salidas");
let salidas_actuales = [  ];
if(this.protagonista) {
const localizacion_dato = ( Castelog.metodos.un_filtrado_por(this.raiz.lugares_disponibles, (item, output, key, index, original) => {
return this.protagonista.localizacion === item.nombre;
}, null, null) )[ 0 ];
if(typeof localizacion_dato === 'undefined') {
return [  ];
}
if(typeof localizacion_dato.salidas === 'undefined') {
return [  ];
}
const localizacion_salidas = Castelog.metodos.un_filtrado_por(this.raiz.lugares_disponibles, (item, output, key, index, original) => {
return localizacion_dato.salidas.indexOf(item.nombre) !== -1;
}, null, null);
if(typeof localizacion_dato === 'object') {
salidas_actuales = (salidas_actuales).concat(localizacion_salidas );
}
}
return salidas_actuales;
} catch(error) {
console.log(error);
throw error;
}

},
calcular_objetos:function(  ) {try {
console.log('[DEBUG]', "NoveloVistaEnVivo.methods.calcular_objetos");
let objetos_actuales = [  ];
if(this.protagonista) {
const localizacion_objetos = this.raiz.objetos_disponibles.filter( ( item ) => {try {
return this.protagonista.localizacion === item.localizacion;
} catch(error) {
console.log(error);
throw error;
}

} );
if(localizacion_objetos.length) {
objetos_actuales = (objetos_actuales).concat(localizacion_objetos );
}
for(let index = 0; index < objetos_actuales.length; index++) {const objeto_actual = objetos_actuales[ index ];
if(( typeof objeto_actual.script === 'string' ) && ( objeto_actual.script.length )) {
try {
const codigo_calogen = "retorno " + objeto_actual.script + ".";
let resultado_js = Castelog_parser.parse( codigo_calogen );
if(typeof resultado_js === 'string' && resultado_js.length) {
resultado_js = "(" + resultado_js.trim(  ).replace( new RegExp( "^return *",
"g" ),
"" ).replace( new RegExp( " *;$",
"g" ),
"" ) + ")";
const resultado = eval( resultado_js );
objetos_actuales[ index ] = Object.assign({ 
}, objeto_actual, resultado );
}
} catch(error) {
this.mostrar_error( error );
throw error;}
}}
}
return objetos_actuales;
} catch(error) {
console.log(error);
throw error;
}

},
obtener_protagonista:function() {try {
console.log('[DEBUG]', "NoveloVistaEnVivo.methods.obtener_protagonista");
return ( Castelog.metodos.un_filtrado_por(this.raiz.personas_disponibles, (item, output, key, index, original) => {
return item.nombre.toLowerCase(  ) === "protagonista";
}, null, null) )[ 0 ];
} catch(error) {
console.log(error);
throw error;
}

},
cambiar_protagonista:function( datos ) {try {
console.log('[DEBUG]', "NoveloVistaEnVivo.methods.cambiar_protagonista");
for(let index = 0; index < this.raiz.personas_disponibles.length; index++) {const persona = this.raiz.personas_disponibles[ index ];
if(persona.nombre.toLowerCase(  ) === "protagonista") {
Object.assign(this.raiz.personas_disponibles[ index ], datos );
}}
} catch(error) {
console.log(error);
throw error;
}

},
cargar_todo:function( refrescar_interfaz = false ) {try {
console.log('[DEBUG]', "NoveloVistaEnVivo.methods.cargar_todo");
this.esta_cargado = false;
this.protagonista = this.obtener_protagonista(  );
if(typeof this.protagonista === 'undefined') {
throw new Error( "El personaje «protagonista» no está definido" );
}
this.localizacion = this.protagonista.localizacion;
if(typeof this.localizacion === 'undefined') {
throw new Error( "El personaje «protagonista» no tiene localizacion definida" );
}
this.salidas = this.calcular_salidas(  );
this.objetos = this.calcular_objetos(  );
this.esta_cargado = true;
if(refrescar_interfaz) {
this.$forceUpdate( true );
}
} catch(error) {
console.log(error);
throw error;
}

},
mostrar_por_salida:function( mensaje ) {try {
console.log('[DEBUG]', "NoveloVistaEnVivo.methods.mostrar_por_salida");
this.mensajes_de_salida.unshift(mensaje)
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
ejecutar_accion:async function( funcion_id,
objeto,
objeto_index ) {try {
console.log('[DEBUG]', "NoveloVistaEnVivo.methods.ejecutar_accion");
console.log(" [*] Función ID: " + funcion_id);
console.log(" [*] Objeto:" + ( JSON.stringify(objeto, null, 2) ));
console.log(" [*] Objeto índice:" + objeto_index);
const resultado = (await objeto[ funcion_id ].call( objeto,
this,
this.mostrar_por_salida.bind( this ),
objeto_index ));
console.log(" [*] Resultado de función: ");
console.log(resultado);
} catch(error) {
console.log("Error al ejecutar la acción:");
console.log(error);
this.mostrar_error( error );}
},
mostrar_error:function( error ) {try {
console.log('[DEBUG]', "NoveloVistaEnVivo.methods.mostrar_error");
clearTimeout( this.error_actual_temporizador );
this.error_actual = error;
this.error_actual_temporizador = setTimeout( () => {try {
this.error_actual = undefined;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
5000 );
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

}
},
watch:{ 
},
mounted() {try {
console.log('[DEBUG]', "NoveloVistaEnVivo.mounted");
this.cargar_todo(  );
} catch(error) {
console.log(error);
this.mostrar_error( error );
this.esta_cargado = true;}
}
};},
  null);