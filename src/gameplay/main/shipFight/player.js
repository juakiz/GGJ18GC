import Ship from './player/ship';
import Faro from './player/faro';
import Bubble from './player/bubble';
// import SOUNDS from '../../../gameplay/sounds';



export default class Player extends Phaser.Group {
  constructor(game, parent, playerPos) {
    super(game, parent);

    this.playerPos = playerPos;

    // this.status = 0;
    this.shootedTargetX = null;

    this._main = parent;
    if (playerPos === 'top')
    {
      this.scale.x *= -1;
    } else
    {
      this.y = this.game.height / 2;
    }
    this.y -= 30;

    // this.onShipCannonShootEnd = new Phaser.Signal();
    // this.onShipCannonShootEnd.add(this.jumpCheck, this);

    if (this.playerPos === 'bot')
    {
      this.hitKey = this.game.input.keyboard.addKey(Phaser.Keyboard.M);
      // this.hitKey.onDown.add(this.FSM, this);
    } else
    {
      this.hitKey = this.game.input.keyboard.addKey(Phaser.Keyboard.Q);
      // this.hitKey.onDown.add(this.FSM, this);
    }

    this.init();
  }

  init()
  {
    this.bubble = new Bubble(this.game, this, this.playerPos);
    this.ship = new Ship(this.game, this, this.playerPos);
    this.faro = new Faro(this.game, this);
  }

  // FSM(command)
  // {
  //   switch(this.status)
  //   {
  //     case 1:
  //     console.log('Status:' + this.status);
  //     break;
  //     default:
  //     alert('FSM ERROR!');
  //     break;
  //   }
  // }
  
  checkEnemyHit()
  {
    if (this.playerPos === 'top')
    {
      let enemyShip = this.parent.botPlayer.ship;
      if (this.shootedTargetX + this.ship.x > -enemyShip.x - enemyShip.body.width / 2 &&
        this.shootedTargetX + this.ship.x < -enemyShip.x + enemyShip.body.width / 2)
        {
          this.game.FUCK_THIS_SHIT = 'PLAYER TWO WINS!';
          this.parent.parent.gotoGameOver();
        } else{
          this.bubble.showBubble();
          // this.parent.botPlayer.createEffectWater(this.shootedTargetX + this.ship.x);          
        }
    } else
    {
      let enemyShip = this.parent.topPlayer.ship;
      // console.log(enemyShip);
      console.log(this.shootedTargetX, enemyShip.x /* - enemyShip.body.width / 2 */);
      if (this.shootedTargetX + this.ship.x > -enemyShip.x - enemyShip.body.width / 2 &&
        this.shootedTargetX + this.ship.x < -enemyShip.x + enemyShip.body.width / 2)
        {
          this.game.FUCK_THIS_SHIT = 'PLAYER ONE WINS!';
          this.parent.parent.gotoGameOver();
        } else {
          this.bubble.showBubble();
          // this.parent.topPlayer.createEffectWater(this.shootedTargetX + this.ship.x);
        }
    }
  }

  createEffectExplosion(xx, yy = 0) {
    var eff = this.game.add.sprite(xx, yy, "explosion")
    eff.anchor.setTo(0.5)
    eff.scale.setTo(0)

    this.add(eff)

    var tw = this.game.add.tween(eff.scale).to({
        x: 1,
        y: 1
    }, 300, Phaser.Easing.Quadratic.InOut, true);

    var tw2 = this.game.add.tween(eff).to({
        alpha: 0
    }, 1000,Phaser.Easing.Quadratic.InOut, false);

    tw.chain(tw2)
    tw2.onComplete.add(eff.destroy, eff)

    SOUNDS.playFx(this.game, "boom")
}

createEffectWater(xx, yy = 0) {
    var eff = this.game.add.sprite(xx, yy, "splash")
    eff.anchor.setTo(0.5)
    eff.scale.setTo(0)

    this.add(eff)

    var tw = this.game.add.tween(eff.scale).to({
        x: 1,
        y: 1
    }, 300, Phaser.Easing.Quadratic.InOut, true);

    var tw2 = this.game.add.tween(eff).to({
        alpha: 0
    }, 1000,Phaser.Easing.Quadratic.InOut, false);

    tw.chain(tw2)
    tw2.onComplete.add(eff.destroy, eff)

    SOUNDS.playFx(this.game, "water")
  }
}
