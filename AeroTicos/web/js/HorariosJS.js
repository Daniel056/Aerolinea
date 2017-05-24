/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//******************************************************************************
// // Funcion para generar el datetimepicker
// Además de agregar los eventos a las respectivas etiquetas
//******************************************************************************
$(function () {
    //Genera el datapicker
    $('#diaSalida').datetimepicker({
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0
    });
    
     $('#diaLlegada').datetimepicker({
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0
    });

    //agrega los eventos las capas necesarias
    $("#enviar").click(function () {
        enviar();
    });
    
     $("#BuscarHorario").click(function () {
        buscarMarca();
    });
    
});

//******************************************************************************
//Se ejecuta cuando la página esta completamente cargada
//******************************************************************************

$(document).ready(function () {
    consultarHorarios();
});

//******************************************************************************
//******************************************************************************
//metodos para consultas el listado de las personas
//******************************************************************************
//******************************************************************************

function consultarHorarios() {
    mostrarModal("myModalM", "Espere por favor..", "Consultando la información de horarios en la base de datos");
    
    $.ajax({
        url: 'HorariosServlet',
        data: {
            accion: "consultarHorarios"
        },
        error: function () { //si existe un error en la respuesta del ajax
             cambiarMensajeModal("myModalM", "Resultado acción", "Se presento un error, contactar al administador");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            dibujarTabla(data);
            
            // se oculta el modal esta funcion se encuentra en el utils.js
           ocultarModal("myModalM");

        },
        type: 'POST',
        dataType: "json"
    });
}

function dibujarTabla(dataJson) {
    //limpia la información que tiene la tabla
    $("#tablaHorarios").html(""); 
    
    //muestra el enzabezado de la tabla
    var head = $("<thead />");
    var row = $("<tr />");
    head.append(row);
    $("#tablaHorarios").append(head); 
     row.append($("<th><b>ID</b></th>"));
    row.append($("<th><b>DIA SALIDA</b></th>"));
    row.append($("<th><b>DIA LLEGADA</b></th>"));
    row.append($("<th><b>HORA LLEGADA</b></th>"));
    row.append($("<th><b>HORA SALIDA</b></th>"));
    row.append($("<th><b>ACCIÓN</th>"));
    
    //carga la tabla con el json devuelto
    for (var i = 0; i < dataJson.length; i++) {
        dibujarFila(dataJson[i]);
    }
}

function dibujarFila(rowData) {
    //Cuando dibuja la tabla en cada boton se le agrega la funcionalidad de cargar o eliminar la informacion
    //de una persona
    
    var row = $("<tr />");
    $("#tablaHorarios").append(row); 
    row.append($("<td>" + rowData.idHorario + "</td>"));
    row.append($("<td>" + rowData.diaSalida + "</td>"));
    row.append($("<td>" + rowData.diaLlegada + "</td>"));
    row.append($("<td>" + rowData.horaSalida+ "</td>"));
    row.append($("<td>" + rowData.horaLlegada + "</td>"));
    

    row.append($('<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="consultarHorariosByID('+rowData.idHorario+');">'+
                        '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>'+
                    '</button>'+
                    '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="eliminarHorario('+rowData.idHorario+');">'+
                        '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>'+
                    '</button></td>'));
}

