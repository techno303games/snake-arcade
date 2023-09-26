controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (speedY == 0) {
        speedX = 0
        speedY = -1
    }
})
function spawnFood () {
    mySprite = sprites.create(img`
        . . . . . . . e . . . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . . . e . . . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . . 2 2 2 2 2 2 2 2 2 2 2 2 . 
        `, SpriteKind.Food)
    isEmptyPosition = false
    while (!(isEmptyPosition)) {
        x = 8 + 16 * randint(0, 9)
        y = 8 + 15 * randint(0, 7)
        isEmptyPosition = true
        for (let value of snake) {
            if (x == value.x && y == value.y) {
                isEmptyPosition = false
            }
        }
    }
    mySprite.setPosition(x, y)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (speedX == 0) {
        speedX = -1
        speedY = 0
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (speedX == 0) {
        speedX = 1
        speedY = 0
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (speedY == 0) {
        speedX = 0
        speedY = 1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    growth = 1
    spawnFood()
    info.changeScoreBy(1)
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    game.over(false)
})
let y = 0
let x = 0
let isEmptyPosition = false
let growth = 0
let speedY = 0
let speedX = 0
let snake: Sprite[] = []
let mySprite: Sprite = null
mySprite = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 1 1 1 6 6 6 6 6 6 6 6 1 1 1 6 
    6 1 f 1 6 6 6 6 6 6 6 6 1 f 1 6 
    6 1 f 1 6 6 6 6 6 6 6 6 1 f 1 6 
    6 1 f 1 6 6 6 6 6 6 6 6 1 f 1 6 
    6 1 1 1 6 6 6 6 6 6 6 6 1 1 1 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 1 1 1 6 6 6 6 6 6 6 6 1 1 1 6 
    6 1 f 1 6 6 6 6 6 6 6 6 1 f 1 6 
    6 1 f 1 1 6 6 6 6 6 6 6 1 f 1 6 
    6 1 f f 1 6 6 6 6 1 1 1 1 f 1 6 
    6 1 1 f 1 1 1 1 1 1 f f f 1 1 6 
    6 6 1 f f f f f f f 1 1 1 1 6 6 
    6 6 1 1 1 1 1 1 1 1 1 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.AutoDestroy, true)
mySprite.setPosition(8, 8)
snake.push(mySprite)
mySprite = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.AutoDestroy, true)
mySprite.setPosition(24, 8)
snake.push(mySprite)
speedX = 1
speedY = 0
growth = 0
spawnFood()
info.setScore(0)
pause(2000)
forever(function () {
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ......................................................................................................22222222222222222.........................................
        ...................................................................................................222222222222222222222............................88888.......
        .................................................................................................222222222222222222222222..........................888888.......
        ..............................................................................................22222222222222222222222222222........................888888.......
        ...........................................................................................222222222222222222222222222222222......................8888888.......
        .........................................................................................22222222222222222.........2222222222.....................8888888.......
        2222.....................................................22222...........7777777777777.2222222222222222.............2222222222....................888888........
        2222................................8888888............22222222.....777777777777777777777777222222222................2222222222..................8888888........
        2222...............................8888888888888......222222222777777777777777777777777777777777777777.................222888888.................8888888........
        2222.............................888888888888888888.22222777777777777777777777777777777777777777777777..................8888888888...............8888888........
        2222............................8888888888888888888277777777777777777777777777777777777777777777777777................88888888888888............8888888.........
        2222...........................88888888888888888888777777777777777777777777777777777777777777777777777..............888888888888888888..........8888888.........
        2222..........................888888888888888888888777777777777777777777777777777777777777777777777777............8888888888888888888888........8888888.........
        2222.........................88888888887777788888887777777777777777777777777777777777777..777777777777..........88888888888888888888888888.....8888888..........
        2222........................888888888777777778888877777777777.227777777777777777777722.....77777777777.........8888888888888.2888888888888888..8888888..........
        2222.......................88888888877777777888888777777.....77778888877777777722222........77777777777.......888888888888.....28888888888888888888888..........
        2222......................8888888887777777778888887222.....77778888888777772222222............7777777777.555588888888888........2288888888888888888888..........
        2222......................88888888777777777788888822....777777888888888888888888888............77777777777555888888888ddddd3333..222888888888888888888..........
        2222......................8888888777777777728888882...77777788888888888888888888888888888.....5577777777777588888888ddddddd....33.2222888888888888888...........
        2222......................88888877777777722888888..777777788888888888888888888888888888888885555577777777778888888888888888.....3..22222288888888888888.........
        2222.....................8888887777777772228888887777777788888888888888888888888888888888888885577777777778888888888888888888...3...222222288888888888888.......
        2222.....................88888877777777222288888877777778888888888888888888888888888888888888885777777888888888888888888888888883....2222222888888888888888.....
        2222.....................888888777777222222888888777777788888888888888888dddddd888888888888888887777888888888888888888888888888888.....22288888888888888888.....
        2222.....................8888887777722222288888877777778888888888888888dddddddddddddd88888888888878888888888888888888888888888888888888.2888888888888888888.....
        2222....................888888777772222277888888777777888888888888888ddddddddddddddddd5588888888888888888888888888888888888888888888888..888888888888888888.....
        2222....................88888877722222277788888877777288888888888888dddddddddddddddddd5777888888888888888888888888888888888888888888888888888888888..888888.....
        2222....................88888877222222777788888877..288888888888888ddddddddd55dddddddd777778888888888888888888888888888888888888888888888888888888.77888887.....
        2222...................8888888722222777778888887..2288888888888888dddddd55555dddddddd77777888888888888888888888888888888888888888888888888888888887778888877....
        2222...................888888772222777777888888.222288888888888888dddd55555dddddd88888888888888888888888888888888888888888888888.8888888888888888877788888777...
        2222...................888888772227777777888888222228888888888888ddd55555888888888888888888888888888888888888888888888288888888882888888888888888777788888777...
        2222..................288888877277777777888888822222888888888888d888888888888888888888888888888888888888888888ddddd2222288888888888888888888888887778888887777..
        2222.............22222888888777777777777888888222258888888888888888888888888888888888888888888888888888888dddddddd72222222888888888888888888888887778888887777..
        2222........22222222228888887777777777778888882555d8888888888888888888888888888888888888888888888888888888ddddddd777222222288888888888888888888877788888887777..
        2222....2222222222222288888877777777777288888855ddd8888888888888888888888888888888888888888887888888888888dddddd77777222.2228888888888888888888877788888887777..
        22222222222222222222228888887777777777288888855dddd88888888888888888888888888d888888888888877788888888888ddddd7777777722.....888888888888888888877888888877777..
        222222222222222222222888888777777777.228888885dddd8888888888888888888dddddddd8888888888888777778888888888dddd77777777772.......8888888888888888778888888877777..
        22222222222222222222288888877777777.222888888ddddd8888888888888877ddddddddd88888888888887777777888888888dddd7777777777777......7888888888888888778888888.77777..
        2222222222222222.....888888777777772228888888ddddd888888888888877dddddddd8888888888888777777777888888888ddd777777777777777....77788888888888888788888888.77777..
        222222222222.........88888877777777222888888dddddd8888888888887dddddddd88888888888887777777777778888888ddd77777727777777777.7777888888888888888d88888883777777..
        2222222.............888888777777777222888888ddddd8888888888877ddddddd88888888888887777777777777d8888888dd2277777.27777777777777888888888888888888888883.777777..
        ....................888888777.77777222888888ddddd888888888877ddddddd888888888888877777777777..dd8888888dd227777722277777777777788888888888888888888888..777777..
        ..........55555.....888888777.7777722888888ddddd888888888877ddddddd888888888888777777777.....dd88888888d222777772222277777777788888888888888888888888dd.777777..
        ..........55555.....888888777.777772d888888dddd788888888877ddddddd888888888887777777.......dddd888888888222777772222777777777888888888888888888888888ddd77777...
        .........555555....8888887777.77777dd888888ddd788888888877ddddddd88888888887777755........ddddd88888888822277777227777777777788888888888888888888888ddddd7777...
        .........555555....888888777727777dd8888888d7778888888877ddddddd8888888887777555.........ddddd88888888888277777777777777777788888888888888888888888dddddddd77...
        ........5555555....8888887777277dddd888888d7778888888877ddddddd8888888887777777777777777dddddd8888888888827777777777777777788888888888888888888888dddddddddd7...
        ........5555555....888888777227ddddd8888887777888888887ddddddd8888888887777777777777777dddddd8888888888887777777777777777728888888d888888888888888.dddddddddd...
        .......5555555....888888777722dddddd888888777888888888dddddd88888888887777777777777777ddddddd88888888888887777777777777722888888888888888888888888..dddddddddd..
        .......5555555....88888877772dddddd8888887777888888888ddddd8888888888777777777777777ddddddddd888888d8888887777777777777728888888878888888888888888...ddddddddd..
        .......555555.....8888887777ddddddd8888887777888888888dddd8888888888777777777777777dddddddddd888888d8888887777777777777228888888d78888888888888888.....ddddddd..
        ......5555555....8888888777dddddddd888888777888888888dddd8888888888777777.........ddddddddddd88888dd8888887777777777772288888888788888888888888888.....7dddddd..
        ......555555.....88888877dddddddddd888888777888888888ddd8888888888555............dddddddddd7d88888d7788888877777777772288888888d788888888888888.......777ddddd..
        .....5555555.....8888887dddddddddd8888887778888888888dd8888888885555............dddddddddd.dd888887778888887777777772228888888d7788888888888888.......777ddddd..
        .....5555555.....888888dddddddddd78888882..8888888888d888888888555.............ddddddddd...dd888887778888887777777722288888888d7788888888888888.......777ddddd..
        ....5555555.....888888dddddddddd77888888..8888888888d888888888555............dddddddddd...ddd88888777888888777777755588888888d77888888888888888.......77dddddd..
        ....5555555.....888888ddddddddd777888888..8888888888d88888888552............dddddddddd....ddd8888887778888877777755558888888dd77888888888788888.......77dddddd..
        ...5555555......888888ddddddd7777888888..88888888888888888885522...........dddddddddd....dddd8888887778888887777555588888888d778888888888788888.......7ddddddd..
        ...5555555......888888dddddd777778888883388888888888888888855222..........dddddddddd.....dddd888888777888888777555588888888dd788888888887788888......7dddddddd..
        ...555555......888888dddddd777772888888.888888888888888888522222.........dddddddddd....2ddddd88888877788888877755558888888ddd888888888887888888......7ddddddd...
        ...555555......888888ddddd7777722888888.888888888888888888222222........ddddddddd.....22dddddd8888877788888877755588888888dd.888888888887888888......dddddddd...
        ...55555.......888888dddd7777777888888.888888888888888888.222222......dddddddddd.....22ddddddd888887777888887775588888888ddd88888888888.7888888.....dddddddd....
        ...55555.......888888dddd7777777888888.888888888888888883.22222......dddddddddd....2227ddddddd88888777788888875..8888888ddd888888888888.8888888.....ddddddd.....
        ...55555.......88888ddddd7777777888888d888888888888888883.22222.....dddddddddd....2777ddddddd7888887777888888...88888888dd8888888888888.888888.....dddddddd.....
        ...55555.......88888ddddd7777777888888888888888888888883..22222....dddddddddd....77777ddddddd78888887778888882.88888888dd8888888888888.7888888.....ddddddd......
        ..555555.......88888ddddd777777788888d888888888888888883..22222...dddddddddd..7777777ddddddd77888888777888888228888888dd88888888888888.8888888....ddddddd.......
        ..555555.......88888dddd777777778888888888888888888888.3..22222..ddddddddd..777777777ddddddd77888888777788888288888888d888888888888888.888888....dddddddd.......
        ..555555.......88888dddd77777777888888888888888888888..3..22222.ddddddddd777777777777dddddd77788888877778888888888888d888888888888888..888888....ddddddd7.......
        ..555555.......88888dddd77777777888888888888888888888.3..22222dddddddddd7777777777777dddddd777788888777.888888888888d8888888888888888.8888888...dddddddd........
        ..555555.......88888dddd7777757788888888888888888888..3..2222dddddddddd77777777777777ddddd77777888887...888888888888888888888888888888888888...dddddddd7........
        ..555555...555588888dddd777777dd8888888888d888888888..3..222dddddddddd777777777777777ddddd7777788888....888888888888888888888888888888888888...ddddddd77........
        ..555555555555588888ddd777777dd88888888888.88888888..3...22dddddddddd7777777777777777ddddd7777788888.....88888888888888888888888888888888888..dddddddd..........
        ..555555555555588888ddd77777ddd8888888888d.888888885555555dddddddddd77777777777777777ddddd7777788888..28888888888888888888288888888888888887..ddddddd...........
        ...55555555555588888ddd7777dddd88888888887588888885555555ddddddddd7777777777777777777ddddd77777888888888888888888888888882288888888888888877.ddddddd............
        ...55555555555588888ddd777ddddd888888888878888888555577dddddddddd7777777777777777777dddddd77777888888888888888888888888822888888888888888777dddddddd............
        ...55555555555588888ddd55dddddd88888888888888888887777dddddddddd77777777777777777777dddddd7777288888888888888888888888822288888888888888777.ddddddd.............
        ....5555555....88888ddd2ddddddd8888888888888888888877dddddddddd777777777777777777777dddddd7722288888888888888888888888..2888888888888887777dddddddd.............
        ...............88888ddddddddddd888888888888888888888dddddddddd7777777777777777777777dddddd2222888888888888888888888888...88888888888887777dddddddd..............
        ...............88888ddddddddddd8888888888888888888888dddddddd77772222222777777777777dddddd228888888888888777888888888....88888888888827777ddddddd...............
        ...............88888dddddddddd28888888888888888888888dddddd7222222227777777777777777dddddd88888888888888777888888888....8888888888882277ddddddddd...............
        ...............88888ddddddddd2.88888888888888888888888dddd22222277777777777777777777dddd888888888888888878888888888.....88888888888222dddddddddd................
        ...............88888dddddddd222888888888888888888888888dd7777777777777777777777772777d8888888888888888888888888888......8888888888222dddddddddd22...............
        ...............888888ddddd222228888888888888888888888888777777777777777777777772278888888888888888888888888888888d.....8888888888..dddddddddddd222..............
        ...............888888dddd222222888888888888888888888888887777777777777777777888888888888888888887788888888888888d......888888888..dddddddddddd2222..............
        ...............888888ddd.2222228888888888888888d.88888888887777777777788888888888888888888888877777888888888888dd.....888888888.dddddddddddd222222..............
        ...............888888dd...222228888888888888888..2888888888888878888888888888888888888888888d7777888888888888ddd.....888888888dddddddddddd..222222..............
        ...............d88888....3.222288888288888888882222888888888888888888888888888888888888888ddd777888888888888dddd....8888888888ddddddddddd....22222..............
        ...............d888888...3..22288888288888888882222288888888888888888888888888888888882ddddddd888888888888ddddd....8888888888dddddddddd....2222222..............
        ................888888...3....2888882288888888222222288888888888888888888888888877777722ddddd88888888888..ddddd...8888888888dddddddddd...222222222..............
        ................888888....33...88888228888888822222222288888888888888888882....777777722ddd888888888888...ddddddd88888888888dddddddd...22222222222..............
        ................888888......3338888888888888882222222......88888888822222.22222777777227d888888888888ddddddddddd888888888888dddddd...2222222222222..............
        .................88888.........8888888888888882222....................222222222777777278888888888888ddddddddddd888888888888ddddd...22222222222222...............
        ...............................8888888888888888....................2222222222277777777888888888888dddddddddddd8888888888888ddd...22222222222222.................
        ...............................8888888888888888....................222222222227777778888888888888dddddddddddd88888888888888d...22222222222222...................
        ...............................8888888888888888888888888...........2222222222277778888888888888222dddddddddd88888888888888...22222222222222.....................
        ....................................888888888888888888888888888888888888882222778888888888888222222222222..888888888888888.22222222222222.......................
        ..........................................8888888888888888888888888888888888888888888888888222222222222228888888888.8888882222222222222.........................
        ..........................................888888888888888888888888888888888888888888888888222222222222288888888888.288888222222222222...........................
        ...........................................888888888888888888888888888888888888888888888.....22222222288888888888222222222222222222.............................
        ............................................8888888888888888888888888888888888888888887..........22288888888888822222222222222222...............................
        ............................................888888888888888888888888888888888888888877.............8888888888882222222222222222.................................
        .............................................88888888888888888888888888888888888888888...........8888888888882222222222222222...................................
        ..................................................88888888888888888888888888888888888888888888.888888888888..2222222222.........................................
        ..........................................................888888888888888888888888888888888888888888888888......................................................
        ..................................................................88888888888888888888888888888888888888........................................................
        ..........................................................................88888888888888888888888888888.........................................................
        ..................................................................................8888888888888888888...........................................................
        ..........................................................................................888888888.............................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    if (growth == 0) {
        mySprite = snake.shift()
    } else {
        growth = 0
        mySprite = sprites.create(img`
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            `, SpriteKind.Player)
        mySprite.setFlag(SpriteFlag.AutoDestroy, true)
    }
    x = snake[snake.length - 1].x + 16 * speedX
    y = snake[snake.length - 1].y + 15 * speedY
    mySprite.setPosition(x, y)
    snake.push(mySprite)
    if (snake.length == 80) {
        game.over(true)
    }
    pause(200)
})
