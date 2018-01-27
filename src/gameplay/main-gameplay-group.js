import Background from './main/background';
import Bubble from './main/bubble';
import ShipFight from './main/ship-fight';
import UI from './main/ui';

export default class MainGameplay extends Phaser.Group {
  constructor(game, parent) {
    super(game);

    // this.game = game;
    this._state = game.state.getCurrentState();

    this.init();
    
  }

  init() {
    this.bg = new Background(this.game, this);
    this.shipFight = new ShipFight(this.game, this);
    this.bubble = new Bubble(this.game, this);
    this.ui = new UI(this.game, this);

    const bannerText = 'Ciao Mattia'
    let banner = this.game.add.text(this.game.world.centerX, this.game.world.centerY, bannerText, {
      font: '40px Bangers',
      fill: '#77BFA3',
      smoothed: false
    })

    banner.padding.set(10, 16)
    banner.anchor.setTo(0.5)
  }
}