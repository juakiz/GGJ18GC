

export default class Button extends Phaser.Group {
  constructor(callbackParent, xx, yy, _text, _callback, parent) {
    super(callbackParent.game);

    this.callbackParent = callbackParent
    this.game = game
    this.x = xx
    this.y = yy
    this.textValue = _text
    this.clickCallback = _callback

    this.create()
  }

  create(){
  	this.sprite =  this.game.add.sprite(0, 0, 'buttonSpr');
  	this.sprite.anchor.setTo(0.5)
  	this.add(this.sprite)

  	var style = { font: "64px Bangers", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

    this.text = game.add.text(0, -5, this.textValue, style);
    this.text.anchor.setTo(0.5)
    this.add(this.text)

    this.sprite.inputEnabled = true;
    this.sprite.events.onInputDown.add(this.clickDown, this);

  }

  clickDown(){
  	this.sprite.inputEnabled = false
  	this.clickCallback.call(this.callbackParent)
  }
}