import Ship from './player/ship';
import Faro from './player/faro';
import Bubble from './player/bubble';


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
    this.ship = new Ship(this.game, this, this.playerPos);
    this.faro = new Faro(this.game, this);
    this.bubble = new Bubble(this.game, this, this.playerPos);
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
      if (this.shootedTargetX > enemyShip.x - enemyShip.body.width / 2 &&
        this.shootedTargetX < enemyShip.x + enemyShip.body.width / 2)
        {
          alert("GAME OVER")
        } else{
          this.bubble.showBubble();
        }
    } else
    {
      let enemyShip = this.parent.topPlayer.ship;
      // console.log(enemyShip);
      // console.log(this.shootedTargetX, enemyShip.x /* - enemyShip.body.width / 2 */);
      if (this.shootedTargetX > enemyShip.x - enemyShip.body.width / 2 &&
        this.shootedTargetX < enemyShip.x + enemyShip.body.width / 2)
        {
          alert("GAME OVER")
        } else {
          this.bubble.showBubble();          
        }
    }
  }
}
