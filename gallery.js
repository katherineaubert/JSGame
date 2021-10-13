const canvas = document.getElementById("gameBoard")
const ctx = canvas.getContext("2d")
window.onload = () => {
    const boulder = new Image()
    const rover = new Image()
    const co209 = new Image()
    const csu = new Image()
    const elm = new Image()
    const football = new Image()
    const bigM = new Image()
    const mesa = new Image()
    const metro = new Image()
    const mines = new Image()
    const rec_center = new Image()
    const stratton = new Image()
    const thomas = new Image()
    boulder.src = "./cardImages/boulder.jpg"
    rover.src = "./cardImages/rover.jpg"
    co209.src = "./cardImages/CO209.jpg"
    csu.src = "./cardImages/csu_logo.jpg"
    elm.src = "./cardImages/elm.jpg"
    football.src = "./cardImages/football_field.jpg"
    bigM.src = "./cardImages/M.jpg"
    mesa.src = "./cardImages/mesa.jpg"
    metro.src = "./cardImages/metro.jpg"
    mines.src = "./cardImages/mines_logo.jpg"
    rec_center.src = "./cardImages/rec_center.jpg"
    stratton.src = "./cardImages/stratton.jpg"
    thomas.src = "./cardImages/thomas.jpg"

    boulder.onload = () => {
        ctx.drawImage(boulder, 0, 0, 100, 100)
        ctx.drawImage(boulder, 100, 100, 100, 100)
    }
    rover.onload = () => {
        ctx.drawImage(rover, 100, 0, 100, 100)
        ctx.drawImage(rover, 0, 100, 100, 100)
    }
    co209.onload = () => {
        ctx.drawImage(co209, 200, 0, 100, 100)
        ctx.drawImage(co209, 0, 200, 100, 100)
    }
    csu.onload = () => {
        ctx.drawImage(csu, 200, 100, 100, 100)
        ctx.drawImage(csu, 100, 200, 100, 100)
    }
    elm.onload = () => {
        ctx.drawImage(elm, 0, 300, 100, 100)
        ctx.drawImage(elm, 100, 300, 100, 100)
    }
    football.onload = () => {
        ctx.drawImage(football, 200, 300, 100, 100)
        ctx.drawImage(football, 200, 200, 100, 100)
    }
    bigM.onload = () => {
        ctx.drawImage(bigM, 300, 300, 100, 100)
        ctx.drawImage(bigM, 300, 200, 100, 100)
    }
    mesa.onload = () => {
        ctx.drawImage(mesa, 300, 100, 100, 100)
        ctx.drawImage(mesa, 300, 0, 100, 100)
    }
    metro.onload = () => {
        ctx.drawImage(metro, 400, 0, 100, 100)
        ctx.drawImage(metro, 400, 100, 100, 100)
    }
    mines.onload = () => {
        ctx.drawImage(mines, 400, 200, 100, 100)
        ctx.drawImage(mines, 400, 300, 100, 100)
        ctx.drawImage(mines, 600, 200, 100, 100)
        ctx.drawImage(mines, 600, 300, 100, 100)
    }
    rec_center.onload = () => {
        ctx.drawImage(rec_center, 500, 0, 100, 100)
        ctx.drawImage(rec_center, 500, 100, 100, 100)
    }
    stratton.onload = () => {
        ctx.drawImage(stratton, 500, 200, 100, 100)
        ctx.drawImage(stratton, 500, 300, 100, 100)
    }
    thomas.onload = () => {
        ctx.drawImage(thomas, 600, 0, 100, 100)
        ctx.drawImage(thomas, 600, 100, 100, 100)
    }
}   