export default class Bullet extends Phaser.Group {
  constructor(game, parent, x, y) {
    super(game, parent);

    this.x = x;
    this.y = y;

    // this.init();
  }

  shoot(tweenData)
  {    
    this.sprBullet = this.game.add.sprite(0, 0, 'bullet');
    this.sprBullet.anchor.set(0.5);
    this.add(this.sprBullet);
    console.log(tweenData);

    let tweenAX = this.game.add.tween(this.sprBullet).to({x: '+' + tweenData.axisX}, tweenData.time);
    let tweenAY = this.game.add.tween(this.sprBullet).to({y: '-' + tweenData.axisY}, tweenData.time / 2, Phaser.Easing.Quadratic.Out);
    let tweenBY = this.game.add.tween(this.sprBullet).to({y: '+' + tweenData.axisY}, tweenData.time / 2, Phaser.Easing.Quadratic.In);
    tweenAY.chain(tweenBY);
    tweenAY.start();
    tweenAX.start();
    
    // this.debugKeyO = this.game.input.keyboard.addKey(Phaser.Keyboard.O);
    // this.debugKeyO.onDown.add(()=> {}, this);
  }
}
