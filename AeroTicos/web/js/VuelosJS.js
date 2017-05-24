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
    
    $("#BuscarVuelo").click(function () {
        buscarMarca();
    });
    


});



//******************************************************************************
//Se ejecuta cuando la página esta completamente cargada
//******************************************************************************

$(document).ready(function () {
    consultarVuelos();
    consultarAviones();
    consultarRutas();
});

function calcularTamaño() {
    return Math.ceil(info.length / 10);
}
;

function consultarVuelos() {
    mostrarModal("myModalM", "Espere por favor..", "Consultando la información del registro de vuelos en la base de datos");
    

    $.ajax({
        url: 'VuelosServlet',
        data: {
            accion: "consultarVuelos"
        },
        error: function () { //si existe un error en la respuesta del ajax
           cambiarMensajeModal("myModalM", "Resultado acción", "Se presento un error, contactar al administador");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            dibujarTabla(data);
             ocultarModal("myModalM");
        },
        type: 'POST',
        dataType: "json"
    });
}

function consultarAviones() {
    mostrarModal("myModalM", "Espere por favor..", "Consultando la información del registro de vuelos en la base de datos");
    

    $.ajax({
        url: 'VuelosServlet',
        data: {
            accion: "consultarAviones"
        },
        error: function () { //si existe un error en la respuesta del ajax
           cambiarMensajeModal("myModalM", "Resultado acción", "Se presento un error, contactar al administador");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            dibujarSelectA(data);
            ocultarModal("myModalM");
        },
        type: 'POST',
        dataType: "json"
    });
}

function dibujarSelectA(dataJson){
     for (var i = 0; i < dataJson.length; i++) {
          var  row = $ ("<option value="+dataJson[i].idAvion+">"+"Modelo: "+ dataJson[i].modelo +" ,"+" Cantidad de Pasajeros: "+dataJson[i].cantidadPasajeros + "</option>");
          $("#idAvion").append(row);
    }
    
}

function consultarRutas() {
    mostrarModal("myModalM", "Espere por favor..", "Consultando la información del registro de vuelos en la base de datos");
    

    $.ajax({
        url: 'VuelosServlet',
        data: {
            accion: "consultarRutas"
        },
        error: function () { //si existe un error en la respuesta del ajax
           cambiarMensajeModal("myModalM", "Resultado acción", "Se presento un error, contactar al administador");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            dibujarSelectR(data);
            ocultarModal("myModalM");
        },
        type: 'POST',
        dataType: "json"
    });
}

function dibujarSelectR(dataJson){
     for (var i = 0; i < dataJson.length; i++) {
         var  row = $ ("<option value="+dataJson[i].idRuta+">"+"Lugar de Salida: "+ dataJson[i].lugarSalida +" ,"+" Lugar de Destino: "+dataJson[i].lugarDestino + "</option>");
          $("#idRuta").append(row);
    }
    
}

function dibujarTabla(dataJson) {
    //limpia la información que tiene la tabla
    $("#tablaVuelos").html("");

    //muestra el enzabezado de la tabla
    var head = $("<thead />");
    var row = $("<tr />");
    head.append(row);
    $("#tablaVuelos").append(head);
    row.append($("<th><b>Identificador</b></th>"));
    row.append($("<th><b>Id de Avion</b></th>"));
    row.append($("<th><b>Id de Ruta</b></th>"));
    row.append($("<th><b>ACCIÓN</th>"));
    //carga la tabla con el json devuelto
    for (var i = 0; i < dataJson.length; i++) {
        dibujarFila(dataJson[i]);
    }

}

function dibujarFila(rowData) {
    //Cuando dibuja la tabla en cada boton se le agrega la funcionalidad de cargar o eliminar la informacion
    //de una persona

    //var row = $(page);
    var row = $("<tr />");
    $("#tablaVuelos").append(row);
    row.append($("<td>" + rowData.idVuelo + "</td>"));
    row.append($("<td>" + rowData.pkfkAvion + "</td>"));
    row.append($("<td>" + rowData.pkfkRuta + "</td>"));
    row.append($('<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="consultarVuelosByID(' + rowData.idVuelo + ');">' +
            '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>' +
            '</button>' +
            '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="eliminarVuelo(' + rowData.idVuelo + ');">' +
            '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +
            '</button></td>'));
}

