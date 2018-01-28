export default class Ship extends Phaser.Group {
  constructor(game, parent, playerPos) {
    super(game, parent);

    this.player = this.parent;

    this.playerPos = playerPos;

    // this.cannonBallAngle = null;

    this.x = 0;
    this.y = 0;
    this.floorY = -32;

    this.init();
  }

  init()
  {
    this.trees = this.game.add.sprite(0, 0, 'boat_trees');
    this.trees.anchor.set(0.5, 1);
    this.add(this.trees);

    this.vail1 = this.game.add.sprite(0, 0, 'boat_vail_1');
    this.vail1.anchor.set(0.5, 1);
    this.add(this.vail1);
    
    this.vail2 = this.game.add.sprite(0, 0, 'boat_vail_2');
    this.vail2.anchor.set(0.5, 1);
    this.add(this.vail2);

    this.dude = this.game.add.sprite(0, this.floorY, 'boat_dude');
    this.dude.anchor.set(0.5, 1);
    this.add(this.dude);

    this.body = this.game.add.sprite(0, 0, 'boat_body');
    this.body.anchor.set(0.5, 1);
    this.add(this.body);

    this.cannon = this.game.add.sprite(0, -50, 'cannon');
    this.cannon.anchor.set(0.27, 0.5);
    this.cannon.angle = this.playerPos === 'top' ? 90 : -90;
    this.add(this.cannon);
    
    // this.debugKeyP = this.game.input.keyboard.addKey(Phaser.Keyboard.P);
    // this.debugKeyP.onDown.add(this.swingShip, this);

    // Ship movements
    this.tweenAX = this.game.add.tween(this).to({ x: -300 }, 2000);
    this.tweenBX = this.game.add.tween(this).to({ x: 300 }, 3000);
    this.tweenAX.chain(this.tweenBX);
    this.tweenBX.chain(this.tweenAX);

    let targetA = this.playerPos === 'top' ? 120 : -120;
    let targetB = this.playerPos === 'top' ? 60 : -60;
    this.cannonTweenA = this.game.add.tween(this.cannon).to({ angle: targetA }, 1000);
    this.cannonTweenB = this.game.add.tween(this.cannon).to({ angle: targetB }, 1000);
    this.cannonTweenA.chain(this.cannonTweenB);
    this.cannonTweenB.chain(this.cannonTweenA);
  }

  // Ship swing tweens
  swingShip()
  {
    this.tweenAX.start();
    this.tweenAX.resume();
    this.tweenBX.resume();
  }

  swingShipPause()
  {
    this.tweenAX.pause();
    this.tweenBX.pause();
  }

  swingShipResume()
  {
    this.tweenAX.resume();
    this.tweenBX.resume();
  }

  // Cannon swing tweens  
  swingCannon()
  {
    this.cannonTweenA.start();
    this.cannonTweenA.resume();
    this.cannonTweenB.resume();
  }

  swingCannonPause()
  {
    this.cannonTweenA.pause();
    this.cannonTweenB.pause();
  }

  swingCannonResume()
  {
    this.cannonTweenA.resume();
    this.cannonTweenB.resume();
  }

  // Ship actions
  moveShip(target)
  {
    let tweenX = this.game.add.tween(this).to({ x: target }, 1000, null, true);
    tweenX.oncomplete.add();
  }

  bulletGenerator()
  {
    let bullet = this.game.add.sprite(this.cannon.x, this.cannon.y, 'bullet');
    bullet.anchor.set(0.5);
    this.add(bullet);

    let CA = 90 - this.player.bubble.targetAngle;

    let targetY = 380;
    let targetX = targetY * Math.tan(Phaser.Math.degToRad(CA));
    // console.log(targetX, targetY);
    
    if(this.playerPos === 'bot')
    {
      targetY *= -1;
      targetX *= -1;
    }

    let x = targetY * Math.tan(Phaser.Math.degToRad(CA));

    let tween = this.game.add.tween(bullet).to({ x: targetX, y: targetY }, 1000, null, true);
    tween.onComplete.add(()=> {
      bullet.destroy();
      this.player.shootedTargetX = targetX;
    }, this);

    tween.onComplete.add(this.player.checkEnemyHit, this.player);// TEMPORAL

  }
}
