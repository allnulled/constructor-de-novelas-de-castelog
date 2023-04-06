
window.EditorDeObjeto = Castelog.metodos.un_componente_vue2("EditorDeObjeto",
  "<div class=\"EditorDeObjeto Component\" v-bind:key=\"'editor-de-objetos-' + uuid\">"
 + "    <div>"
 + "      <div class=\"w_100 horizontal_layout\" style=\"margin-top:0px;\">"
 + "        <button class=\"w_100\" v-on:click=\"() => agregar()\">"
 + "          <div class=\"emoji\"> ➕ </div>"
 + "          <div class=\"para_tablet_o_mayor\">Añadir {{ palabra }}</div>"
 + "        </button>"
 + "        <button class=\"boton_minimal margen_izquierda_item\" v-on:click=\"() => guardar()\">"
 + "          <div class=\"emoji\"> ✔ </div>"
 + "          <div class=\"para_tablet_o_mayor\" style=\"padding-left:4px;padding-right:10px;\">Guardar</div>"
 + "        </button>"
 + "        <button class=\"boton_minimal margen_izquierda_item\" v-on:click=\"() => cargar()\">"
 + "          <div class=\"emoji\"> ♻️ </div>"
 + "          <div class=\"para_tablet_o_mayor\" style=\"padding-left:4px;padding-right:10px;\">Cargar</div>"
 + "        </button>"
 + "      </div>"
 + "      <div class=\"tarjeta_expandible\" v-for=\"item, item_index in raiz[almacen_id]\" v-bind:key=\"'editor-de-objetos-' + uuid + '-almacen-' + palabra + '-item-' + item_index + '-fila-' + item.esta_mostrando_detalles\">"
 + "        <div class=\"w_100 horizontal_layout titulo_de_ventanuco\" style=\"\">"
 + "          <div class=\"w_100\" style=\"align-self:center;padding-left:4px;\">{{ raiz[almacen_id][item_index].nombre }}</div>"
 + "          <button class=\"boton_lateral\" :class=\"{active:raiz[almacen_id][item_index].esta_mostrando_detalles !== false}\" v-on:click=\"() => alternar(item_index)\">"
 + "            <span v-if=\"raiz[almacen_id][item_index].esta_mostrando_detalles !== false\">－</span>"
 + "            <span v-else>☰</span>"
 + "          </button>"
 + "          <button class=\"boton_lateral \" v-on:click=\"() => eliminar(item_index)\" style=\"\">❌</button>"
 + "        </div>"
 + "        <div class=\"borde_sin_top\" v-if=\"(!('esta_mostrando_detalles' in raiz[almacen_id][item_index])) || raiz[almacen_id][item_index].esta_mostrando_detalles === true\">"
 + "          <div class=\"w_100\" v-bind:key=\"'editor-de-objetos-' + uuid + '-almacen-' + palabra + '-item-' + item_index + '-detalles-' + raiz[almacen_id][item_index].esta_mostrando_detalles + '-subcapa'\">"
 + "            <ul class=\"tree-view has-container\" style=\"\">"
 + "              <li v-if=\"'persona,lugar,objeto,prototipo,evento,variable,funcion'.split(',').indexOf(palabra) !== -1\">"
 + "                <details>"
 + "                  <summary>Nombre:</summary>"
 + "                  <div>"
 + "                    <NoveloControlDeTextoSimple"
 + "                      :raiz=\"editor_mismo\""
 + "                      :al-cambiar=\"v => { raiz[almacen_id][item_index].nombre = v; }\""
 + "                      :valor-inicial=\"raiz[almacen_id][item_index].nombre\""
 + "                      :relleno=\"'Identificador del ' + palabra\""
 + "                    />"
 + "                  </div>"
 + "                </details>"
 + "              </li>"
 + "              <li v-if=\"'persona,lugar,objeto,prototipo,evento,variable,funcion,suceso'.split(',').indexOf(palabra) !== -1\">"
 + "                <details>"
 + "                  <summary>Notas:</summary>"
 + "                  <div>"
 + "                    <NoveloControlDeTextoLargo"
 + "                      :raiz=\"editor_mismo\""
 + "                      :al-cambiar=\"v => { raiz[almacen_id][item_index].descripcion = v; }\""
 + "                      :valor-inicial=\"raiz[almacen_id][item_index].descripcion\""
 + "                      :relleno=\"'Notas sobre ' + palabra\""
 + "                    />"
 + "                  </div>"
 + "                </details>"
 + "              </li>"
 + "              <li v-if=\"'persona,lugar,objeto,prototipo'.split(',').indexOf(palabra) !== -1\">"
 + "                <details>"
 + "                  <summary>Prototipo:</summary>"
 + "                  <div>"
 + "                    <div class=\"horizontal_layout\">"
 + "                      <NoveloControlDeSeleccionDePrototipo"
 + "                        class=\"w_100\""
 + "                        :raiz=\"editor_mismo\""
 + "                        :al-cambiar=\"v => { raiz[almacen_id][item_index].prototipo = v; }\""
 + "                        :valor-inicial=\"raiz[almacen_id][item_index].prototipo\""
 + "                      />"
 + "                      <button class=\"margen_izquierda_item\" v-on:click=\"() => aplicar_prototipo(almacen_id,item_index)\">Aplicar</button>"
 + "                    </div>"
 + "                  </div>"
 + "                </details>"
 + "              </li>"
 + "              <li v-if=\"'persona,objeto,prototipo'.split(',').indexOf(palabra) !== -1\">"
 + "                <details>"
 + "                  <summary>Localización:</summary>"
 + "                  <div>"
 + "                    <NoveloControlDeSeleccionDeLugar"
 + "                      :raiz=\"editor_mismo\""
 + "                      :al-cambiar=\"v => { raiz[almacen_id][item_index].localizacion = v; }\""
 + "                      :valor-inicial=\"raiz[almacen_id][item_index].localizacion\""
 + "                      :relleno=\"`asigno juego\\n  .${almacen}\\n  .\\$obtener_por_nombre(${JSON.stringify(raiz[almacen_id][item_index].nombre)})\\n  .localizacion\\ncomo un hecho con (\\n  juego,\\n  mundo,\\n  personas,\\n  lugares,\\n  objetos,\\n  prototipos,\\n  sucesos,\\n  variables,\\n  funciones\\n) donde {\\n  @POR-INYECTAR: retorno \\${*}.\\n}.`\""
 + "                    />"
 + "                  </div>"
 + "                </details>"
 + "              </li>"
 + "              <template v-if=\"'lugar,prototipo'.split(',').indexOf(palabra) !== -1\">"
 + "                <li class=\"subtitulo_de_documento\">Por ser lugar:</li>"
 + "                <li>"
 + "                  <details>"
 + "                    <summary>Salidas:</summary>"
 + "                    <div>"
 + "                      <NoveloControlDeListaDeLugares"
 + "                        :raiz=\"editor_mismo\""
 + "                        :al-cambiar=\"v => { raiz[almacen_id][item_index].salidas = v; }\""
 + "                        :valor-inicial=\"raiz[almacen_id][item_index].salidas\""
 + "                      />"
 + "                    </div>"
 + "                  </details>"
 + "                </li>"
 + "              </template>"
 + "              <template v-if=\"'persona,prototipo'.split(',').indexOf(palabra) !== -1\">"
 + "                <li class=\"subtitulo_de_documento\">Por ser persona:</li>"
 + "                <li>"
 + "                  <details>"
 + "                    <summary>Rasgos físicos:</summary>"
 + "                    <div>"
 + "                      <NoveloControlDeListaDeTextos"
 + "                        :raiz=\"editor_mismo\""
 + "                        :al-cambiar=\"v => { raiz[almacen_id][item_index].rasgos_fisicos = v; }\""
 + "                        :valor-inicial=\"raiz[almacen_id][item_index].rasgos_fisicos\""
 + "                        palabra=\"rasgo físico\""
 + "                        relleno=\"Un rasgo físico del personaje.\""
 + "                      />"
 + "                    </div>"
 + "                  </details>"
 + "                </li>"
 + "                <li>"
 + "                  <details>"
 + "                    <summary>Rasgos psicológicos:</summary>"
 + "                    <div>"
 + "                      <NoveloControlDeListaDeTextos"
 + "                        :raiz=\"editor_mismo\""
 + "                        :al-cambiar=\"v => { raiz[almacen_id][item_index].rasgos_psicologicos = v; }\""
 + "                        :valor-inicial=\"raiz[almacen_id][item_index].rasgos_psicologicos\""
 + "                        palabra=\"rasgo psicológico\""
 + "                        relleno=\"Un rasgo psicológico del personaje.\""
 + "                      />"
 + "                    </div>"
 + "                  </details>"
 + "                </li>"
 + "                <li>"
 + "                  <details>"
 + "                    <summary>Rasgos sociales:</summary>"
 + "                    <div>"
 + "                      <NoveloControlDeListaDeTextos"
 + "                        :raiz=\"editor_mismo\""
 + "                        :al-cambiar=\"v => { raiz[almacen_id][item_index].rasgos_sociales = v; }\""
 + "                        :valor-inicial=\"raiz[almacen_id][item_index].rasgos_sociales\""
 + "                        palabra=\"rasgo social\""
 + "                        relleno=\"Un rasgo social del personaje.\""
 + "                      />"
 + "                    </div>"
 + "                  </details>"
 + "                </li>"
 + "                <li>"
 + "                  <details>"
 + "                    <summary>Otros rasgos:</summary>"
 + "                    <div>"
 + "                      <NoveloControlDeListaDeTextos"
 + "                        :raiz=\"editor_mismo\""
 + "                        :al-cambiar=\"v => { raiz[almacen_id][item_index].otros_rasgos = v; }\""
 + "                        :valor-inicial=\"raiz[almacen_id][item_index].otros_rasgos\""
 + "                        palabra=\"rasgo social\""
 + "                        relleno=\"Un rasgo social del personaje.\""
 + "                      />"
 + "                    </div>"
 + "                  </details>"
 + "                </li>"
 + "              </template>"
 + "              <template v-if=\"'evento,prototipo'.split(',').indexOf(palabra) !== -1\">"
 + "                <li class=\"subtitulo_de_documento\">Por ser evento:</li>"
 + "                <li>"
 + "                  <details>"
 + "                    <summary>Desencadenante:</summary>"
 + "                    <div>"
 + "                      <NoveloControlDeTextoMaquina"
 + "                        :raiz=\"editor_mismo\""
 + "                        :al-cambiar=\"v => { raiz[almacen_id][item_index].desencadenante = v; }\""
 + "                        :valor-inicial=\"raiz[almacen_id][item_index].desencadenante\""
 + "                        :relleno=\"'apendizo una función con (juego) donde {\\n  si ${*} {\\n    ${consecuencia}\\n  }\\n} en juego.eventos.'\""
 + "                      />"
 + "                    </div>"
 + "                  </details>"
 + "                </li>"
 + "                <li>"
 + "                  <details>"
 + "                    <summary>Consecuencia:</summary>"
 + "                    <div>"
 + "                      <NoveloControlDeTextoMaquina"
 + "                        :raiz=\"editor_mismo\""
 + "                        :al-cambiar=\"v => { raiz[almacen_id][item_index].consecuencia = v; }\""
 + "                        :valor-inicial=\"raiz[almacen_id][item_index].consecuencia\""
 + "                        :relleno=\"'apendizo una función con (juego) donde {\\n  si ${desencadenante} {\\n    ${*}\\n  }\\n} en juego.eventos.'\""
 + "                      />"
 + "                    </div>"
 + "                  </details>"
 + "                </li>"
 + "              </template>"
 + "              <template v-if=\"'variable,prototipo'.split(',').indexOf(palabra) !== -1\">"
 + "                <li class=\"subtitulo_de_documento\">Por ser variable:</li>"
 + "                <li>"
 + "                  <details>"
 + "                    <summary>Valor:</summary>"
 + "                    <div>"
 + "                      <NoveloControlDeTextoMaquina"
 + "                        :raiz=\"editor_mismo\""
 + "                        :al-cambiar=\"v => { raiz[almacen_id][item_index].valor = v; }\""
 + "                        :valor-inicial=\"raiz[almacen_id][item_index].valor\""
 + "                        :relleno=\"'asigno juego.variables.${nombre} como ${*}.'\""
 + "                      />"
 + "                    </div>"
 + "                  </details>"
 + "                </li>"
 + "              </template>"
 + "              <template v-if=\"'funcion,prototipo'.split(',').indexOf(palabra) !== -1\">"
 + "                <li class=\"subtitulo_de_documento\">Por ser función:</li>"
 + "                <li>"
 + "                  <details>"
 + "                    <summary>Valor:</summary>"
 + "                    <div>"
 + "                      <NoveloControlDeTextoMaquina"
 + "                        :raiz=\"editor_mismo\""
 + "                        :al-cambiar=\"v => { raiz[almacen_id][item_index].valor = v; }\""
 + "                        :valor-inicial=\"raiz[almacen_id][item_index].valor\""
 + "                        :relleno=\"'asigno juego.funciones.${nombre} como ${*}.'\""
 + "                      />"
 + "                    </div>"
 + "                  </details>"
 + "                </li>"
 + "              </template>"
 + "              <template v-if=\"'suceso,prototipo'.split(',').indexOf(palabra) !== -1\">"
 + "                <li class=\"subtitulo_de_documento\">Por ser suceso:</li>"
 + "                <li>"
 + "                  <details>"
 + "                    <summary>Momento:</summary>"
 + "                    <div>"
 + "                      <NoveloControlDeTextoMaquina"
 + "                        :raiz=\"editor_mismo\""
 + "                        :al-cambiar=\"v => { raiz[almacen_id][item_index].momento = v; }\""
 + "                        :valor-inicial=\"raiz[almacen_id][item_index].momento\""
 + "                        :relleno=\"'asigno juego.sucesos.push({ nombre: ${nombre:*} }) .'\""
 + "                      />"
 + "                    </div>"
 + "                  </details>"
 + "                </li>"
 + "              </template>"
 + "              <template v-if=\"'persona,lugar,objeto,prototipo,evento,suceso'.split(',').indexOf(palabra) !== -1\">"
 + "                <li class=\"subtitulo_de_documento\">Opciones avanzadas:</li>"
 + "                <li>"
 + "                  <details>"
 + "                    <summary>Script:</summary>"
 + "                    <div>"
 + "                      <NoveloControlDeTextoMaquina"
 + "                        :raiz=\"editor_mismo\""
 + "                        :al-cambiar=\"v => { raiz[almacen_id][item_index].script = v; }\""
 + "                        :valor-inicial=\"raiz[almacen_id][item_index].script\""
 + "                        :relleno=\"`una función con (componente, printar) donde {\\n  retorno {*}.\\n  ### donde {*} son las propiedades del objeto\\n  ### que extenderán a las genéricas.\\n}.bind(objeto).`\""
 + "                      />"
 + "                    </div>"
 + "                  </details>"
 + "                </li>"
 + "              </template>"
 + "            </ul>"
 + "          </div>"
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
almacen:{ type:String,
required:true
},
palabra:{ type:String,
required:true
}
},
data() {try {
console.log('[DEBUG]', "EditorDeObjeto.data");
return { editor_mismo:this,
almacen_id:this.almacen + "_disponibles"
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ cargar:function( actualizar_instancia = true ) {try {
console.log('[DEBUG]', "EditorDeObjeto.methods.cargar");
return this.raiz.cargar(  );
} catch(error) {
console.log(error);
throw error;
}

},
guardar:function() {try {
console.log('[DEBUG]', "EditorDeObjeto.methods.guardar");
return this.raiz.guardar(  );
} catch(error) {
console.log(error);
throw error;
}

},
agregar:function(  ) {try {
console.log('[DEBUG]', "EditorDeObjeto.methods.agregar");
let es_nombre_valido = false;
pidiendo_nuevo_nombre:
while(es_nombre_valido === false) {
let nombre_inicial = this.$window.prompt( `¿Nombre de nueva unidad de «${this.palabra}»?` );
if((!(typeof nombre_inicial === 'string'))) {
return false;
}
nombre_inicial = nombre_inicial.trim(  );
if(nombre_inicial.length === 0) {
continue pidiendo_nuevo_nombre;
}
const coincidencias = Castelog.metodos.un_filtrado_por(this.raiz[ this.almacen_id ], ( item,
index ) => {try {
return ( item.nombre === es_nombre_valido ? true : false );
} catch(error) {
console.log(error);
throw error;
}

}, null, null);
if((!(coincidencias.length === 0))) {
continue pidiendo_nuevo_nombre;
}
es_nombre_valido = nombre_inicial;
}
this.raiz.agregar( this.almacen,
es_nombre_valido );
} catch(error) {
console.log(error);
throw error;
}

},
alternar:function( indice ) {try {
console.log('[DEBUG]', "EditorDeObjeto.methods.alternar");
this.raiz.alternar( this.almacen,
indice );
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
eliminar:function( indice ) {try {
console.log('[DEBUG]', "EditorDeObjeto.methods.eliminar");
const confirmacion = this.$window.confirm( `¿Eliminar ítem «${indice}» de nombre «${this.raiz[this.almacen_id][indice].nombre}» de «${this.almacen}» disponibles?` );
if((!(confirmacion))) {
return;
}
this.raiz.eliminar( this.almacen,
indice );
} catch(error) {
console.log(error);
throw error;
}

}
}
};},
  null);