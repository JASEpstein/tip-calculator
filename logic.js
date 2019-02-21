/*
PSEUDOCODE:

1. User inputs the bill amount
2. User clicks quality level of service.
3. Based on which level, the tip and bill amounts are displayed at the bottom

Key Features:
- If cash is typically used, the tip amounts are rounded to whole dollars.
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

//TAXI - Click event for Quality Levels
$('.taxiQuality').on('click', function () {
    var percentage = $(this).attr('value');
    var inputAmt = $('#inputAmt').val();
    //Rounding Condition: If Bad Ride, round down; if Good Ride, round up!
    if (percentage === "0.10") {
        tipAmt = Math.round(inputAmt * percentage);
    } else if (percentage === "0.15" || percentage === "0.20") {
        tipAmt = Math.ceil(inputAmt * percentage);
    }
    $('#tipAmt').text('$' + tipAmt.toFixed(2));
});

//FOOD DELIVERY - Click Event
$('.deliverySpeed').on('click', function () {
    var percentage = $(this).attr('value');
    var inputAmt = $('#inputAmt').val();
    var tipAmtRnd = 0;
    //Rounding Condition: If using Cash, round 
    if ($('#defaultCheck1').is(':checked')) {
        $('#totalBillHeader').text('Total Bill: ');
        if (percentage === "0.05") {
            tipAmtRnd = Math.round(inputAmt * percentage);
        } else if (percentage === "0.10" || percentage === "0.15") {
            tipAmtRnd = Math.ceil(inputAmt * percentage);
        }
        $('#tipAmt').text('$' + tipAmtRnd.toFixed(2));
        totalAmt = (Math.round((inputAmt) * 100) / 100) + (Math.round((tipAmt) * 100) / 100);
        $('#totalAmt').text('$' + totalAmt.toFixed(2));
    } else {
        //No Rounding if not using cash
        tipAmt = Math.round((inputAmt * percentage) * 100) / 100;
        totalAmt = (Math.round((inputAmt) * 100) / 100) + (Math.round((tipAmt) * 100) / 100);
        $('#tipAmt').text('$' + tipAmt.toFixed(2));
        $('#totalAmt').text('$' + totalAmt.toFixed(2));
    }
});