
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
 + "                    <span class=\"texto_de_objeto_4\">{{ JSON.stringify(prop) }}</span>"
 + "                  </li>"
 + "                </template>"
 + "                <template v-for=\"prop, prop_index in objeto\">"
 + "                  <li v-if=\"no_esta_prohibida(prop_index) && typeof prop === 'object'\" v-bind:key=\"'en-vivo-objeto-' + objeto_index + '-prop-object-' + prop_index\">"
 + "                    <span class=\"texto_de_objeto_1\">[{{ typeof prop }}]</span>"
 + "                    <span class=\"texto_de_objeto_2\">{{ prop_index }}</span>"
 + "                    <span class=\"texto_de_objeto_3\"> = </span>"
 + "                    <span class=\"texto_de_objeto_4\">{{ JSON.stringify(prop) }}</span>"
 + "                  </li>"
 + "                </template>"
 + "                <template v-for=\"prop, prop_index in objeto\">"
 + "                  <li v-if=\"no_esta_prohibida(prop_index) && typeof prop === 'function'\" v-bind:key=\"'en-vivo-objeto-' + objeto_index + '-prop-function-' + prop_index\">"
 + "                    <span class=\"texto_de_objeto_1\">[{{ typeof prop }}]</span>"
 + "                    <span class=\"texto_de_objeto_2\">{{ prop_index }}</span>"
 + "                    <span class=\"texto_de_objeto_3\"> = </span>"
 + "                    <span class=\"texto_de_objeto_4\">{{ JSON.stringify(prop.toString()) }}</span>"
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
 + "  </div>",
  function(component) {return { props:{ raiz:{ type:Object,
required:true
}
},
data() {try {
return { protagonista:undefined,
localizacion:undefined,
salidas:undefined,
objetos:undefined,
esta_cargado:false,
juego:undefined,
error_actual:undefined,
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
return (!(((item, list) => list.indexOf(item) !== -1)(indice, [ "nombre",
"localizacion",
"esta_mostrando_detalles",
"esta_mostrando_detalles_en_vivo" ])));
} catch(error) {
console.log(error);
throw error;
}

},
alternar_estado_de_objeto:function( objeto ) {try {
objeto.esta_mostrando_detalles_en_vivo = (!(objeto.esta_mostrando_detalles_en_vivo));
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
aplicar_salida:function( salida ) {try {
this.cambiar_protagonista( { localizacion:salida.nombre
} );
this.cargar_todo( true );
} catch(error) {
console.log(error);
throw error;
}

},
calcular_salidas:function(  ) {try {
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
}
return objetos_actuales;
} catch(error) {
console.log(error);
throw error;
}

},
obtener_protagonista:function() {try {
return ( Castelog.metodos.un_filtrado_por(this.raiz.personas_disponibles, (item, output, key, index, original) => {
return item.nombre.toLowerCase(  ) === "protagonista";
}, null, null) )[ 0 ];
} catch(error) {
console.log(error);
throw error;
}

},
cambiar_protagonista:function( datos ) {try {
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
mostrar_error:function( error ) {try {
clearTimeout( this.error_actual_temporizador );
this.error_actual = error;
error_actual_temporizador = setTimeout( () => {try {
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
this.cargar_todo(  );
} catch(error) {
this.mostrar_error( error );
this.esta_cargado = true;}
}
};},
  null);