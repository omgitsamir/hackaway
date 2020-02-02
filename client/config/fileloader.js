import { ASSETS_URL } from '.'

const fileLoader = game => {
  game.load.crossOrigin = 'Anonymous'
  game.stage.backgroundColor = '#1E1E1E'
  game.load.image('stadium', `${ASSETS_URL}/sprites/stadium/stadium.png`)
  game.load.image('man', `${ASSETS_URL}/sprites/man/man.png`)
}

export default fileLoader
