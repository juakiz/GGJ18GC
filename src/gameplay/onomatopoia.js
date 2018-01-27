class Onomatopoia {
    constructor() {

    }

    static show(xx, yy, _text, _game, _time) {
        var style = {
            font: "64px Bangers",
            fill: "#000000",
            boundsAlignH: "center",
            boundsAlignV: "middle"
        };
        var text = _game.add.text(xx, yy, _text, style);
        text.anchor.setTo(0.5)
        text.angle = -30+_game.rnd.integerInRange(0, 60)
        text.alpha = 0

        //	Stroke color and thickness
        text.stroke = '#FFFFFF';
        text.strokeThickness = 6;

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
    }
}
export default Onomatopoia