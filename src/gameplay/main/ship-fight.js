
import Player from './shipFight/player';

export default class ShipFight extends Phaser.Group {
  constructor(game, parent) {
    super(game, parent);

    this._main = parent;

    this.init();
  }

  init()
  {
    this.topPlayer = new Player(this.game, this, 'top');
    this.botPlayer = new Player(this.game, this, 'bot');
  }

}
