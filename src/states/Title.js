/* globals __DEV__ */
import Phaser from 'phaser'
// import Mushroom from '../sprites/Mushroom'
import Button from '../gameplay/button'

export default class extends Phaser.State {
    init() {
        console.log("TITLE")
    }
    create() {
        this.playButton = new Button(this, this.game.width / 2, this.game.height / 3 * 2, "PLAY", this.goToGame)
    }
    goToGame(){
    	this.state.start('Game')
    }
}