export default class Player extends Phaser.Group {
  constructor(game, parent,) {
    super(game, parent);

    this.x = -this.game.width / 2;
    this.y = 0;
    this.floorY = -32;

    this.init();
  }

  init()
  {
   
    this.faro = this.game.add.sprite(0, 0, 'faro');
    this.faro.anchor.set(0.5, 1);
    this.add(this.faro);
    this.x += this.faro.width / 2;

    this.cannon = this.game.add.sprite(50, -32, 'cannon');
    this.cannon.anchor.set(0.48, 0.73);
    this.add(this.cannon);

    this.cannonWheel = this.game.add.sprite(50, -32, 'cannon_wheel');
    this.cannonWheel.anchor.set(0.48, 0.73);
    this.add(this.cannonWheel);

  }
}
