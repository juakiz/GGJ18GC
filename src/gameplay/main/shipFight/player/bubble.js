import Ship from './ship';

export default class Bubble extends Phaser.Group {
  constructor(game, parent, playerPos) {
    super(game, parent);

    this.playerPos = playerPos;

    this.player = parent;

    this.targetPosition = null;
    this.targetAngle = null;

    this.sprBubble = this.game.add.graphics(0, 0);
    this.sprBubble.beginFill(0x000000, 1);
    this.sprBubble.drawRect( 30 - this.game.width / 2, 60 - this.game.height / 2, -60 + this.game.width, -60 + this.game.height / 2);
    this.sprBubble.endFill();
    this.add(this.sprBubble)

    this.ship = new Ship(this.game, this, this.playerPos);
    // this.swingShip();
    // this.swingCannon();

    this.debugKeyI = this.game.input.keyboard.addKey(Phaser.Keyboard.I);
    this.debugKeyI.onDown.add(this.swingShipPause, this);
    this.debugKeyU = this.game.input.keyboard.addKey(Phaser.Keyboard.U);
    this.debugKeyU.onDown.add(this.swingShipResume, this);

    this.debugKeyY = this.game.input.keyboard.addKey(Phaser.Keyboard.Y);
    this.debugKeyY.onDown.add(this.swingCannonPause, this);
    this.debugKeyT = this.game.input.keyboard.addKey(Phaser.Keyboard.T);
    this.debugKeyT.onDown.add(this.swingCannonResume, this);

    this.alpha = 0;
    // this.scale.set(0);
    this.showBubble();
  }

  showBubble()
  {
    let tweenX = this.game.add.tween(this).to({ alpha: 0.8 }, 1000, null, true);
    // let tweenX = this.game.add.tween(this.scale).to({ x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
    tweenX.onComplete.add(this.swingShip, this);

  }

  hideBubble()
  {
    let tweenX = this.game.add.tween(this).to({ alpha: 0 }, 500, null, true);
    // let tweenX = this.game.add.tween(this.scale).to({ x: 1, y: 1 }, 500, Phaser.Easing.Back.In, true);
    tweenX.onComplete.add(this.player.faro.swipeCannon, this.player.faro);
  }

  // Ship Tweens
  swingShip()
  {
    this.ship.swingShip();
    this.player.hitKey.onDown.addOnce(this.swingShipPause, this);
  }

  swingShipPause()
  {
    this.ship.swingShipPause();
    this.swingCannon();
    this.targetPosition = this.ship.x;
  }

  swingShipResume()
  {
    this.ship.swingShipResume();
  }

  // Cannon Tweens
  swingCannon()
  {
    this.ship.swingCannon();
    this.player.hitKey.onDown.addOnce(this.swingCannonPause, this);    
  }

  swingCannonPause()
  {
    this.ship.swingCannonPause();
    this.hideBubble();
    this.targetAngle = this.ship.cannon.angle;
  }

  swingCannonResume()
  {
    this.ship.swingCannonResume();
  }
}
