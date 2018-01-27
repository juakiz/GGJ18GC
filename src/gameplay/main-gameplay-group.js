import Background from './background';
import Bubble from './bubble';
import Onomatopoia from './onomatopoia';
import ShipFight from './ship-fight';
import TvFrame from './tv-frame';
import UI from './ui';

console.log("AAA")
export default class MainGameplay extends Phaser.Group {
  constructor(game, parent) {
    console.log("AAA")
    super(game);

    // this.game = game;
    this._state = game.state.getCurrentState();

    // this.init();
    
  }

  init() {
    // this.bg = new Background(this.game, this);
    // this.bubble = new Bubble(this.game, this);
    // this.onomatopoia = new Onomatopoia(this.game, this);
    // this.shipFight = new ShipFight(this.game, this);
    // this.tvFrame = new TvFrame(this.game, this);
    // this.ui = new UI(this.game, this);

    // const bannerText = 'Ciao Mattia'
    // let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText, {
    //   font: '40px Bangers',
    //   fill: '#77BFA3',
    //   smoothed: false
    // })

    // banner.padding.set(10, 16)
    // banner.anchor.setTo(0.5)
  }
}