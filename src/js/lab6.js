$(function() {

    var iterativeEuqlid = function (a, b) {
        // swap a <-> b , so that a >= b
        if(a < b) {
            var temp = a;
            a = b;
            b = temp;
        }

        // var quotient = Math.floor(a/b);
        var r = a % b;
        if(r == 0) {
            return b;
        } else {
            return iterativeEuqlid(b, r);
        }
    };

    $('#calculateLab6').click(function() {
        var a = $('#numberA').val();
        var b = $('#numberB').val();

        var resultNZD = iterativeEuqlid(a, b);
        $('#result').val('Найбільший загальний дільник = ' + resultNZD)
    });

});

