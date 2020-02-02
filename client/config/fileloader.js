import { ASSETS_URL } from '.'

const fileLoader = game => {
  game.load.crossOrigin = 'Anonymous'
  game.stage.backgroundColor = '#1E1E1E'
  game.load.image('space', `${ASSETS_URL}/sprites/space/space.png`)
  game.load.image('star', `${ASSETS_URL}/sprites/star/star.png`)
  game.load.image('man', `${ASSETS_URL}/sprites/man/man.png`)
  game.load.image('man2', `${ASSETS_URL}/sprites/man/man2.png`)
//  game.load.image('man3', `${ASSETS_URL}/sprites/man/man3.png`)
  //game.load.image('man4', `${ASSETS_URL}/sprites/man/man4.png`)

}

export default fileLoader
