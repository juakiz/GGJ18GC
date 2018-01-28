export default class Bullet extends Phaser.Group {
  constructor(game, parent, x, y) {
    super(game, parent);

    this.player = parent.parent;

    this.x = x;
    this.y = y;

    // this.init();
  }

  shoot(tweenData)
  {    
    let sprBullet = this.game.add.sprite(0, 0, 'bullet');
    sprBullet.anchor.set(0.5);
    this.add(sprBullet);
    // console.log(tweenData);

    let tweenAX = this.game.add.tween(sprBullet).to({x: '+' + tweenData.axisX}, tweenData.time);
    let tweenAY = this.game.add.tween(sprBullet).to({y: '-' + tweenData.axisY}, tweenData.time / 2, Phaser.Easing.Quadratic.Out);
    let tweenBY = this.game.add.tween(sprBullet).to({y: '+' + tweenData.axisY}, tweenData.time / 2, Phaser.Easing.Quadratic.In);
    tweenAY.chain(tweenBY);
    tweenAY.start();
    tweenAX.start();

    // console.log(this.player);
    tweenAX.onComplete.add(this.player.faro.doTheActions, this.player.faro);
    
    tweenAX.onComplete.add(()=> {
      sprBullet.destroy();
      // let hitted = this.player.faro.doTheActions();
      // console.log(this.player);
    }, this);
    
    // this.debugKeyO = this.game.input.keyboard.addKey(Phaser.Keyboard.O);
    // this.debugKeyO.onDown.add(()=> {}, this);
  }
}
