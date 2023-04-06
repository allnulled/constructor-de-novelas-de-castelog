
window.ConstructorDeNovelos = Castelog.metodos.un_componente_vue2("ConstructorDeNovelos",
  "<div class=\"ConstructorDeNovelos Component win7\">"
 + "    <section class=\"tabs\">"
 + "      <menu role=\"tablist\" aria-label=\"NoveloTabs\">"
 + "        <button role=\"tab\" v-on:click=\"() => pestanya_seleccionada = 'vivo'\" :aria-selected=\"pestanya_seleccionada === 'vivo'\">"
 + "           <div class=\"emoji\"> 🔴 </div>"
 + "           <div class=\"para_tablet_o_mayor\" style=\"white-space:nowrap;\">En vivo</div>"
 + "        </button>"
 + "        <button role=\"tab\" v-on:click=\"() => pestanya_seleccionada = 'lugares'\" :aria-selected=\"pestanya_seleccionada === 'lugares'\">"
 + "           <div class=\"emoji\"> 🌍 </div>"
 + "           <div class=\"para_tablet_o_mayor\">Lugares</div>"
 + "        </button>"
 + "        <button role=\"tab\" v-on:click=\"() => pestanya_seleccionada = 'personas'\" :aria-selected=\"pestanya_seleccionada === 'personas'\">"
 + "           <div class=\"emoji\"> 🙂 </div>"
 + "           <div class=\"para_tablet_o_mayor\">Personas</div>"
 + "        </button>"
 + "        <button role=\"tab\" v-on:click=\"() => pestanya_seleccionada = 'objetos'\" :aria-selected=\"pestanya_seleccionada === 'objetos'\">"
 + "           <div class=\"emoji\"> 🏀 </div>"
 + "           <div class=\"para_tablet_o_mayor\">Objetos</div>"
 + "        </button>"
 + "        <button role=\"tab\" v-on:click=\"() => pestanya_seleccionada = 'prototipos'\" :aria-selected=\"pestanya_seleccionada === 'prototipos'\">"
 + "           <div class=\"emoji\"> 🌐 </div>"
 + "           <div class=\"para_tablet_o_mayor\">Prototipos</div>"
 + "        </button>"
 + "        <button role=\"tab\" v-on:click=\"() => pestanya_seleccionada = 'eventos'\" :aria-selected=\"pestanya_seleccionada === 'eventos'\">"
 + "           <div class=\"emoji\"> 💡 </div>"
 + "           <div class=\"para_tablet_o_mayor\">Eventos</div>"
 + "        </button>"
 + "        <button role=\"tab\" v-on:click=\"() => pestanya_seleccionada = 'variables'\" :aria-selected=\"pestanya_seleccionada === 'variables'\">"
 + "           <div class=\"emoji\"> ↔ </div>"
 + "           <div class=\"para_tablet_o_mayor\">Variables</div>"
 + "        </button>"
 + "        <button role=\"tab\" v-on:click=\"() => pestanya_seleccionada = 'funciones'\" :aria-selected=\"pestanya_seleccionada === 'funciones'\">"
 + "           <div class=\"emoji\"> ƒ </div>"
 + "           <div class=\"para_tablet_o_mayor\">Funciones</div>"
 + "        </button>"
 + "        <button role=\"tab\" v-on:click=\"() => pestanya_seleccionada = 'sucesos'\" :aria-selected=\"pestanya_seleccionada === 'sucesos'\">"
 + "           <div class=\"emoji\"> 🎞 </div>"
 + "           <div class=\"para_tablet_o_mayor\">Sucesos</div>"
 + "        </button>"
 + "        <button role=\"tab\" v-on:click=\"() => pestanya_seleccionada = 'preferencias'\" :aria-selected=\"pestanya_seleccionada === 'preferencias'\">"
 + "           <div class=\"emoji\"> ⚙️ </div>"
 + "           <div class=\"para_tablet_o_mayor\">Preferencias</div>"
 + "        </button>"
 + "        <button v-show=\"false\" role=\"tab\" v-on:click=\"() => { $window.comp = this; $window.console.log(this); }\" :aria-selected=\"pestanya_seleccionada === 'preferencias'\">"
 + "           <div class=\"emoji\"> ⚙️⚙️⚙️ </div>"
 + "           <div class=\"para_tablet_o_mayor\">Debug</div>"
 + "        </button>"
 + "      </menu>"
 + "      <article role=\"tabpanel\" v-if=\"typeof pestanya_seleccionada === 'undefined'\">"
 + "        <div role=\"progressbar\" class=\"animate\">"
 + "          <div style=\"width: 100%\"></div>"
 + "        </div>"
 + "      </article>"
 + "      <article role=\"tabpanel\" v-else-if=\"pestanya_seleccionada === 'vivo'\" key=\"vivo\">"
 + "        <div class=\"titulo_de_pestanya\"> 🔴 En vivo</div>"
 + "        <NoveloVistaEnVivo :raiz=\"this\" />"
 + "      </article>"
 + "      <article role=\"tabpanel\" v-else-if=\"pestanya_seleccionada === 'lugares'\" key=\"lugares\">"
 + "        <div class=\"titulo_de_pestanya\"> 🌍 Lugares</div>"
 + "        <EditorDeObjeto :raiz=\"this\" almacen=\"lugares\" palabra=\"lugar\" key=\"editor_de_lugares\" />"
 + "      </article>"
 + "      <article role=\"tabpanel\" v-else-if=\"pestanya_seleccionada === 'personas'\" key=\"personas\">"
 + "        <div class=\"titulo_de_pestanya\"> 🙂 Personas</div>"
 + "        <EditorDeObjeto :raiz=\"this\" almacen=\"personas\" palabra=\"persona\" key=\"editor_de_personas\" />"
 + "      </article>"
 + "      <article role=\"tabpanel\" v-else-if=\"pestanya_seleccionada === 'objetos'\" key=\"objetos\">"
 + "        <div class=\"titulo_de_pestanya\"> 🏀 Objetos</div>"
 + "        <EditorDeObjeto :raiz=\"this\" almacen=\"objetos\" palabra=\"objeto\" key=\"editor_de_objetos\" />"
 + "      </article>"
 + "      <article role=\"tabpanel\" v-else-if=\"pestanya_seleccionada === 'prototipos'\" key=\"prototipos\">"
 + "        <div class=\"titulo_de_pestanya\"> 🌐 Prototipos</div>"
 + "        <EditorDeObjeto :raiz=\"this\" almacen=\"prototipos\" palabra=\"prototipo\" key=\"editor_de_prototipos\" />"
 + "      </article>"
 + "      <article role=\"tabpanel\" v-else-if=\"pestanya_seleccionada === 'variables'\" key=\"variables\">"
 + "        <div class=\"titulo_de_pestanya\"> 🌐 Variables</div>"
 + "        <EditorDeObjeto :raiz=\"this\" almacen=\"variables\" palabra=\"variable\" key=\"editor_de_variables\" />"
 + "      </article>"
 + "      <article role=\"tabpanel\" v-else-if=\"pestanya_seleccionada === 'funciones'\" key=\"funciones\">"
 + "        <div class=\"titulo_de_pestanya\"> ƒ Funciones</div>"
 + "        <EditorDeObjeto :raiz=\"this\" almacen=\"funciones\" palabra=\"funcion\" key=\"editor_de_funciones\" />"
 + "      </article>"
 + "      <article role=\"tabpanel\" v-else-if=\"pestanya_seleccionada === 'eventos'\" key=\"eventos\">"
 + "        <div class=\"titulo_de_pestanya\"> 💡 Eventos</div>"
 + "        <EditorDeObjeto :raiz=\"this\" almacen=\"eventos\" palabra=\"evento\" key=\"editor_de_eventos\" />"
 + "      </article>"
 + "      <article role=\"tabpanel\" v-else-if=\"pestanya_seleccionada === 'verbos'\" key=\"verbos\">"
 + "        <div class=\"titulo_de_pestanya\"> 💡 Verbos</div>"
 + "        <EditorDeObjeto :raiz=\"this\" almacen=\"eventos\" palabra=\"evento\" key=\"editor_de_eventos\" />"
 + "      </article>"
 + "      <article role=\"tabpanel\" v-else-if=\"pestanya_seleccionada === 'sucesos'\" key=\"sucesos\">"
 + "        <div class=\"titulo_de_pestanya\"> 🎞 Sucesos</div>"
 + "        <EditorDeObjeto :raiz=\"this\" almacen=\"sucesos\" palabra=\"suceso\" key=\"editor_de_sucesos\" />"
 + "      </article>"
 + "      <article role=\"tabpanel\" v-else-if=\"pestanya_seleccionada === 'preferencias'\" key=\"preferencias\">"
 + "        <div class=\"titulo_de_pestanya\"> ⚙️ Preferencias</div>"
 + "        <EditorDeObjeto :raiz=\"this\" almacen=\"preferencias\" palabra=\"preferencia\" key=\"editor_de_preferencias\" />"
 + "      </article>"
 + "    </section>"
 + "  </div>",
  function(component) {return { props:{ lugaresDisponibles:{ type:Array,
default:function() {try {
return [  ];
} catch(error) {
console.log(error);
throw error;
}

}
},
personasDisponibles:{ type:Array,
default:function() {try {
return [  ];
} catch(error) {
console.log(error);
throw error;
}

}
},
objetosDisponibles:{ type:Array,
default:function() {try {
return [  ];
} catch(error) {
console.log(error);
throw error;
}

}
},
prototiposDisponibles:{ type:Array,
default:function() {try {
return [  ];
} catch(error) {
console.log(error);
throw error;
}

}
},
variablesDisponibles:{ type:Array,
default:function() {try {
return [  ];
} catch(error) {
console.log(error);
throw error;
}

}
},
funcionesDisponibles:{ type:Array,
default:function() {try {
return [  ];
} catch(error) {
console.log(error);
throw error;
}

}
},
eventosDisponibles:{ type:Array,
default:function() {try {
return [  ];
} catch(error) {
console.log(error);
throw error;
}

}
},
sucesosDisponibles:{ type:Array,
default:function() {try {
return [  ];
} catch(error) {
console.log(error);
throw error;
}

}
},
preferenciasDisponibles:{ type:Array,
default:function() {try {
return [  ];
} catch(error) {
console.log(error);
throw error;
}

}
},
almacenDeLocalStorage:{ type:String,
default:"_novelo_almacen_por_defecto_"
}
},
data() {try {
console.log('[DEBUG]', "ConstructorDeNovelos.data");
const data = { esta_cargado:false,
lugares_disponibles:this.lugaresDisponibles,
personas_disponibles:this.personasDisponibles,
objetos_disponibles:this.objetosDisponibles,
prototipos_disponibles:this.prototiposDisponibles,
variables_disponibles:this.variablesDisponibles,
funciones_disponibles:this.funcionesDisponibles,
eventos_disponibles:this.eventosDisponibles,
sucesos_disponibles:this.sucesosDisponibles,
preferencias_disponibles:this.preferenciasDisponibles,
pestanya_seleccionada:this.pestanyaSeleccionada
};
data.claves_persistibles = Object.keys(data);
Object.assign(data, { en_vivo_datos:new this.$window.juego_de_novelo(  )
} );
Object.assign(this, this.cargar( false ) );
return data;
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ recargar_ui:function() {try {
console.log('[DEBUG]', "ConstructorDeNovelos.methods.recargar_ui");
} catch(error) {
console.log(error);
throw error;
}

},
cargar:function( actualizar_instancia = true ) {try {
console.log('[DEBUG]', "ConstructorDeNovelos.methods.cargar");
Object.assign(this, (() => {try {
return JSON.parse(localStorage[ this.almacenDeLocalStorage ]);
} catch(error) {
console.log(error);
return { 
};}})() );
} catch(error) {
console.log(error);
throw error;
}

},
guardar:function() {try {
console.log('[DEBUG]', "ConstructorDeNovelos.methods.guardar");
localStorage[ this.almacenDeLocalStorage ] = (() => {try {
const memorizable = Castelog.metodos.mostrando_solo_propiedades(this, this.claves_persistibles);
console.log(memorizable);
const memorizado = JSON.stringify(memorizable, null, 2);
return memorizado;
} catch(error) {
console.log(error);
throw error;
return "{}";}})();
} catch(error) {
console.log(error);
throw error;
}

},
agregar:function( tipo,
nombre = undefined ) {try {
console.log('[DEBUG]', "ConstructorDeNovelos.methods.agregar");
const almacen_id = tipo + "_disponibles";
const dato = { esta_mostrando_detalles:true
};
if(typeof nombre === 'string') {
dato.nombre = nombre;
}
this[ almacen_id ].push(dato)
return this[ almacen_id ].length - 1;
} catch(error) {
console.log(error);
throw error;
}

},
alternar:function( tipo,
indice ) {try {
console.log('[DEBUG]', "ConstructorDeNovelos.methods.alternar");
const almacen_id = tipo + "_disponibles";
this[ almacen_id ][ indice ].esta_mostrando_detalles = ( this[ almacen_id ][ indice ].esta_mostrando_detalles === false ? true : false );
return indice;
} catch(error) {
console.log(error);
throw error;
}

},
eliminar:function( tipo,
indice ) {try {
console.log('[DEBUG]', "ConstructorDeNovelos.methods.eliminar");
this[ tipo + "_disponibles" ].splice( indice,
1 );
return true;
} catch(error) {
console.log(error);
throw error;
}

}
},
watch:{ pestanya_seleccionada:function( valor ) {try {
console.log('[DEBUG]', "ConstructorDeNovelos.watch.pestanya_seleccionada");
} catch(error) {
console.log(error);
throw error;
}

}
},
mounted() {try {
console.log('[DEBUG]', "ConstructorDeNovelos.mounted");
this.cargar(  );
this.pestanya_seleccionada = "lugares";
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

}
};},
  null);