/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var info = [];
var max;
var min;
var inicio;


$(function () {
    //Genera el datapicker
   
    //agrega los eventos las capas necesarias
    $("#enviar").click(function () {
        enviar();
    });
    
     $("#BuscarAvion").click(function () {
        buscarMarca();
    });
 
    
});

//******************************************************************************
//Se ejecuta cuando la página esta completamente cargada
//******************************************************************************

$(document).ready(function () {
    consultarAviones();
});

function calcularTamano() {
    return Math.ceil(info.length / 10);
}

//******************************************************************************
//******************************************************************************
//metodos para consultas el listado de los Aviones
//******************************************************************************
//******************************************************************************

function consultarAviones() {
    mostrarModal("myModalM", "Espere por favor..", "Consultando la información de aviones en la base de datos");
   
    $.ajax({
        
        url: 'AvionServlet',
        data: {
            accion: "consultarAviones"
            
        },
        error: function () { //si existe un error en la respuesta del ajax
             cambiarMensajeModal("myModalM", "Resultado acción", "Se presento un error, contactar al administador");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            dibujarTabla(JSON.parse(data));
            // se oculta el modal esta funcion se encuentra en el utils.js
            ocultarModal("myModalM");
            

        },
        type: 'POST',
        dataType: "text"
    });
}

function dibujarTablaFormulario(dataJson) {
    //limpia la información que tiene la tabla
    //$("#tablaAvionesBusqueda").remove(); 
    
    //muestra el enzabezado de la tabla
    var head = $("<thead />");
    var row = $("<tr />");
    head.append(row);
    $("#tablaAvionesBusqueda").append(head); 
     row.append($("<th><b>ID</b></th>"));
    row.append($("<th><b>MARCA</b></th>"));
    row.append($("<th><b>MODELO</b></th>"));
    row.append($("<th><b>AÑO</b></th>"));
    row.append($("<th><b>CANTIDAD DE PASAJEROS</b></th>"));
    row.append($("<th><b>CANTIDAD DE FILAS</b></th>"));
    row.append($("<th><b>ASIENTOS POR FILA</th>"));
    
    //carga la tabla con el json devuelto
    for (var i = 0; i < dataJson.length; i++) {
        dibujarFilaFormulario(dataJson[i]);
    }
}

function dibujarTabla(dataJson) {
    //limpia la información que tiene la tabla
    $("#tablaAviones").html(""); 
    
    //muestra el enzabezado de la tabla
    var head = $("<thead />");
    var row = $("<tr />");
    head.append(row);
    $("#tablaAviones").append(head); 
     row.append($("<th><b>ID</b></th>"));
    row.append($("<th><b>MARCA</b></th>"));
    row.append($("<th><b>MODELO</b></th>"));
    row.append($("<th><b>AÑO</b></th>"));
    row.append($("<th><b>CANTIDAD DE PASAJEROS</b></th>"));
    row.append($("<th><b>CANTIDAD DE FILAS</b></th>"));
    row.append($("<th><b>ASIENTOS POR FILA</th>"));
    row.append($("<th><b>ACCION</th>"));
    
    //carga la tabla con el json devuelto
    for (var i = 0; i < dataJson.length; i++) {
        dibujarFila(dataJson[i]);
    }
}

function dibujarFila(rowData) {
    //Cuando dibuja la tabla en cada boton se le agrega la funcionalidad de cargar o eliminar la informacion
    //de una avion
    
    var row = $("<tr />");
    $("#tablaAviones").append(row); 
     row.append($("<td>" + rowData.idAvion + "</td>"));
    row.append($("<td>" + rowData.marca + "</td>"));
    row.append($("<td>" + rowData.modelo + "</td>"));
    row.append($("<td>" + rowData.anno + "</td>"));
    row.append($("<td>" + rowData.cantidadPasajeros + "</td>"));
    row.append($("<td>" + rowData.filas + "</td>"));
    row.append($("<td>" + rowData.asientosXfila + "</td>"));
    row.append($('<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="consultarAvionesByID('+rowData.idAvion+');">'+
                        '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>'+
                    '</button>'+
                    '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="eliminarAviones('+rowData.idAvion+');">'+
                        '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>'+
                    '</button></td>'));
}

