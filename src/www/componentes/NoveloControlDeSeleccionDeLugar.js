
window.NoveloControlDeSeleccionDeLugar = Castelog.metodos.un_componente_vue2("NoveloControlDeSeleccionDeLugar",
  "<div class=\"NoveloControlDeSeleccionDeLugar Component\">"
 + "    <div style=\"position:relative;\">"
 + "      <select class=\"w_100\" v-model=\"valor\">"
 + "        <option v-for=\"(lugar, lugar_index) in raiz.raiz.lugares_disponibles\" v-bind:key=\"'seleccion-de-lugar-' + uuid + '-lugar-opcion-' + lugar_index\" :value=\"lugar.nombre\">"
 + "          {{ lugar.nombre }}"
 + "        </option>"
 + "      </select>"
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
}
};},
  null);