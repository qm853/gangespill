let tiere = 0
let enere = 0
let svar = 0
let produkt = 0
let faktor1 = 0
let faktor2 = 0
input.onButtonPressed(Button.A, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    tiere = 0
    enere = 0
    svar = 0
    produkt = 0
    faktor1 = randint(0, 5)
    faktor2 = randint(0, 5)
    basic.showString("" + faktor1 + "x" + faktor2 + "=")
    produkt = faktor1 * faktor2
})
