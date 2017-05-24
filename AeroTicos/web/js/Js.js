/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*Esconde banner*/
$(document).ready(function () {
    $("#hide").click(function () {
        $("#myCarousel").hide();
    });
    $("#show").click(function () {
        $("#myCarousel").show();
    });
});
/*Mostrar mensaje*/
$(function () {
    $("#dialog").dialog();
});


$('.clockpicker').clockpicker({
    placement: 'top',
    align: 'left',
    donetext: 'Done'
});

$(function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(51.508742, -0.120850),
        zoom: 5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
});

$('#divMiCalendario').datetimepicker({
    format: 'YYYY-MM-DD HH:mm'
});
$('#divMiCalendario').data("DateTimePicker").show();



function cambiarSeleccion(id) {
    var asiento = document.getElementById(id);
    var clase = document.getElementById(id).getAttribute("class");
    if (clase !== 'asientoSeleccionado')
        asiento.setAttribute('class', 'asientoSeleccionado');
    else
        asiento.setAttribute('class', '');
}

