let dobas = 0
input.onGesture(Gesture.Shake, function () {
    dobas = randint(1, 6)
    if (dobas == 1) {
        basic.showNumber(1)
    } else {
        if (dobas == 2) {
            basic.showNumber(2)
        } else {
            if (dobas == 3) {
                basic.showNumber(3)
            } else {
                if (dobas == 4) {
                    basic.showNumber(4)
                } else {
                    if (dobas == 5) {
                        basic.showNumber(5)
                    } else {
                        basic.showNumber(6)
                    }
                }
            }
        }
    }
})
basic.forever(function () {
	
})
