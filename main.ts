let distance = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P14,
    DigitalPin.P13,
    PingUnit.Inches
    )
    basic.showString("Hello!")
})
