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
    this.game.load.image('boat_body', 'assets/images/placeholder/boat_body.png');
    this.game.load.image('boat_dude', 'assets/images/placeholder/boat_dude.png');
    this.game.load.image('boat_trees', 'assets/images/placeholder/boat_trees.png');
    this.game.load.image('boat_vail_1', 'assets/images/placeholder/boat_vail_1.png');
    this.game.load.image('boat_vail_2', 'assets/images/placeholder/boat_vail_2.png');
    this.game.load.image('bullet', 'assets/images/placeholder/bullet.png');
    this.game.load.image('cannon', 'assets/images/placeholder/cannon.png');
    this.game.load.image('faro', 'assets/images/placeholder/faro.png');
    this.game.load.image('cannon_wheel', 'assets/images/placeholder/cannon_wheel.png');
    this.game.load.image('start', 'assets/images/layouts/02_start.png');
  }

  create () {
    this.state.start('Title')
  }
}