function dibujarFilaFormulario(rowData) {
    //Cuando dibuja la tabla en cada boton se le agrega la funcionalidad de cargar o eliminar la informacion
    //de una avion
    
    var row = $("<tr />");
    $("#tablaAvionesBusqueda").append(row); 
     row.append($("<td>" + rowData.idAvion + "</td>"));
    row.append($("<td>" + rowData.marca + "</td>"));
    row.append($("<td>" + rowData.modelo + "</td>"));
    row.append($("<td>" + rowData.anno + "</td>"));
    row.append($("<td>" + rowData.cantidadPasajeros + "</td>"));
    row.append($("<td>" + rowData.filas + "</td>"));
    row.append($("<td>" + rowData.asientosXfila + "</td>"));
}


function consultarAvionesByID(idAvion) {
    mostrarModal("myModalM", "Espere por favor..", "Consultando el avion seleccionado");
    //Se envia la información por ajax

    $.ajax({
        url: 'AvionServlet',
        data: {
            accion: "consultarAvionesByID",
            idAvion: idAvion
        },
        error: function () { //si existe un error en la respuesta del ajax
            cambiarMensajeModal("myModalM", "Resultado acción", "Se presento un error, contactar al administador");
            
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            //************************************************************************
            //carga información de los aviones en los campos
            //************************************************************************
            ocultarModal("myModalM");
            //se indicar que la cédula es solo readOnly
            $("#idAvion").attr('readonly', 'readonly');

            //se modificar el hidden que indicar el tipo de accion que se esta realizando
            $("#avionAction").val("modificarAvion");

            //se carga la información en el formulario
            $("#idAvion").val(data.idAvion);
            $("#Marca").val(data.marca);
            $("#Modelo").val(data.modelo);
            $("#ano").val(data.anno);
            $("#pasajeros").val(data.cantidadPasajeros);
            $("#filas").val(data.filas);
            $("#axfilas").val(data.asientosXfila);

           
        },
        type: 'POST',
        dataType: "json"
    });
}

function eliminarAviones(idAvion) {
  mostrarModal("myModalM", "Espere por favor..", "Se esta eliminando el avion seleccionado");
    
    $.ajax({
        url: 'AvionServlet',
        data: {
            accion: "eliminarAviones",
            idAvion: idAvion
        },
        error: function () { //si existe un error en la respuesta del ajax
            cambiarMensajeModal("myModalM", "Resultado acción", "Se presento un error, contactar al administador");
            
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            // se cambia el mensaje del modal por la respuesta del ajax
            var respuestaTxt = data.substring(2);
            var tipoRespuesta = data.substring(0, 2);
            if (tipoRespuesta === "E~") {
                cambiarMensajeModal("myModalM", "Resultado acción", respuestaTxt);
            } else {
                //consultarAviones();
                setTimeout(consultarAviones, 3000);// hace una pausa y consulta la información de la base de datos
            }
        },
        type: 'POST',
        dataType: "text"
    });
}

function buscarMarca() {
    var aux = document.getElementById("buscarMarca").value;
    mostrarModal("myModalM", "Espere por favor..", "Consultando la información de Rutas en la base de datos");
    //Se envia la información por ajax
    $.ajax({
        url: 'AvionServlet',
        data: {
            accion: "buscarMarca",
            valor: aux
        },
        error: function () { //si existe un error en la respuesta del ajax
           cambiarMensajeModal("myModalM", "Resultado acción", "Se presento un error, contactar al administador");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
//            dibujarTabla(data);
            // se oculta el modal esta funcion se encuentra en el utils.js
             ocultarModal("myModalM");
            if (data.length == 0) {
                cambiarMensajeModal("myModalM", "Resultado acción", "Se presento un error, contactar al administador");
                return;
            }
             $("#myModalFormulario").modal();
             limpiarForm();
           dibujarTablaFormulario(data);
        },
        type: 'POST',
        dataType: "json"
    });
}
//******************************************************************************
//******************************************************************************

