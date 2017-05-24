var info = [];
var max;
var min;
var inicio;

$(function () {
    //Genera el datapicker
    $('#ano').datetimepicker({
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

    
    
});

//******************************************************************************
//Se ejecuta cuando la página esta completamente cargada
//******************************************************************************


function confirmar(idUsuario){
    $("#myModal1").modal();
    document.getElementById("val").value = idUsuario;
}
function calcularTamaño(){
    return Math.ceil(info.length /10);
};


function consultarUsuarioById(idUsuario) {
    mostrarModal("myModal1", "Espere por favor..", "Consultando la persona seleccionada");
    //Se envia la información por ajax
    $.ajax({
        url: 'UsuarioServlet',
        data: {
            accion: "consultarUsuarioById",
            idPersona: idUsuario
        },
        error: function () { //si existe un error en la respuesta del ajax
            cambiarMensajeModal("myModal1","Resultado acción","Se presento un error, contactar al administador");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            // se oculta el mensaje de espera
            ocultarModal("myModal1");
            limpiarForm();
            //se muestra el formulario
            cambiarMensajeModal("myModal1","Resultado acción","Ss agruego Usuario exitosamente");
            
            
        },
        type: 'POST',
        dataType: "json"
    });
}



//******************************************************************************
//******************************************************************************
//El metodo enviar funciona tanto para el insertar como para el modificar
//******************************************************************************
function enviar() {
    if (validar()) {
        //Se envia la información por ajax
        $.ajax({
            url: 'UsuarioServlet',
            data: {
                accion: $("#usuarioAction").val(),
                id: $("#idUsuario").val(),
                nombre: $("#nom").val(),
                apellidos: $("#ape").val(),
                fechaNacimiento: $("#ano").data('date'),
                correo: $("#email").val(),
                direccion: $("#dir").val(),
                telefono: $("#tel").val(),
                celular: $("#cel").val(),
                password: $("#pass").val()
            },
            error: function () { //si existe un error en la respuesta del ajax
                mostrarMensaje("alert alert-danger", "Se genero un error, contacte al administrador (Error del ajax)", "Error!");
            },
            success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
                var respuestaTxt = data.substring(2);
                var tipoRespuesta = data.substring(0, 2);
                if (tipoRespuesta === "C~") {
                    mostrarMensaje("alert alert-success", respuestaTxt, "Correcto!");
                   //$("#myModalFormulario").modal("hide");
                   // consultarPersonas();
                } else {
                    if(tipoRespuesta === "P~"){
                        mostrarMensaje("alert alert-danger", "Ya existe un usuario con este número de cédula", "Error!");
                        $("#idUsuario").addClass("has-error");
                    } 
                    else if (tipoRespuesta === "E~") {
                        mostrarMensaje("alert alert-danger", respuestaTxt, "Error!");
                    } 
                                      
                    else {
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
    
    $("#groupIdUsuario").removeClass("has-error");
    $("#groupNombre").removeClass("has-error");
    $("#groupApe").removeClass("has-error");
    $("#groupAno").removeClass("has-error");
    $("#groupCorreo").removeClass("has-error");
    $("#groupDir").removeClass("has-error");
    $("#groupTel").removeClass("has-error");
    $("#groupCel").removeClass("has-error");
    $("#groupPass").removeClass("has-error");

    //valida cada uno de los campos del formulario
    //Nota: Solo si fueron digitados
    if ($("#idUsuario").val() === "") {
        $("#groupIdUsuario").addClass("has-error");
        validacion = false;
    }
    if ($("#nom").val() === "") {
        $("#groupNombre").addClass("has-error");
        validacion = false;
    }
    if ($("#ape").val() === "") {
        $("#groupApe").addClass("has-error");
        validacion = false;
    }
    if ($("#ano").data('date') === "") {
        $("#groupAno").addClass("has-error");
        validacion = false;
    }
    if ($("#email").val() === "") {
        $("#groupCorreo").addClass("has-error");
        validacion = false;
    }
     if ($("#dir").val() === "") {
        $("#groupDir").addClass("has-error");
        validacion = false;
    }
     if ($("#tel").val() === "") {
        $("#groupTel").addClass("has-error");
        validacion = false;
    }
     if ($("#cel").val() === "") {
        $("#groupCel").addClass("has-error");
        validacion = false;
    }
     if ($("#pass").val() === "") {
        $("#groupPass").addClass("has-error");
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


function validaNum(e){
    var tecla = (document.all) ? e.keyCode : e.which;
    //Tecla de retroceso para borrar, siempre la permite
    if (tecla===8){
        return true;
    }
        if(document.getElementById("cedula").value.length>=10){
        return false;
    }
    var numero =/[0-9]/;
    var tecla_final = String.fromCharCode(tecla);
    return numero.test(tecla_final);
}
