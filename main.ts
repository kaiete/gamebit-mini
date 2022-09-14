function whichmon () {
    if (area == 0) {
        currentmon = normalmons._pickRandom()
    } else if (area == 1) {
        currentmon = mosscavemons._pickRandom()
    } else {
        currentmon = oceanmons._pickRandom()
    }
    basic.showString("" + (currentmon))
    if (dex.indexOf(currentmon) == -1) {
        dex.push(currentmon)
    }
    if (dex.length == 9) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        basic.showString("A... Pokemon?")
        basic.showString("Rayquaza?")
        basic.showString("Shake to throw a Poke Ball!")
        rayquazaencounter = true
    }
}
input.onPinPressed(TouchPin.P0, function () {
    character.delete()
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
    basic.pause(1000)
    basic.showString("Moss Cave")
    area = 1
    character = game.createSprite(2, 2)
})
function encounterwild () {
    character.delete()
    led.setBrightness(5)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    while (led.brightness() != 255) {
        led.setBrightness(50 + led.brightness())
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    encountermon = randint(1, 3)
    whichmon()
    _catch = randint(1, 8)
    if (5 <= _catch) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            # # # . .
            # # # . .
            # # # . .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . # # #
            . . # # #
            . . # # #
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showIcon(IconNames.Happy)
        game.addScore(1)
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            # # # . .
            # # # . .
            # # # . .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
    basic.pause(1000)
    character = game.createSprite(2, 2)
}
input.onButtonPressed(Button.A, function () {
    character.move(1)
    if (5 == randint(0, 6)) {
        encounterwild()
    }
})
input.onPinPressed(TouchPin.P2, function () {
    character.delete()
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
    basic.pause(1000)
    basic.showString("Route 1")
    area = 0
    character = game.createSprite(2, 2)
})
input.onButtonPressed(Button.AB, function () {
    character.delete()
    basic.showString("Caught:")
    basic.showNumber(game.score())
    basic.showString("Pokedex: " + dex.length)
    if (dex.length == 10) {
        basic.showIcon(IconNames.Heart)
        basic.showString("Full Dex!")
    }
    game.setScore(0)
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    character.turn(Direction.Right, 90)
})
input.onPinPressed(TouchPin.P1, function () {
    character.delete()
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
    basic.pause(1000)
    basic.showString("Ocean")
    area = 2
    character = game.createSprite(2, 2)
})
input.onGesture(Gesture.Shake, function () {
    if (rayquazaencounter) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        if (1 == randint(1, 10)) {
            rayquazaencounter = false
            basic.showIcon(IconNames.Surprised)
            basic.showString("You caught Rayquaza!")
            dex.push("Rayquaza")
            character.delete()
            basic.showString("Caught:")
            basic.showNumber(game.score())
            basic.showString("Pokedex: " + dex.length)
            if (dex.length == 10) {
                basic.showIcon(IconNames.Heart)
                basic.showString("Full Dex!")
            }
            game.setScore(0)
            control.reset()
        } else {
            basic.showIcon(IconNames.No)
        }
    }
})
let _catch = 0
let encountermon = 0
let currentmon = ""
let character: game.LedSprite = null
let area = 0
let oceanmons: string[] = []
let rayquazaencounter = false
let mosscavemons: string[] = []
let dex: string[] = []
let normalmons: string[] = []
normalmons = ["Diglett", "Pikachu", "Ratatta"]
dex = []
mosscavemons = ["Bellsprout", "Blipbug", "Caterpie"]
rayquazaencounter = false
oceanmons = ["Magikarp", "Finneon", "Wishiwashi"]
area = 0
basic.showString("GameBit")
for (let index = 0; index < 1; index++) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
}
character = game.createSprite(2, 2)
basic.forever(function () {
    character.ifOnEdgeBounce()
})
basic.forever(function () {
    while (rayquazaencounter) {
        if (!(character.isDeleted())) {
            character.delete()
        }
    }
})