//******************************************************************************
//******************************************************************************
//El metodo enviar funciona tanto para el insertar como para el modificar
//******************************************************************************
//******************************************************************************

function enviar() {
    if (validar()===true) {
        //Se envia la información por ajax
        $.ajax({
            url: 'AvionServlet',
            data: {
                accion: $("#avionAction").val(),
                id: $("#idAvion").val(),
                Marca: $("#Marca").val(),
                Modelo: $("#Modelo").val(),
                ano: $("#ano").val(),
                pasajeros: $("#pasajeros").val(),
                filas: $("#filas").val(),
                axfilas:$("#axfilas").val()
            },
            error: function () { //si existe un error en la respuesta del ajax
                mostrarMensaje("alert alert-danger", "Se genero un error, contacte al administrador (Error del ajax)", "Error!");
                
            },
            success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
                var respuestaTxt = data.substring(2);
                var tipoRespuesta = data.substring(0, 2);
                if (tipoRespuesta === "C~") {
                    mostrarMensaje("alert alert-success", respuestaTxt, "Correcto!");
                    consultarAviones();
                } else{
                    if (tipoRespuesta === "P~") {
                       mostrarMensaje("alert alert-danger", "Ya existe una ruta con este identificador", "Error!");
                        $("#groupIdAvion").addClass("has-error");
                    } else if (tipoRespuesta === "E~") {
                       mostrarMensaje("alert alert-danger", respuestaTxt, "Error!");
                    } else {
                        mostrarMensaje("alert alert-danger", "Se generó un error, contacte al administrador", "Error!");
                    }
                }

            },
            type: 'POST'
        });
    } else {
        alert("Debe digitar los datos correctamente!");
       
    }
}

function validar() {
    var validacion = true;

    //Elimina estilo de error en los css
    //notese que es sobre el grupo que contienen el input
    
    $("#groupIdAvion").removeClass("has-error");
    $("#groupMarca").removeClass("has-error");
    $("#groupModelo").removeClass("has-error");
    $("#groupAno").removeClass("has-error");
    $("#groupPasajeros").removeClass("has-error");
    $("#groupFilas").removeClass("has-error");
    $("#groupAxFilas").removeClass("has-error");

    //valida cada uno de los campos del formulario
    //Nota: Solo si fueron digitados
    if ($("#idAvion").val() === "") {
        $("#groupIdAvion").addClass("has-error");
        validacion = false;
    }
    if ($("#Marca").val() === "") {
        $("#groupMarca").addClass("has-error");
        validacion = false;
    }
    if ($("#Modelo").val() === "") {
        $("#groupModelo").addClass("has-error");
        validacion = false;
    }
    if ($("#pasajeros").val() === "") {
        $("#groupPasajeros").addClass("has-error");
        validacion = false;
    }
     if ($("#filas").val() === "") {
        $("#groupFilas").addClass("has-error");
        validacion = false;
    }
     if ($("#axfilas").val() === "") {
        $("#groupAxFilas").addClass("has-error");
        validacion = false;
    }
    

    return validacion;
}

function mostrarMensaje(classCss, msg, neg) {
    //se le eliminan los estilos al mensaje
    $("#mesajeResult").removeClass();

    //se setean los estilos
    $("#mesajeResult").addClass(classCss);

    //se muestra la capa del mensaje con los parametros del metodo
    $("#mesajeResult").fadeIn("slow");
    $("#mesajeResultNeg").html(neg);
    $("#mesajeResultText").html(msg);
    $("#mesajeResultText").html(msg);
}

function limpiarForm() {
    //Resetear el formulario
    $('#tablaAvionesBusqueda').empty();
}




