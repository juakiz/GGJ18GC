import Ship from './player/ship';
import Faro from './player/faro';

export default class Player extends Phaser.Group {
  constructor(game, parent, playerPos) {
    super(game, parent);

    this._main = parent;
    if (playerPos === 'top')
    {
      this.scale.x *= -1;
    } else
    {
      this.y = this.game.height / 2;
    }
    this.y -= 30;
    
    this.init();
  }

  init()
  {
    this.ship = new Ship(this.game, this);
    this.faro = new Faro(this.game, this);
  }

}