function buscarMarca() {
    var aux = document.getElementById("buscarId").value;
    mostrarModal("myModalM", "Espere por favor..", "Consultando la información de Rutas en la base de datos");
    //Se envia la información por ajax
    $.ajax({
        url: 'HorariosServlet',
        data: {
            accion: "buscarFS",
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
    $("#tablaHorariosBusqueda").append(head); 
    row.append($("<th><b>ID</b></th>"));
    row.append($("<th><b>DIA SALIDA</b></th>"));
    row.append($("<th><b>DIA LLEGADA</b></th>"));
    row.append($("<th><b>HORA LLEGADA</b></th>"));
    row.append($("<th><b>HORA SALIDA</b></th>"));
    
    //carga la tabla con el json devuelto
    for (var i = 0; i < dataJson.length; i++) {
        dibujarFilaFormulario(dataJson[i]);
    }
}

function dibujarFilaFormulario(rowData) {
    //Cuando dibuja la tabla en cada boton se le agrega la funcionalidad de cargar o eliminar la informacion
    //de una avion
    
    var row = $("<tr />");
    $("#tablaHorariosBusqueda").append(row); 
    row.append($("<td>" + rowData.idHorario + "</td>"));
    row.append($("<td>" + rowData.diaSalida + "</td>"));
    row.append($("<td>" + rowData.diaLlegada + "</td>"));
    row.append($("<td>" + rowData.horaSalida+ "</td>"));
    row.append($("<td>" + rowData.horaLlegada + "</td>"));
}

//******************************************************************************
//******************************************************************************
//El metodo enviar funciona tanto para el insertar como para el modificar
//******************************************************************************
//******************************************************************************

function enviar() {
    if (validar()) {
        //Se envia la información por ajax
        $.ajax({
            url: 'HorariosServlet',
            data: {
                accion: $("#horariosAction").val(),
                 id: $("#idHorario").val(),
                diaSalida: $("#diaSalida").data('date'),
                diaLlegada: $("#diaLlegada").data('date'),
                horaSalida: $("#horaSalida").val(),
                horaLlegada: $("#horaLlegada").val()
          
            },
            error: function () { //si existe un error en la respuesta del ajax
                mostrarMensaje("alert alert-danger", "Se genero un error, contacte al administrador (Error del ajax)", "Error!");
            },
            success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
                var respuestaTxt = data.substring(2);
                var tipoRespuesta = data.substring(0, 2);
                if (tipoRespuesta === "C~") {
                    mostrarMensaje("alert alert-success", respuestaTxt, "Correcto!");
                    consultarHorarios();
                } else {
                    if (tipoRespuesta === "P~") {
                        mostrarMensaje("alert alert-danger", "Ya existe un horario con este identificador", "Error!");
                        $("#groupIdHorarios").addClass("has-error");
                    }
                    else if (tipoRespuesta === "E~") {
                        mostrarMensaje("alert alert-danger", respuestaTxt, "Error!");
                        alert(respuestaTxt);
                    } else {
                        mostrarMensaje("alert alert-danger", "Se genero un error, contacte al administrador", "Error!");
                        alert("Error, de administrador");
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
    $("#groupDiaSalida").removeClass("has-error");
    $("#groupDiaLlegada").removeClass("has-error");
    $("#groupHoraSalida").removeClass("has-error");
    $("#groupHoraLlegada").removeClass("has-error");
    

    //valida cada uno de los campos del formulario
    //Nota: Solo si fueron digitados
    
    
    if ($("#diaSalida").data('date') === "") {
        $("#groupDiaSalida").addClass("has-error");
        validacion = false;
    }
    
    if ($("#diaLlegada").data('date') === "") {
        $("#groupDiaLlegada").addClass("has-error");
        validacion = false;
    }
    
    if ($("#horaSalida").val() === "") {
        $("#groupHoraSalida").addClass("has-error");
        validacion = false;
    }
    
    if ($("#horaLlegada").val() === "") {
        $("#groupHoraLlegada").addClass("has-error");
        validacion = false;
    }

    return validacion;
}

//******************************************************************************
//******************************************************************************
//metodos para eliminar personas
//******************************************************************************
//******************************************************************************

function eliminarHorario(idHorario) {
    mostrarModal("myModalM", "Espere por favor..", "Se esta eliminando el horario seleccionado");
    
    $.ajax({
        url: 'HorariosServlet',
        data: {
            accion: "eliminarHorarios",
            idHorario: idHorario
        },
        error: function () { //si existe un error en la respuesta del ajax
            cambiarMensajeModal("myModalM","Resultado acción","Se presento un error, contactar al administador");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            // se cambia el mensaje del modal por la respuesta del ajax
            var respuestaTxt = data.substring(2);
            var tipoRespuesta = data.substring(0, 2);
            if (tipoRespuesta === "E~") {
                cambiarMensajeModal("myModalM","Resultado acción",respuestaTxt);
            }else{
                
                 setTimeout(consultarHorarios, 3000);// hace una pausa y consulta la información de la base de datos
            }
        },
        type: 'POST',
        dataType: "text"
    });
}

//******************************************************************************
//******************************************************************************
//metodos para eliminar personas
//******************************************************************************
//******************************************************************************

function consultarHorariosByID(idHorario) {
        mostrarModal("myModalM", "Espere por favor..", "Consultando el Horario seleccionado");
    
     
    $.ajax({
        url: 'HorariosServlet',
        data: {
            accion: "consultarHorariosByID",
            idHorario: idHorario
        },
        error: function () { //si existe un error en la respuesta del ajax
            cambiarMensajeModal("myModalM", "Resultado acción", "Se presento un error, contactar al administador");
           
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            // se oculta el mensaje de espera
            ocultarModal("myModalM");
            //************************************************************************
            //carga información de los aviones en los campos
            //************************************************************************
            //se indicar que la cédula es solo readOnly
            $("#idHorario").attr('readonly', 'readonly');

            //se modificar el hidden que indicar el tipo de accion que se esta realizando
            $("#horariosAction").val("modificarHorarios");

            //se carga la información en el formulario
            $("#idHorario").val(data.idHorario);
              //carga de fecha de dia de salida
            var fecha1 = new Date(data.diaSalida);
            var fechatxt = fecha1.getDate() +"/" +fecha1.getMonth()+1 + "/" + fecha1.getFullYear();
            $("#diaSalida").data({date: fechatxt});
            $("#diaSalidaTxt").val(fechatxt);
            
             //carga de fecha de dia de llegada
            var fecha2 = new Date(data.diaLlegada);
            var fechatxt2 = fecha2.getDate() +"/" +fecha2.getMonth()+1 + "/" + fecha2.getFullYear();
            $("#diaLlegada").data({date: fechatxt2});
            $("#diaLlegadaTxt").val(fechatxt2);
            
            $("#horaSalida").val(data.horaSalida);
            $("#horaLlegada").val(data.horaLlegada);
  
        },
        type: 'POST',
        dataType: "json"
    });
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
    $('#tablaHorariosBusqueda').empty();
}




