input.onGesture(Gesture.Shake, function () {
    A = randint(1, 6)
    basic.showNumber(A)
    radio.sendNumber(10)
})
let A = 0
radio.setGroup(80)
