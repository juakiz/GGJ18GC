import Phaser from 'phaser'
import WebFont from 'webfontloader'

export default class extends Phaser.State {
  init () {
    this.stage.backgroundColor = '#EDEEC9'
    this.fontsReady = false
    this.fontsLoaded = this.fontsLoaded.bind(this)
  }

  preload () {
    WebFont.load({
      google: {
        families: ['Bangers']
      },
      active: this.fontsLoaded
    })

    let text = this.add.text(this.world.centerX, this.world.centerY, 'loading fonts', { font: '16px Arial', fill: '#dddddd', align: 'center' })
    text.anchor.setTo(0.5, 0.5)

    this.load.image('loaderBg', './assets/images/loader-bg.png')
    this.load.image('loaderBar', './assets/images/loader-bar.png')
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
  }

  render () {
    if (this.fontsReady) {
      this.state.start('Splash')
    }
  }

  fontsLoaded () {
    this.fontsReady = true
  }
}
