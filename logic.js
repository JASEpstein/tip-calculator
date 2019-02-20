/*
PSEUDOCODE:

1. User inputs the bill amount
2. User clicks quality level of service.
3. Based on which level, the tip and bill amounts are displayed at the bottom

*/

var tipAmt = 0;
var totalAmt = 0;


$('.quality').on('click', function () {
    var percentage = $(this).attr('value');
    var inputAmt = $('#inputAmt').val();
    tipAmt = Math.round((inputAmt * percentage) * 100) / 100;
    totalAmt = (Math.round((inputAmt) * 100) / 100) + (Math.round((tipAmt) * 100) / 100);
    $('#tipAmt').text('$' + tipAmt.toFixed(2));
    $('#totalAmt').text('$' + totalAmt.toFixed(2));
});

$('#resetBtn').on('click', function () {
    $('#tipAmt').text('$0.00');
    $('#totalAmt').text('$0.00');
    $('#inputAmt').val('');
});

$('.plusminus').on('click', function () {
    upOrDown = $(this).attr('value');
    if (upOrDown === "+") {
        up = $('#inputAmt').val();
        ++up;
        $('#inputAmt').val(up);
    } else if (upOrDown === "-") {
        down = $('#inputAmt').val();
        if (down <= 0) {
            return;
        } else {
            --down;
            $('#inputAmt').val(down);
        }
    }
});