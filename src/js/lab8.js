$(function() {


    $('#calculateSimpleNumbers').click(function() {
        var N = $('#numberN').val();

        var numbers = [];
        for(i = 1; i < N; i++) {
            numbers.push(i + 1);
        }
        console.log(numbers);


        var sqrtN = Math.sqrt(N);
        console.log(sqrtN);

        for(var i = 2; i < sqrtN; i++) {
            numbers = numbers.filter(function(number) {
                // noinspection JSAnnotator
                if(number == i) {
                    return true;
                }
                if(number % i == 0 ) {
                    return false;
                }
                return true;
            })
        };

        console.log(numbers);
        $('#resultSimpleNumber').text('Прості числа = ' + numbers.join(", "))
    });

});

