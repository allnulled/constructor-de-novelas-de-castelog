
window.NoveloControlDeTextoSimple = Castelog.metodos.un_componente_vue2("NoveloControlDeTextoSimple",
  "<div class=\"NoveloControlDeTextoSimple Component\">"
 + "    <div>"
 + "      <input class=\"w_100\" type=\"text\" v-model=\"valor\" :placeholder=\"relleno\" />"
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