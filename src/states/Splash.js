import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    //
    // load your assets
    this.game.load.image('buttonSpr', 'assets/images/button.png');
    this.game.load.image('tvFrame', 'assets/images/tv_frame_ph.png');
    this.game.load.image('start', 'assets/images/layouts/02_start.png');
  }

  create () {
    this.state.start('Title')
  }
}
