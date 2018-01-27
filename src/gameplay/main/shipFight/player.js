export default class Player extends Phaser.Group {
  constructor(game, parent, mirrored = false) {
    super(game, parent);

    this._main = parent;
    if (this.mirrored)
      this.scale.x *= -1;

    this.init();
  }

  init()
  {

  }

}