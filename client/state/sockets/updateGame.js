const updateGame = (socket, game) => {
  socket.on('update-game', gameState => {
    game.gameState = gameState;
    console.log(gameState);
  })
}

export default updateGame
