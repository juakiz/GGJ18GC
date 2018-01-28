export default class Ship extends Phaser.Group {
  constructor(game, parent) {
    super(game, parent);

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
    
    this.debugKeyP = this.game.input.keyboard.addKey(Phaser.Keyboard.P);
    this.debugKeyP.onDown.add(this.swingShip, this);

    // Ship movements
    this.tweenAX = this.game.add.tween(this).to({ x: 300 }, 2000);
    this.tweenBX = this.game.add.tween(this).to({ x: -300 }, 2000);
    this.tweenAX.chain(this.tweenBX);
    this.tweenBX.chain(this.tweenAX);
  }

  swingShip()
  {
    this.tweenAX.start();
  }

  swingCannon()
  {
    // if ()
    // {

    // }
  }
}
