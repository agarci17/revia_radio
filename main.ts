function mostramatriu (num: number) {
    strip.setBrightness(30)
    if (num == 1) {
        for (let índex = 0; índex <= organica.length - 1; índex++) {
            strip.setPixelColor(organica[índex], neopixel.colors(NeoPixelColors.Purple))
        }
    } else if (num == 2) {
        for (let índex2 = 0; índex2 <= paper.length - 1; índex2++) {
            strip.setPixelColor(paper[índex2], neopixel.colors(NeoPixelColors.Blue))
        }
    } else if (num == 3) {
        for (let índex3 = 0; índex3 <= plastic.length - 1; índex3++) {
            strip.setPixelColor(plastic[índex3], neopixel.colors(NeoPixelColors.Yellow))
        }
    } else if (num == 4) {
        for (let índex5 = 0; índex5 <= vidre.length - 1; índex5++) {
            strip.setPixelColor(vidre[índex5], neopixel.colors(NeoPixelColors.Green))
        }
    } else if (num == 5) {
        for (let índex4 = 0; índex4 <= rebuig.length - 1; índex4++) {
            strip.setPixelColor(rebuig[índex4], neopixel.colors(NeoPixelColors.White))
        }
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
    strip.show()
}
input.onButtonPressed(Button.A, function () {
    PlanetX_AILens.learnObject(PlanetX_AILens.learnID.ID4)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(196, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    PlanetX_AILens.ClearlearnObject()
})
input.onButtonPressed(Button.B, function () {
    PlanetX_AILens.learnObject(PlanetX_AILens.learnID.ID2)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
function defineixmatriu () {
    plastic = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    11,
    15,
    16,
    20,
    28,
    29,
    30,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    55,
    56,
    71,
    82,
    83,
    84,
    85,
    86,
    87,
    91,
    94,
    96,
    100,
    107,
    110,
    114,
    115,
    116,
    117,
    118,
    119,
    129,
    130,
    134,
    136,
    140,
    143,
    144,
    148,
    151,
    153,
    154,
    158,
    175,
    176,
    177,
    178,
    179,
    180,
    181,
    182,
    183,
    191,
    200,
    201,
    202,
    203,
    204,
    205,
    206,
    207,
    217,
    218,
    219,
    220,
    221,
    222,
    224,
    231,
    232,
    239,
    240,
    247
    ]
    paper = [
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    20,
    27,
    31,
    32,
    36,
    44,
    45,
    46,
    56,
    57,
    58,
    59,
    60,
    61,
    65,
    68,
    75,
    79,
    81,
    84,
    88,
    89,
    90,
    91,
    92,
    93,
    104,
    105,
    106,
    107,
    108,
    109,
    110,
    111,
    112,
    116,
    123,
    127,
    128,
    132,
    140,
    141,
    142,
    152,
    153,
    154,
    155,
    156,
    157,
    158,
    159,
    160,
    163,
    167,
    168,
    172,
    175,
    176,
    179,
    183,
    184,
    191,
    200,
    201,
    202,
    203,
    204,
    205,
    206,
    207,
    208,
    212,
    219,
    223,
    224,
    228,
    232,
    233,
    234,
    236,
    237,
    238
    ]
    organica = [
    1,
    2,
    3,
    4,
    5,
    6,
    8,
    15,
    17,
    18,
    19,
    20,
    21,
    22,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    43,
    47,
    48,
    51,
    53,
    56,
    57,
    61,
    62,
    73,
    74,
    75,
    76,
    77,
    78,
    80,
    87,
    88,
    91,
    95,
    97,
    100,
    101,
    102,
    113,
    114,
    115,
    116,
    117,
    118,
    119,
    123,
    127,
    129,
    130,
    131,
    132,
    133,
    134,
    135,
    144,
    145,
    146,
    147,
    148,
    149,
    150,
    151,
    156,
    157,
    164,
    165,
    168,
    169,
    170,
    171,
    172,
    173,
    174,
    175,
    184,
    185,
    186,
    187,
    188,
    189,
    190,
    191,
    201,
    202,
    203,
    204,
    205,
    206,
    208,
    215,
    216,
    223,
    232,
    233,
    234,
    235,
    236,
    237,
    238,
    240,
    244,
    248,
    249,
    250,
    251,
    252,
    253,
    254
    ]
    vidre = [
    44,
    45,
    46,
    47,
    52,
    53,
    54,
    56,
    68,
    69,
    70,
    76,
    77,
    78,
    79,
    88,
    89,
    90,
    91,
    92,
    93,
    94,
    95,
    104,
    105,
    106,
    107,
    108,
    109,
    110,
    111,
    112,
    119,
    120,
    127,
    129,
    134,
    138,
    139,
    140,
    141,
    152,
    153,
    154,
    155,
    156,
    157,
    158,
    159,
    160,
    163,
    172,
    175,
    177,
    178,
    180,
    181,
    182,
    183,
    192,
    193,
    194,
    195,
    196,
    197,
    198,
    199,
    200,
    204,
    207,
    208,
    211,
    215
    ]
    rebuig = [
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    27,
    31,
    32,
    36,
    43,
    47,
    49,
    50,
    51,
    53,
    54,
    55,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    76,
    79,
    80,
    83,
    87,
    88,
    95,
    104,
    105,
    106,
    107,
    108,
    109,
    110,
    111,
    112,
    115,
    119,
    120,
    124,
    127,
    129,
    130,
    132,
    133,
    134,
    144,
    145,
    146,
    147,
    148,
    149,
    150,
    152,
    167,
    168,
    176,
    177,
    178,
    179,
    180,
    181,
    182,
    192,
    193,
    194,
    195,
    196,
    197,
    198,
    199,
    209,
    210,
    211,
    212,
    213,
    214,
    216,
    223,
    224,
    231,
    232,
    235,
    239,
    241,
    244,
    245,
    246
    ]
}
function obre_rampa () {
    microshield.Servo(microshield.Servos.S7, 30)
    basic.pause(1000)
    microshield.Servo(microshield.Servos.S7, 150)
    basic.pause(1000)
    microshield.Servo(microshield.Servos.S7, 30)
}
let rebuig: number[] = []
let vidre: number[] = []
let plastic: number[] = []
let paper: number[] = []
let organica: number[] = []
let strip: neopixel.Strip = null
radio.setGroup(178)
PlanetX_AILens.initModule()
strip = neopixel.create(DigitalPin.P12, 256, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
defineixmatriu()
makerbit.connectSerialMp3(DigitalPin.P8, DigitalPin.P7)
PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Things)
let fiabilitat = 85
basic.forever(function () {
    PlanetX_AILens.cameraImage()
    if (PlanetX_AILens.objectCheck(PlanetX_AILens.learnID.ID5) && PlanetX_AILens.objectConfidence(PlanetX_AILens.learnID.ID5) > fiabilitat) {
        mostramatriu(5)
        makerbit.playMp3Track(5, 1)
        radio.sendNumber(5)
        basic.pause(1000)
        obre_rampa()
        makerbit.playMp3Track(randint(7, 10), 2)
        basic.pause(4000)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
    if (PlanetX_AILens.objectCheck(PlanetX_AILens.learnID.ID4) && PlanetX_AILens.objectConfidence(PlanetX_AILens.learnID.ID4) > fiabilitat) {
        mostramatriu(4)
        makerbit.playMp3Track(4, 1)
        radio.sendNumber(4)
        basic.pause(1000)
        obre_rampa()
        makerbit.playMp3Track(randint(7, 10), 2)
        basic.pause(4000)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
    if (PlanetX_AILens.objectCheck(PlanetX_AILens.learnID.ID3) && PlanetX_AILens.objectConfidence(PlanetX_AILens.learnID.ID3) > fiabilitat) {
        mostramatriu(3)
        makerbit.playMp3Track(3, 1)
        radio.sendNumber(3)
        basic.pause(1000)
        obre_rampa()
        makerbit.playMp3Track(randint(7, 10), 2)
        basic.pause(4000)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
    if (PlanetX_AILens.objectCheck(PlanetX_AILens.learnID.ID2) && PlanetX_AILens.objectConfidence(PlanetX_AILens.learnID.ID2) > fiabilitat) {
        mostramatriu(2)
        makerbit.playMp3Track(2, 1)
        radio.sendNumber(2)
        basic.pause(1000)
        obre_rampa()
        makerbit.playMp3Track(randint(7, 10), 2)
        basic.pause(4000)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
    if (PlanetX_AILens.objectCheck(PlanetX_AILens.learnID.ID1) && PlanetX_AILens.objectConfidence(PlanetX_AILens.learnID.ID1) > fiabilitat) {
        mostramatriu(1)
        makerbit.playMp3Track(1, 1)
        radio.sendNumber(1)
        basic.pause(1000)
        obre_rampa()
        makerbit.playMp3Track(randint(7, 10), 2)
        basic.pause(4000)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
    basic.pause(1000)
    radio.sendNumber(5)
})
