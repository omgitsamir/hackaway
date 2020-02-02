'use strict'
const http = require('http')
const app = require('./config')
const Server = http.Server(app)
const PORT = process.env.PORT || 8000
const io = require('socket.io')(Server)

Server.listen(PORT, () => console.log('Game server running on:', PORT))
console.log('ho')
const players = {}
let gameState = {
  winner: null,
  state: 'running'
}

io.on('connection', socket => {
  // When a player connects
  socket.on('new-player', state => {
    console.log('New player joined with state:', state)
    players[socket.id] = state
    // Emit the update-players method in the client side
    io.emit('update-players', players)
  })

  socket.on('disconnect', state => {
    delete players[socket.id]
    io.emit('update-players', players)
  })

  // When a player moves
  socket.on('move-player', data => {
    const { x, y, angle, playerName, speed } = data

    // If the player is invalid, return
    if (players[socket.id] === undefined) {
      return
    }
    console.log("x: " + x + " y: " + y)
    // if(x>1448 && x<1454 && y>690 && y<700){
      
    //   console.log("player found the star")
    // }
    if (x > 500 && gameState.state == 'running') {
      console.log('found')
      gameState = {
        winner: players[socket.id],
        state: 'waiting'
      }
      io.emit('update-game', gameState);
    }
    // Update the player's data if he moved
    players[socket.id].x = x
    players[socket.id].y = y
    players[socket.id].angle = angle
    players[socket.id].playerName = {
      name: playerName.name,
      x: playerName.x,
      y: playerName.y
    }
    players[socket.id].speed = {
      value: speed.value,
      x: speed.x,
      y: speed.y
    }

    // Send the data back to the client
    io.emit('update-players', players)
  })
})
