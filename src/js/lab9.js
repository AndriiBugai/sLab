$(function() {

    $('#calculateEquation').click(function() {
        var a = $('#numberA').val();
        var b = $('#numberB').val();
        var N = $('#numberN').val();


        var U0 = 0;
        var U1 = 1;
        var U2 = N;
        var V0 = 1;
        var V1 = 0;
        var V2 = a;

        var middleEquation = formatEquation(a, 1, N);
        var result = iterativeExtendedEuqlid(U0, U1, U2, V0, V1, V2);
        var middleEquationSolution = formatSolution(result, N);

        var realEquation = formatEquation(a, b, N);
        var realResult = result * b % N;
        var realEquationSolution = formatSolution(realResult, N);

        $('#middleEquation').text(middleEquation);
        $('#middleEquationSolution').text(middleEquationSolution);

        $('#realEquation').text(realEquation);
        $('#realEquationSolution').text(realEquationSolution);

        $('.info').show();
    });

    var formatEquation = function(a, b, N) {
        return a + "x ≡ " + b + " mod " + N;
    };

    var formatSolution = function(answer, N) {
        return  "x ≡ " + answer + " mod " + N;
    };

    var iterativeExtendedEuqlid = function (U0, U1, U2, V0, V1, V2) {

        var q1 = Math.floor(U2/V2);
        var r2 = U2 % V2;

        t0 = U0 - V0 * q1;
        U0 = V0;
        V0 = t0;
        t1 = U1 - V1 * q1;
        U1 = V1;
        V1 = t1;
        t2 = U2 - V2 * q1;
        U2 = V2;
        V2 = t2;

        console.log(U0 + ' ' + V0);

        if(U2 == 1) {

            return U0 + V0;
            //return '' + d + ' = ' + a + " * " + x + " + " + b + " * " + y;
        } else {

            return iterativeExtendedEuqlid(U0, U1, U2, V0, V1, V2);
        }
    };

});

