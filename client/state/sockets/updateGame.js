const updateGame = (socket, game) => {
  socket.on('update-game', gameState => {
    game.setState(gameState);
  })
}

export default updateGame