function consultarVuelosByID(idVuelo) {
    mostrarModal("myModalM", "Espere por favor..", "Consultando el vuelo seleccionado");
   

    $.ajax({
        url: 'VuelosServlet',
        data: {
            accion: "consultarVuelosByID",
            idVuelo: idVuelo
        },
        error: function () { //si existe un error en la respuesta del ajax
          cambiarMensajeModal("myModalM", "Resultado acción", "Se presento un error, contactar al administador");
            
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
              ocultarModal("myModalM");


            //************************************************************************
            //carga información de la persona en el formulario
            //************************************************************************
            //se indicar que la cédula es solo readOnly
            $("#idVuelo").attr('readonly', 'readonly');

            //se modificar el hidden que indicar el tipo de accion que se esta realizando
            $("#vuelosAction").val("modificarVuelo");

            //se carga la información en el formulario
            $("#idVuelo").val(data.idVuelo);
            $("#idAvion").val(data.pkfkAvion);
            $("#idRuta").val(data.pkfkRuta);



        },
        type: 'POST',
        dataType: "json"
    });
}

function eliminarVuelo(idVuelo) {
    mostrarModal("myModalM", "Espere por favor..", "Se esta eliminando el vuelo seleccionado");
    $.ajax({
        url: 'VuelosServlet',
        data: {
            accion: "eliminarVuelo",
            idRuta: idVuelo
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
                
                setTimeout(consultarVuelos, 3000);// hace una pausa y consulta la información de la base de datos

            }
        },
        type: 'POST',
        dataType: "text"
    });
}

function buscarMarca() {
    var aux = document.getElementById("buscarId").value;
    mostrarModal("myModalM", "Espere por favor..", "Consultando la información de Rutas en la base de datos");
    //Se envia la información por ajax
    $.ajax({
        url: 'VuelosServlet',
        data: {
            accion: "buscarId",
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

function dibujarTablaFormulario(dataJson) {
    //limpia la información que tiene la tabla
    //$("#tablaAvionesBusqueda").remove(); 
    
    //muestra el enzabezado de la tabla
    var head = $("<thead />");
    var row = $("<tr />");
    head.append(row);
    $("#tablaVuelosBusqueda").append(head); 
    row.append($("<th><b>Identificador</b></th>"));
    row.append($("<th><b>Id de Avion</b></th>"));
    row.append($("<th><b>Id de Ruta</b></th>"));
    
    //carga la tabla con el json devuelto
    for (var i = 0; i < dataJson.length; i++) {
        dibujarFilaFormulario(dataJson[i]);
    }
}

function dibujarFilaFormulario(rowData) {
    //Cuando dibuja la tabla en cada boton se le agrega la funcionalidad de cargar o eliminar la informacion
    //de una avion
    
    var row = $("<tr />");
    $("#tablaVuelosBusqueda").append(row); 
    row.append($("<td>" + rowData.idVuelo + "</td>"));
    row.append($("<td>" + rowData.pkfkAvion + "</td>"));
    row.append($("<td>" + rowData.pkfkRuta + "</td>"));
}

//******************************************************************************
//******************************************************************************
//El metodo enviar funciona tanto para el insertar como para el modificar
//******************************************************************************
function enviar() {
    if (validar()) {
        //Se envia la información por ajax
        $.ajax({
            url: 'VuelosServlet',
            data: {
                accion: $("#vuelosAction").val(),
                idVuelo: $("#idVuelo").val(),
                idAvion: $("#idAvion").val(),
                idRuta: $("#idRuta").val()

            },
            error: function () { //si existe un error en la respuesta del ajax
                mostrarMensaje("alert alert-danger", "Se genero un error, contacte al administrador (Error del ajax)", "Error!");
            },
            success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
                var respuestaTxt = data.substring(2);
                var tipoRespuesta = data.substring(0, 2);
                if (tipoRespuesta === "C~") {
                    mostrarMensaje("alert alert-success", respuestaTxt, "Correcto!");
                    consultarVuelos();
                   

                } else {
                    if (tipoRespuesta === "P~") {
                        mostrarMensaje("alert alert-danger", "Ya existe una ruta con este identificador", "Error!");
                        $("#groupIdVuelo").addClass("has-error");
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
       mostrarMensaje("alert alert-danger", "Debe digitar los campos del formulario", "Error!");
    }
}

function validar() {
    var validacion = true;

    //Elimina estilo de error en los css
    //notese que es sobre el grupo que contienen el input
    $("#groupIdVuelo").removeClass("has-error");
    $("#groupIdAvion").removeClass("has-error");
    $("#groupIdRuta").removeClass("has-error");


//    //valida cada uno de los campos del formulario
//    //Nota: Solo si fueron digitados
    if ($("#idVuelo").val() === "") {
        validacion = false;
    }
    if ($("#idAvion").val() === "") {
        validacion = false;
    }
    if ($("#idRuta").val() === "") {
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
    $('#tablaVuelosBusqueda').empty();
}


