let timerLength = 0
let timerOn = 0
datalogger.setColumnTitles("hours")

basic.forever(function () {
    while (timerOn == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(60000)
        timerLength += 1
    }
})

input.onButtonPressed(Button.A, function () {
    if (timerOn == 0) {
        timerLength = 0
        timerOn = 1
    } else {
        timerOn = 0
        basic.showString("" + Math.round(timerLength / 60) + "Hrs" + timerLength % 60 + "Mins")
    }
})

input.onButtonPressed(Button.B, function () {
    datalogger.log(datalogger.createCV("hours", timerLength / 60))
})


