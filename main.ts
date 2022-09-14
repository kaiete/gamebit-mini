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
    if (1 == encountermon) {
        basic.showString("Diglett")
    } else if (2 == encountermon) {
        basic.showString("Pikachu")
    } else {
        basic.showString("Ratatta")
    }
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
input.onButtonPressed(Button.AB, function () {
    character.delete()
    basic.showNumber(game.score())
    game.setScore(0)
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    character.turn(Direction.Right, 90)
})
let _catch = 0
let encountermon = 0
let character: game.LedSprite = null
basic.showString("GameBit")
for (let index = 0; index < 3; index++) {
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
