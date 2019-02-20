/*
PSEUDOCODE:

1. User inputs the bill amount
2. User clicks quality level of service.
3. Based on which level, the tip and bill amounts are displayed at the bottom

*/

var tipAmt = 0;
var totalAmt = 0;
var tipCount = 0;

//Onload Clear
$(document).ready(function () {
    $('#inputAmt').val('');
});

//Reset Button
$('#resetBtn').on('click', function () {
    $('#tipAmt').text('$0.00');
    $('#totalAmt').text('$0.00');
    $('#inputAmt').val('');
});

//RESTAURANT - quality selectors
$('.quality').on('click', function () {
    var percentage = $(this).attr('value');
    var inputAmt = $('#inputAmt').val();
    tipAmt = Math.round((inputAmt * percentage) * 100) / 100;
    totalAmt = (Math.round((inputAmt) * 100) / 100) + (Math.round((tipAmt) * 100) / 100);
    $('#tipAmt').text('$' + tipAmt.toFixed(2));
    $('#totalAmt').text('$' + totalAmt.toFixed(2));
});

//BAR - Click event for + - buttons
$('.plusminus').on('click', function () {
    upOrDown = $(this).attr('value');
    if (upOrDown === "+") {
        //Increments input amount
        up = $('#inputAmt').val();
        ++up;
        $('#inputAmt').val(up);
        //Increments tip amount
        tipCount++;
        tipAmt = ("$" + tipCount + ".00");
        $('#tipAmt').text(tipAmt);
    } else if (upOrDown === "-") {
        down = $('#inputAmt').val();
        if (down <= 0) {
            //Prevents negative values
            return;
        } else {
            //Decrements input amount
            --down;
            $('#inputAmt').val(down);
            //Decrements tip amount
            tipCount--;
            tipAmt = ("$" + tipCount + ".00");
            $('#tipAmt').text(tipAmt);
        }
    }
});