/* globals __DEV__ */
import Phaser from 'phaser'
// import Mushroom from '../sprites/Mushroom'
import MainGG from '../gameplay/main-gameplay-group'
import TvFrame from '../gameplay/tv-frame';
import Onomatopoia from '../gameplay/onomatopoia';


export default class extends Phaser.State {
  init () {

  }
  preload () {}

  create () {
    this.stage.backgroundColor = "#4488AA";

    this.main = new MainGG(this.game);
    this.tvFrame = new TvFrame(this.game);
    this.onomatopoia = new Onomatopoia(this.game);

    this.main.scale.setTo(0.8)

    this.game.add.tween(this.main.scale).to( {x:1, y:1}, 1000, Phaser.Easing.Quadratic.InOut, true);
    this.tvFrame.zoomOut()
  }

  render () {
    if (__DEV__) {
      //this.game.debug.spriteInfo(this.mushroom, 32, 32)
    }
  }
}
