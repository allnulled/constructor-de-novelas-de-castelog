
window.NoveloControlDeListaDeTextos = Castelog.metodos.un_componente_vue2("NoveloControlDeListaDeTextos",
  "<div class=\"NoveloControlDeListaDeTextos Component\">"
 + "    <button class=\"w_100 \" v-on:click=\"() => valor.push('')\"> ➕ Añadir {{ palabra }}</button>"
 + "    <div v-for=\"item, item_index in valor\" v-bind:key=\"'control-de-lista-' + uuid + '-item-' + item_index\" style=\"margin-top:1px;\">"
 + "      <div class=\"w_100 horizontal_layout titulo_de_ventanuco\">"
 + "        <div class=\"w_100\" style=\"align-self: center; padding-left: 4px;\">q</div>"
 + "        <button class=\"boton_lateral active\"><span>－</span></button>"
 + "        <button class=\"boton_lateral \">❌</button>"
 + "      </div>"
 + "      <div class=\"w_100\">"
 + "        <div class=\"w_100\" style=\"padding-right:1px;\">"
 + "          <textarea class=\"texto_humano w_100\" v-model=\"valor[item_index]\" :placeholder=\"relleno\"></textarea>"
 + "        </div>"
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
return "ítem";
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