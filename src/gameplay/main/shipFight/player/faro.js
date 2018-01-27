export default class Player extends Phaser.Group {
  constructor(game, parent,) {
    super(game, parent);

    this.x = 30 - this.game.width / 2;
    this.y = 0;
    this.cannonX = 50;
    this.cannonY = -32;
    this.cannonAngle = -15;
    this.swingAmplittude = 60;

    this.init();
  }

  init()
  {
    this.faro = this.game.add.sprite(0, 0, 'faro');
    this.faro.anchor.set(0.5, 1);
    this.add(this.faro);
    this.x += this.faro.width / 2;

    this.cannon = this.game.add.sprite(this.cannonX, this.cannonY, 'cannon');
    this.cannon.anchor.set(0.27, 0.5);
    this.cannon.angle = this.cannonAngle;
    this.add(this.cannon);

    this.cannonWheel = this.game.add.sprite(this.cannonX, this.cannonY, 'cannon_wheel');
    this.cannonWheel.anchor.set(0.27, 0.5);
    this.add(this.cannonWheel);
    
    this.bullet = this.game.add.sprite(this.cannon.x, this.cannon.y, 'bullet');
    this.bullet.anchor.set(0.5);
    this.bullet.angle = this.bullet.angle;    
    this.add(this.bullet);

    this.debugKeyP = this.game.input.keyboard.addKey(Phaser.Keyboard.P);
    this.debugKeyP.onDown.add(()=> {this.swipeCannon();}, this);
  }

  swipeCannon()
  {
    this.cannon.angle = this.cannonAngle;    
    this.game.add.tween(this.cannon).to(
      { angle: -this.swingAmplittude },
      1500,
      Phaser.Easing.Quadratic.InOut,//null,
      true,
      0,
      -1,
      true
    );
  }

  shoot()
  {

  }
}
