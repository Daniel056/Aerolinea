/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var $input = $('.clock').clockpicker({
    default:          'now',
    placement:        'bottom', 
    align:            'left',
    donetext:         'Listo',
    autoclose:        false,
    vibrate:          true,
    fromnow:          0,
    init:             function () { console.log('iniciado') },
    beforeShow:       function () { console.log('antes de mostrarse') },
    afterShow:        function () { console.log('después de mostrarse') },
    beforeHide:       function () { console.log('antes de ocultarse') },
    afterHide:        function () { console.log('después de ocultarse') },
    beforeHourSelect: function () { console.log('antes de seleccionar la hora') },
    afterHourSelect:  function () { console.log('después de seleccionar la hora') },
    beforeDone:       function () { console.log('antes de finalizar') },
    afterDone:        function () { console.log('después de finalizar') }
});

$input.clockpicker('show');
