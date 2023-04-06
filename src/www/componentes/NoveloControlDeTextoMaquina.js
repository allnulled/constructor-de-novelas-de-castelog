
window.NoveloControlDeTextoMaquina = Castelog.metodos.un_componente_vue2("NoveloControlDeTextoMaquina",
  "<div class=\"NoveloControlDeTextoMaquina Component\">"
 + "    <div style=\"position:relative;\">"
 + "      <textarea class=\"w_100 texto_maquina\" v-model=\"valor\" :placeholder=\"relleno\" ref=\"entrada_de_texto_maquina\"></textarea>"
 + "      <div style=\"position:absolute;top:auto;right:7px;left:auto;bottom:8px;\" v-if=\"mostrarBotonDeCompilar\">"
 + "        <button class=\"\" v-on:click=\"alClicarCompilar\">"
 + "          <span></span>"
 + "          <span>Compilar</span>"
 + "        </button>"
 + "      </div>"
 + "    </div>"
 + "    <template v-if=\"error_actual\">"
 + "      <div class=\"caja_de_error\" v-if=\"!error_actual.location\">"
 + "        {{ error_actual.name }}: {{ error_actual.message }}"
 + "      </div>"
 + "      <div class=\"caja_de_error\" v-else>"
 + "        <div>{{ error_actual.name }}:</div>"
 + "        <div>Caracter erróneo: {{ error_actual.location.start.offset }}-{{ error_actual.location.end.offset }}</div>"
 + "        <div>Posición errónea: {{ error_actual.location.start.line }}:{{ error_actual.location.start.column }}-{{ error_actual.location.end.line }}:{{ error_actual.location.end.column }}</div>"
 + "        <div>Se encontró: {{ error_actual.found }}</div>"
 + "        <div>"
 + "          <div>Se presuponía:</div>"
 + "          <ul>"
 + "            <li v-for=\"expectation, expectation_index in error_actual.expected\" v-bind:key=\"'expectacion_' + expectation_index\">"
 + "              <span>{{ expectation }}</span>"
 + "            </li>"
 + "          </ul>"
 + "        </div>"
 + "        <div>Mensaje completo:</div>"
 + "        <div>{{ error_actual.message }}</div>"
 + "      </div>"
 + "    </template>"
 + "  </div>",
  function(component) {return { props:{ uuid:{ type:String,
default:function() {try {
return Castelog.metodos.un_texto_aleatorio(10, undefined);
} catch(error) {
console.log(error);
throw error;
}

}
},
raiz:{ type:Object,
required:true
},
alCambiar:{ type:Function,
default:function() {
}
},
alCompilar:{ type:Function,
default:function() {
}
},
modoDeCompilacion:{ type:String,
default:function() {try {
return "calogen";
} catch(error) {
console.log(error);
throw error;
}

}
},
mostrarBotonDeCompilar:{ type:Boolean,
default:function() {try {
return true;
} catch(error) {
console.log(error);
throw error;
}

}
},
valorInicial:{ type:String,
default:function() {try {
return "";
} catch(error) {
console.log(error);
throw error;
}

}
},
relleno:{ type:String,
default:function() {try {
return "Texto aquí";
} catch(error) {
console.log(error);
throw error;
}

}
}
},
data() {try {
return { error_actual:undefined,
error_actual_temporizador:undefined,
valor:this.valorInicial
};
} catch(error) {
console.log(error);
throw error;
}

},
watch:{ valor( nuevo_valor ) {try {
if(typeof this.alCambiar === 'function') {
this.alCambiar( nuevo_valor,
this );
}
} catch(error) {
console.log(error);
throw error;
}

}
},
mounted() {
},
methods:{ mostrar_error:function( error ) {try {
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

},
alClicarCompilar:function() {try {
let salida = undefined;
if(this.modoDeCompilacion === "js") {
throw new Error( "JavaScript no soportado ahora mismo" );
}
else if(this.modoDeCompilacion === "jsgen") {
throw new Error( "JavaScript no soportado ahora mismo" );
}
else if(this.modoDeCompilacion === "calo") {
salida = Castelog_parser.parse( this.valor );
}
else if(this.modoDeCompilacion === "calogen") {
salida = Castelog_parser.parse( "retorno " + this.valor + "." );
}
else {
throw new Error( "Modo de compilación no identificado" );
}
this.alCompilar( this.valor,
this,
salida );
seleccionar_entrada: {
if(typeof this.$refs.entrada_de_texto_maquina === 'undefined') {
break seleccionar_entrada;
}
const elemento = this.$refs.entrada_de_texto_maquina;
elemento.focus(  );}

} catch(error) {
console.log(error);
seleccionar_error:
if(error.location) {
if(typeof this.$refs.entrada_de_texto_maquina === 'undefined') {
break seleccionar_error;
}
const elemento = this.$refs.entrada_de_texto_maquina;
elemento.focus(  );
elemento.setSelectionRange( error.location.start.offset,
error.location.end.offset );
}
this.mostrar_error( error );}
}
}
};},
  null);