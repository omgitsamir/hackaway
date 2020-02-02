const updateGame = (socket, game) => {
  socket.on('update-game', gameState => {
    
    if(gameState.winner){
      console.log("there is a winner")
      document.getElementById('countDown').innerHTML = 'Player 1 has won'
      document.getElementById("countDown").style.display = "block";
    }
    game.gameState = gameState;
  })
}

export default updateGame
