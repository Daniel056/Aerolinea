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

 
    
     $("#BuscarRuta").click(function () {
        buscarMarca();
    });



});

//******************************************************************************
//Se ejecuta cuando la página esta completamente cargada
//******************************************************************************

$(document).ready(function () {
    consultarRutas();
    consultarHorarios();
});
function confirmar(idRuta) {
    $("#myModal2").modal();
    document.getElementById("val").value = idRuta;
}
function calcularTamaño() {
    return Math.ceil(info.length / 10);
}
;
//******************************************************************************
//******************************************************************************
//metodos para consultas el listado de las personas
//******************************************************************************
//******************************************************************************

function consultarRutas() {
   mostrarModal("myModalM", "Espere por favor..", "Consultando la información del registro de rutas en la base de datos");
   

    $.ajax({
        url: 'RutasServlet',
        data: {
            accion: "consultarRutas"
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

function consultarHorarios() {
   mostrarModal("myModalM", "Espere por favor..", "Consultando la información del registro de Horarios en la base de datos");
   

    $.ajax({
        url: 'RutasServlet',
        data: {
            accion: "consultarHorarios"
        },
        error: function () { //si existe un error en la respuesta del ajax
            cambiarMensajeModal("myModalM", "Resultado acción", "Se presento un error, contactar al administador");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            dibujarSelect(data);
           // se oculta el modal esta funcion se encuentra en el utils.js
            ocultarModal("myModalM");
        },
        type: 'POST',
        dataType: "json"
    });
}



function dibujarTabla(dataJson) {
    //limpia la información que tiene la tabla
    $("#tablaRutas").html("");

    //muestra el enzabezado de la tabla
    var head = $("<thead />");
    var row = $("<tr />");
    head.append(row);
    $("#tablaRutas").append(head);
    row.append($("<th><b>Identificador</b></th>"));
    row.append($("<th><b>Lugar de salida</b></th>"));
    row.append($("<th><b>Lugar de destino</b></th>"));
    row.append($("<th><b>Duración</b></th>"));
    row.append($("<th><b>Costo</b></th>"));
    row.append($("<th><b>Id Horario</b></th>"));
    row.append($("<th><b>ACCIÓN</th>"));
    //carga la tabla con el json devuelto
    for (var i = 0; i < dataJson.length; i++) {
        dibujarFila(dataJson[i]);
    }

}

function dibujarSelect(dataJson){
     for (var i = 0; i < dataJson.length; i++) {
         var  row = $ ("<option value="+dataJson[i].idHorario+">"+"Dia de Salida: "+ dataJson[i].diaSalida +" Dia de Llegada: "+dataJson[i].diaLlegada + "</option>");
          $("#idHorarioR").append(row);
    }
    
}

function dibujarFila(rowData) {
    //Cuando dibuja la tabla en cada boton se le agrega la funcionalidad de cargar o eliminar la informacion
    //de una persona

    //var row = $(page);
    var row = $("<tr />");
    $("#tablaRutas").append(row);
    row.append($("<td>" + rowData.idRuta + "</td>"));
    row.append($("<td>" + rowData.lugarSalida + "</td>"));
    row.append($("<td>" + rowData.lugarDestino + "</td>"));
    row.append($("<td>" + rowData.duracion + "</td>"));
    row.append($("<td>" + rowData.precio + "</td>"));
    row.append($("<td>" + rowData.pkfkHorario + "</td>"));

    row.append($('<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="consultarRutasByID(' + rowData.idRuta + ');">' +
            '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>' +
            '</button>' +
            '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="eliminarRuta(' + rowData.idRuta + ');">' +
            '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +
            '</button></td>'));
}

function consultarRutasByID(idRuta) {
    mostrarModal("myModalM", "Espere por favor..", "Consultando la ruta seleccionada");
    

    $.ajax({
        url: 'RutasServlet',
        data: {
            accion: "consultarRutasByID",
            idRuta: idRuta
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
            $("#idRuta").attr('readonly', 'readonly');

            //se modificar el hidden que indicar el tipo de accion que se esta realizando
            $("#rutasAction").val("modificarRuta");

            //se carga la información en el formulario
            $("#idRuta").val(data.idRuta);
            $("#lugarSalida").val(data.lugarSalida);
            $("#lugarDestino").val(data.lugarDestino);
            $("#duracion").val(data.duracion);
            $("#precio").val(data.precio);
            $("#idHorarioR").val(data.pkfkHorario);


        },
        type: 'POST',
        dataType: "json"
    });
}

function eliminarRuta(idRuta) {
    mostrarModal("myModalM", "Espere por favor..", "Se esta eliminando a la persona seleccionada");
    
    $.ajax({
        url: 'RutasServlet',
        data: {
            accion: "eliminarRuta",
            idRuta: idRuta
        },
        error: function () { //si existe un error en la respuesta del ajax
            cambiarMensajeModal("myModalM", "Resultado acción", "Se presento un error, contactar al administador");
            
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            // se cambia el mensaje del modal por la respuesta del ajax
            var respuestaTxt = data.substring(2);
            var tipoRespuesta = data.substring(0, 2);
            if (tipoRespuesta === "E~") {
                //cambiarMensajeModal("myModal", "Resultado acción", respuestaTxt);
                alert(respuestaTxt);
            } else {
                
                setTimeout(consultarRutas, 3000);// hace una pausa y consulta la información de la base de datos

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
        url: 'RutasServlet',
        data: {
            accion: "buscarLS",
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
    $("#tablaRutasBusqueda").append(head); 
    row.append($("<th><b>Identificador</b></th>"));
    row.append($("<th><b>Lugar de salida</b></th>"));
    row.append($("<th><b>Lugar de destino</b></th>"));
    row.append($("<th><b>Duración</b></th>"));
    row.append($("<th><b>Costo</b></th>"));
    row.append($("<th><b>Id Horario</b></th>"));
    
    //carga la tabla con el json devuelto
    for (var i = 0; i < dataJson.length; i++) {
        dibujarFilaFormulario(dataJson[i]);
    }
}

function dibujarFilaFormulario(rowData) {
    //Cuando dibuja la tabla en cada boton se le agrega la funcionalidad de cargar o eliminar la informacion
    //de una avion
    
    var row = $("<tr />");
    $("#tablaRutasBusqueda").append(row); 
    row.append($("<td>" + rowData.idRuta + "</td>"));
    row.append($("<td>" + rowData.lugarSalida + "</td>"));
    row.append($("<td>" + rowData.lugarDestino + "</td>"));
    row.append($("<td>" + rowData.duracion + "</td>"));
    row.append($("<td>" + rowData.precio + "</td>"));
    row.append($("<td>" + rowData.pkfkHorario + "</td>"));
}

//******************************************************************************
//******************************************************************************
//El metodo enviar funciona tanto para el insertar como para el modificar
//******************************************************************************
function enviar() {
  
    
    if (validar()) {
        //Se envia la información por ajax
        $.ajax({
            url: 'RutasServlet',
            data: {
                accion: $("#rutasAction").val(),
                idRuta: $("#idRuta").val(),
                lugarSalida: $("#lugarSalida").val(),
                lugarDestino: $("#lugarDestino").val(),
                duracion: $("#duracion").val(),
                precio: $("#precio").val(),
                idHorarioR: $("#idHorarioR").val()
            },
            error: function () { //si existe un error en la respuesta del ajax
                
                mostrarMensaje("alert alert-danger", "Se genero un error, contacte al administrador (Error del ajax)", "Error!");
            },
            success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
                var respuestaTxt = data.substring(2);
                var tipoRespuesta = data.substring(0, 2);
                if (tipoRespuesta === "C~") {
                    mostrarMensaje("alert alert-success", respuestaTxt, "Correcto!");
                    consultarRutas();
                    

                } else {
                    if (tipoRespuesta === "P~") {
                        mostrarMensaje("alert alert-danger", "Ya existe una ruta con este identificador", "Error!");
                        $("#groupIdRuta").addClass("has-error");
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
    $("#groupIdentificador").removeClass("has-error");
    $("#groupLugarS").removeClass("has-error");
    $("#groupLugarD").removeClass("has-error");
    $("#groupDuracion").removeClass("has-error");
    $("#groupPrecio").removeClass("has-error");

//    //valida cada uno de los campos del formulario
//    //Nota: Solo si fueron digitados
    if ($("#idRuta").val() === "") {
        validacion = false;
    }
    if ($("#idRuta").keyup(function () {
        var tal = $(this).val();
        if (isNaN(tal)) {
            validacion = false;
        }
    }))
        ;
    if ($("#lugarSalida").val() === "") {
        validacion = false;
    }
    if ($("#lugarDestino").val() === "") {
        validacion = false;
    }
    if ($("#duracion").val() === "") {
        validacion = false;
    }
    if ($("#precio").data('date') === "") {
        validacion = false;
    }

    return validacion;
}

//******************************************************************************
//******************************************************************************

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

//******************************************************************************
//******************************************************************************


function validaNum(e) {
    var tecla = (document.all) ? e.keyCode : e.which;
    //Tecla de retroceso para borrar, siempre la permite
    if (tecla === 8) {
        return true;
    }
    if (document.getElementById("idRuta").value.length >= 10) {
        return false;
    }
    var numero = /[0-9]/;
    var tecla_final = String.fromCharCode(tecla);
    return numero.test(tecla_final);
}
//******************************************************************************
//******************************************************************************

function limpiarForm() {
    //Resetear el formulario
    $('#tablaRutasBusqueda').empty();
}
