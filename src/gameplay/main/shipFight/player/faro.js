import Bullet from './bullet';

export default class Faro extends Phaser.Group {
  constructor(game, parent,) {
    super(game, parent);

    this.player = parent;

    this.x = 30 - this.game.width / 2;
    this.y = 0;
    this.cannonX = 50;
    this.cannonY = -32;
    this.cannonAngle = -15;
    this.swingAmplittude = 90;

    this.landPosition = null;

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
    // this.cannon.alpha = 0.2;
    this.add(this.cannon);

    this.cannonWheel = this.game.add.sprite(this.cannonX, this.cannonY, 'cannon_wheel');
    this.cannonWheel.anchor.set(0.27, 0.5);
    this.add(this.cannonWheel);

    // this.swipeCannon();


    // this.debugKeyO = this.game.input.keyboard.addKey(Phaser.Keyboard.O);
    // this.debugKeyO.onDown.add(()=> {
    //   this.shoot(400);
    // }, this.bullet);
  }

  swipeCannon()
  {
    this.cannon.angle = this.cannonAngle;
    if (!this.tweenSwipeCannon)
      this.tweenSwipeCannon = this.game.add.tween(this.cannon).to(
        { angle: -this.swingAmplittude },
        1500,
        Phaser.Easing.Quadratic.InOut,//null,
        true,
        0,
        -1,
        true
      );

    this.player.hitKey.onDown.addOnce(this.shoot, this);
  }

  shoot()
  {
    let CA = Math.abs(this.cannon.angle) - 10;
    let str = 400;
    let x = 2 * str * Math.cos(Phaser.Math.degToRad(CA));
    let y = str * Math.sin(Phaser.Math.degToRad(CA));
    let time = 1000 * (y + (x / 2)) / str;
    let tweenData = {
      axisX: x,
      axisY: y,
      time: time,
    }
    this.landPosition = this.x + this.bullet.x + x;

    this.bullet.shoot(tweenData);
  }

  checkLanding()
  {
    let shipBounds = [
      this.parent.ship.x - this.parent.ship.body.width / 2,
      this.parent.ship.x + this.parent.ship.body.width / 2
    ];
    // console.log(shipBounds, this.landPosition);

    if(this.landPosition > shipBounds[0] && this.landPosition < shipBounds[1])
      return true;
    else
      return false;
  }

  doTheActions()
  {
    let hitted = this.checkLanding();
    if(hitted)
    {
      if (this.player.playerPos === 'top')
        this.player.parent.parent.ui.showSideCharacter("right", "good")
      else
        this.player.parent.parent.ui.showSideCharacter("left", "good")
      
      this.shipMoveTo();
      // this.CA();
    } else
    {
      if (this.player.playerPos === 'top')
        this.player.parent.parent.ui.showSideCharacter("right", "bad")
      else
        this.player.parent.parent.ui.showSideCharacter("left", "bad")

      this.player.bubble.showBubble();
    }
  }

  shipMoveTo()
  {
    // console.log(this.player.bubble.targetPosition);
    let tweenA = this.game.add.tween(this.player.ship).to(
      { x: this.player.bubble.targetPosition },
      1000,
      Phaser.Easing.Sinusoidal.InOut,//null,
      true
    );

    // console.log(this);
    tweenA.onComplete.add(()=> {this.CA();}, this);
  }

  CA()
  {
    // console.log(this.player.ship.cannon);
    let tween = this.game.add.tween(this.player.ship.cannon).to(
      { angle: this.player.bubble.targetAngle },
      500,
      Phaser.Easing.Sinusoidal.InOut,//null,
      true
    );

    tween.onComplete.add(this.player.ship.bulletGenerator, this.player.ship);
  }

  // cannonFire()
  // {

  //   tween.onComplete.add(this.player.bubble.showBubble, this.player.bubble);// TEMPORAL
  // }
}
