
window.NoveloControlDeTextoMaquina = Castelog.metodos.un_componente_vue2("NoveloControlDeTextoMaquina",
  "<div class=\"NoveloControlDeTextoMaquina Component\">"
 + "    <div style=\"position:relative;\">"
 + "      <textarea class=\"w_100 texto_maquina\" v-model=\"valor\" :placeholder=\"relleno\"></textarea>"
 + "      <div style=\"position:absolute;top:auto;right:7px;left:auto;bottom:8px;\" v-if=\"mostrarBotonDeCompilar\">"
 + "        <button class=\"\" v-on:click=\"alClicarCompilar\">"
 + "          <span></span>"
 + "          <span>Compilar</span>"
 + "        </button>"
 + "      </div>"
 + "    </div>"
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
return { valor:this.valorInicial
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
methods:{ alClicarCompilar:function() {try {
if(this.modoDeCompilacion === "js") {

}
else if(this.modoDeCompilacion === "jsgen") {

}
else if(this.modoDeCompilacion === "calo") {

}
else if(this.modoDeCompilacion === "calogen") {

}
else {
throw new Error( "Modo de compilación no identificado" );
}
this.alCompilar( this.valor,
this );
} catch(error) {
console.log(error);
throw error;
}

}
}
};},
  null);