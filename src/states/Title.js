/* globals __DEV__ */
import Phaser from 'phaser'
// import Mushroom from '../sprites/Mushroom'
import Button from '../gameplay/button'

export default class extends Phaser.State {
  init () {
<<<<<<< HEAD
    console.log("title")
    this.state.start('Game')

=======
  	console.log("TITLE")
>>>>>>> ba05ec146406e0c300d9b45e64b2a7d385d4bbb9
  }
  create () {
    this.playButton = new Button(this.game, this.game.width/2, this.game.height/3*2, "PLAY")
  }
}
