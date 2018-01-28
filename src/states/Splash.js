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
    this.game.load.image('tvFrame', 'assets/images/placeholder/UI/tv_frame_ph.png');
    this.game.load.image('boat_body', 'assets/images/placeholder/boat_body.png');
    this.game.load.image('boat_dude', 'assets/images/placeholder/boat_dude.png');
    this.game.load.image('boat_trees', 'assets/images/placeholder/boat_trees.png');
    this.game.load.image('boat_vail_1', 'assets/images/placeholder/boat_vail_1.png');
    this.game.load.image('boat_vail_2', 'assets/images/placeholder/boat_vail_2.png');
    this.game.load.image('bullet', 'assets/images/placeholder/bullet.png');
    this.game.load.image('cannon', 'assets/images/placeholder/cannon.png');
    this.game.load.image('faro', 'assets/images/placeholder/faro.png');
    this.game.load.image('cannon_wheel', 'assets/images/placeholder/cannon_wheel.png');
    this.game.load.image('start', 'assets/images/placeholder/title_BirbsOfTheCaribbean.png');
    this.game.load.image('hawk_complete', 'assets/images/placeholder/hawk parts flipped/hawk_complete.png');
    this.game.load.image('cacatua_complete', 'assets/images/placeholder/cacatua/cacatua_complete.png');
    this.game.load.image('cacatua_CRAZYCRAA', 'assets/images/placeholder/cacatua_CRAZYCRAA.png');
    this.game.load.image('hawk_CRAZYCRAA', 'assets/images/placeholder/hawk_CRAZYCRAA.png');
    this.game.load.image('pigeon', 'assets/images/placeholder/pigeon.png');
    this.game.load.image('banner', 'assets/images/placeholder/UI/banner.png');
    this.game.load.image('baloon', 'assets/images/placeholder/UI/baloon.png');

    this.game.load.image('imaginationFrame', 'assets/images/placeholder/UI/NEW_IMAGINATION_FRAME.png');

    this.game.load.image('shoot', 'assets/images/effects/shoot.png');
    this.game.load.image('explosion', 'assets/images/effects/explosion_with_text.png');
    this.game.load.image('splash', 'assets/images/effects/splash_with_text.png');
    this.game.load.image('drop', 'assets/images/effects/drop.png');


    this.game.load.audio('bgm', 'assets/sounds/bgm.ogg');
    this.game.load.audio('boom', 'assets/sounds/boom.ogg');
    this.game.load.audio('caca', 'assets/sounds/caca.ogg');
    this.game.load.audio('coo', 'assets/sounds/coo.ogg');
    this.game.load.audio('flap', 'assets/sounds/flap.ogg');
    this.game.load.audio('frush', 'assets/sounds/frush.ogg');
    this.game.load.audio('scream', 'assets/sounds/scream.ogg');
    this.game.load.audio('shoot', 'assets/sounds/shoot.ogg');
    this.game.load.audio('skraa', 'assets/sounds/skraa.ogg');
    this.game.load.audio('water', 'assets/sounds/water.ogg');
    this.game.load.audio('wood', 'assets/sounds/wood.ogg');
  }

  create () {
    this.state.start('Title')
  }
}
