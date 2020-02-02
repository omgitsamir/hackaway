import { ASSETS_URL } from '.'

const fileLoader = game => {
  game.load.crossOrigin = 'Anonymous'
  game.stage.backgroundColor = '#1E1E1E'
  game.load.image('stadium', `${ASSETS_URL}/sprites/stadium/stadium.png`)
  game.load.image('man1', `${ASSETS_URL}/sprites/man/man1.png`)
  game.load.image('man2', `${ASSETS_URL}/sprites/man/man2.png`)
  game.load.image('man3', `${ASSETS_URL}/sprites/man/man3.png`)
  game.load.image('man4', `${ASSETS_URL}/sprites/man/man4.png`)

}

export default fileLoader
