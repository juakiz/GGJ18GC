import Bullet from './bullet';

export default class Faro extends Phaser.Group {
  constructor(game, parent,) {
    super(game, parent);

    this.x = 30 - this.game.width / 2;
    this.y = 0;
    this.cannonX = 50;
    this.cannonY = -32;
    this.cannonAngle = -15;
    this.swingAmplittude = 75;

    this.init();
  }

  init()
  {
    this.faro = this.game.add.sprite(0, 0, 'faro');
    this.faro.anchor.set(0.5, 1);
    this.add(this.faro);
    this.x += this.faro.width / 2;
    
    this.bullet = new Bullet(this.game, this, this.cannonX, this.cannonY);

    this.cannon = this.game.add.sprite(this.cannonX, this.cannonY, 'cannon');
    this.cannon.anchor.set(0.27, 0.5);
    this.cannon.angle = this.cannonAngle;
    this.add(this.cannon);

    this.cannonWheel = this.game.add.sprite(this.cannonX, this.cannonY, 'cannon_wheel');
    this.cannonWheel.anchor.set(0.27, 0.5);
    this.add(this.cannonWheel);

    this.swipeCannon();


    this.debugKeyO = this.game.input.keyboard.addKey(Phaser.Keyboard.O);
    this.debugKeyO.onDown.add(()=> {
      this.shoot(500);
    }, this.bullet);
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

  shoot(strength)
  {
    let CA = Math.abs(this.cannon.angle) - 10;
    let str = strength;
    let x = 2 * str * Math.cos(Phaser.Math.degToRad(CA));
    let y = str * Math.sin(Phaser.Math.degToRad(CA));
    let time = 800;
    let tweenData = {
      axisX: x,
      axisY: y,
      time: str,
    }
    this.bullet.shoot(tweenData);
  }
}
