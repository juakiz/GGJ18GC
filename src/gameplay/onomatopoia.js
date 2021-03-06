class Onomatopoia {
    constructor() {

    }

    static show(xx, yy, _text, _game, _time, _size, _par) {
        var style = {
            font: "64px Chela One",
            fill: "#000000",
            boundsAlignH: "center",
            boundsAlignV: "middle"
        };
        var text = _game.add.text(xx, yy, _text, style);
        text.anchor.setTo(0.5)
        text.angle = -30 + _game.rnd.integerInRange(0, 60)
        text.alpha = 0

        text.scale.setTo(0.25*_size)

        //	Stroke color and thickness
        text.stroke = '#FFFFFF';
        text.strokeThickness = 1 * _size;

        var tw1 = _game.add.tween(text).to({
            alpha: 1
        }, 100, Phaser.Easing.Quadratic.InOut, true);
        var tw2 = _game.add.tween(text).to({
            alpha: 0
        }, _time, Phaser.Easing.Quadratic.InOut, false);
        tw1.chain(tw2)
        tw2.onComplete.add(function() {
            text.destroy()
        }, this)

        if (_par!= null){
        	_par.add(text)
        }
    }
}
export default Onomatopoia