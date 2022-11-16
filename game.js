

    // import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";
    
kaboom({
    width: 700,
    height: 500,
    font: "sinko",
    canvas: document.querySelector("#mycanvas"),
    background: [ 15, 33, 12, ],
})

loadSprite("bean", "sprites/bean.png")
loadSprite("ground", "sprites/ground-2.png")
loadSprite("enemy", "sprites/enemy-1.png")

// add a character to screen
const player = add([
// list of components
sprite("bean"),
pos(80, 40),
area(),
body(),
]);

const MOVE_SPEAD = 200


// player mechanics

player.onCollide("danger", () => {
    destroy(player)
})

// player movements

player.onUpdate(() => {
    camPos(player.pos)
})

onKeyDown("a", () => {
    player.move(-MOVE_SPEAD, 0)
})

onKeyDown("d", () => {
    player.move(MOVE_SPEAD, 0)
})

onKeyPress("w", () => {
    if(player.isGrounded()) {
        player.jump()
    }
})

// maps

const level1 = addLevel([
'                    ',
'                    ',
'              xxx   ',
'       xxx          ',
'              xxx   ',
'       xxx          ',
'        ~     xxx   ',
'       xxx          ',
'              xxx   ',
'       xxx          ',
'  xxxxxxxxxxxx      ',
], {
width: 31,
height: 100,
"x": () => [
    sprite("ground"),
    area(),
    solid(),
],
"~": () => [
    sprite("enemy"),
    area(),
    body(),
    solid(),
    'danger',
],
})

