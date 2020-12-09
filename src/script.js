$(function () {
    let xturn = true;
    $(".field").on("click", function () {
        let takenCheck = $(this).attr('isTaken');
        if (takenCheck !== "Taken") {
            if (xturn === true) {
                $(this).attr('class', 'field bgX');
                $(this).attr('isTaken', 'Taken');
                xturn = false;
            } else {
                $(this).attr('class', 'field bgO');
                $(this).attr('isTaken', 'Taken');

                xturn = true;
            }
        }

        checkWin();
    });
    $(".clearBtn").on("click", clear);

});

function checkWin() {
    if ($("#one").hasClass('bgO') && $("#two").hasClass('bgO') && $("#three").hasClass('bgO') || $("#four").hasClass('bgO') && $("#five").hasClass('bgO') && $("#six").hasClass('bgO') || $("#seven").hasClass('bgO') && $("#eight").hasClass('bgO') && $("#nine").hasClass('bgO') || $("#one").hasClass('bgO') && $("#four").hasClass('bgO') && $("#seven").hasClass('bgO') || $("#two").hasClass('bgO') && $("#five").hasClass('bgO') && $("#eight").hasClass('bgO') || $("#three").hasClass('bgO') && $("#six").hasClass('bgO') && $("#nine").hasClass('bgO') || $("#one").hasClass('bgO') && $("#five").hasClass('bgO') && $("#nine").hasClass('bgO') || $("#three").hasClass('bgO') && $("#five").hasClass('bgO') && $("#seven").hasClass('bgO')) {
        alert('O wins');
    }

    if ($("#one").hasClass('bgX') && $("#two").hasClass('bgX') && $("#three").hasClass('bgX') || $("#four").hasClass('bgX') && $("#five").hasClass('bgX') && $("#six").hasClass('bgX') || $("#seven").hasClass('bgX') && $("#eight").hasClass('bgX') && $("#nine").hasClass('bgX') || $("#one").hasClass('bgX') && $("#four").hasClass('bgX') && $("#seven").hasClass('bgX') || $("#two").hasClass('bgX') && $("#five").hasClass('bgX') && $("#eight").hasClass('bgX') || $("#three").hasClass('bgX') && $("#six").hasClass('bgX') && $("#nine").hasClass('bgX') || $("#one").hasClass('bgX') && $("#five").hasClass('bgX') && $("#nine").hasClass('bgX') || $("#three").hasClass('bgX') && $("#five").hasClass('bgX') && $("#seven").hasClass('bgX')) {
        alert('X wins');
    }
}
function clear() {
    $('.field').attr('class', 'field');
    $('.field').removeAttr('isTaken');
}

