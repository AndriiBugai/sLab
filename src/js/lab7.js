$(function() {

    var a;
    var b;

    var iterativeExtendedEuqlid = function (a0, a1, b0, b1, alpha, beta, d) {
        // swap a <-> b , so that a >= b
        // if(alpha < beta) {
        //     var temp = alpha;
        //     alpha = beta;
        //     beta = temp;
        // }

        var q = Math.floor(alpha/beta);
        var r = alpha % beta;

        alpha = beta;
        beta = r;
        var t = a0;
        a0 = a1;
        a1 = t - a1*q;
        t = b0;
        b0 = b1;
        b1 = t - b1*q;
        console.log(a0 + " " + b0);

        if(r == 0) {
            var x = a0;
            var y = b0;
            return '' + d + ' = ' + a + " * " + x + " + " + b + " * " + y;
        } else {

            return iterativeExtendedEuqlid(a0, a1, b0, b1, alpha, beta, d);
        }
    };

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
        a = $('#numberA').val();
        b = $('#numberB').val();

        var a0 = 1;
        var a1 = 0;
        var b0 = 0;
        var b1 = 1;
        var alpha = a;
        var beta = b;
        var d = iterativeEuqlid(a, b);

        var resultNZD = iterativeExtendedEuqlid(a0, a1, b0, b1, alpha, beta, d);
        $('#result').val(resultNZD)
    });

});

