basic.forever(function () {
    if (10 > input.temperature()) {
        basic.showIcon(IconNames.Square)
        music.setVolume(58)
        music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
    }
})
basic.forever(function () {
    if (10 < input.temperature()) {
        basic.showIcon(IconNames.Square)
        music.setVolume(58)
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
    }
})
