
window.NoveloControlDeListaDeLugares = Castelog.metodos.un_componente_vue2("NoveloControlDeListaDeLugares",
  "<div class=\"NoveloControlDeListaDeLugares Component\">"
 + "    <button class=\"w_100 \" v-on:click=\"() => valor.push('')\"> ➕ Añadir {{ palabra }}</button>"
 + "    <div v-for=\"item, item_index in valor\" v-bind:key=\"'control-de-lista-de-lugares-' + uuid + '-item-' + item_index\" style=\"margin-top:1px;\">"
 + "      <div class=\"w_100 horizontal_layout\">"
 + "        <div class=\"w_100\">"
 + "          <select class=\"w_100\" v-model=\"valor[item_index]\">"
 + "            <option v-for=\"(lugar, lugar_index) in raiz.raiz.lugares_disponibles\" v-bind:key=\"'seleccion-de-lugar-' + uuid + '-lugar-opcion-' + lugar_index\" :value=\"lugar.nombre\">"
 + "              {{ lugar.nombre }}"
 + "            </option>"
 + "          </select>"
 + "        </div>"
 + "        <button class=\"boton_lateral\" style=\"margin-left:1px;\" v-on:click=\"() => valor.splice(item_index, 1)\">❌</button>"
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
valorInicial:{ type:Array,
default:function() {try {
return [  ];
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
},
palabra:{ type:String,
default:function() {try {
return "lugar";
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