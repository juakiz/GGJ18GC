import ONO from '../onomatopoia'

export default class UI extends Phaser.Group {
    constructor(game, parent) {
        super(game, parent);
    }

    showCinematic() {

        this.graphics = this.game.add.graphics(0, 0);
        this.graphics.beginFill(0x000000, 1);
        this.graphics.drawRect(-this.game.width / 2, -this.game.height / 2, this.game.width, this.game.height);
        this.graphics.endFill();
        this.graphics.alpha = 0
        this.add(this.graphics)

        this.game.add.tween(this.graphics).to({
            alpha: 0.5
        }, 200, Phaser.Easing.Quadratic.InOut, true);

        this.birdRight = this.game.add.sprite(0, 0, "hawk_complete")
        this.birdRight.anchor.setTo(0.5)
        this.birdRight.scale.setTo(0.8)
        this.add(this.birdRight)

        this.birdRight.x = this.game.width / 2 + this.birdRight.width / 2
        this.birdRight.y = this.game.height / 2 - this.birdRight.height / 2




        this.game.add.tween(this.birdRight).to({
            x: this.game.width / 2 - this.birdRight.width / 2
        }, 1000, Phaser.Easing.Quadratic.InOut, true);

        /*
        this.game.time.events.add(Phaser.Timer.SECOND * 0.5, function() {
            ONO.show(this.game.width - this.birdRight.width / 2, this.birdRight.y + this.birdRight.height / 2 + 200, "Swooosh", this.game, 1000, 2)

        }, this);
        */

        var style = {
            font: "64px Chela One",
            fill: "#000000",
            boundsAlignH: "center",
            boundsAlignV: "middle"
        };
        this.text = this.game.add.text(820, 310, "Captain Hawk", style);
        this.text.anchor.setTo(0.5)
        this.add(this.text)

        this.game.time.events.add(Phaser.Timer.SECOND * 1, function() {

            this.game.add.tween(this.text).to({
                x: 440
            }, 1000, Phaser.Easing.Quadratic.InOut, true);

        }, this);



        this.birdLeft = this.game.add.sprite(0, 0, "hawk_complete")
        this.birdLeft.anchor.setTo(0.5)
        this.birdLeft.scale.setTo(0.8)
        this.add(this.birdLeft)

        this.birdLeft.x = -this.game.width / 2 - this.birdLeft.width / 2
        this.birdLeft.y = this.game.height / 2 - this.birdLeft.height / 2

        this.text2 = this.game.add.text(-850, 310, "Cacaptain Tua", style);
        this.text2.anchor.setTo(0.5)
        this.add(this.text2)

        this.game.time.events.add(Phaser.Timer.SECOND * 1.5, function() {

            this.game.add.tween(this.birdLeft).to({
                x: -this.game.width / 2
            }, 1000, Phaser.Easing.Quadratic.InOut, true);

        }, this);

        this.game.time.events.add(Phaser.Timer.SECOND * 2, function() {

            this.game.add.tween(this.text2).to({
                x: -450
            }, 1000, Phaser.Easing.Quadratic.InOut, true);

        }, this);

    }




    ///////////////////////////
    createCharRight(xx, yy, _name, _text) {

        var _obj = {}

        _obj.mainGroup = this.game.add.group()

        if (_name != null && _name != "") {
            //name appearing
        }
        if (_text != null && _text != "") {
            //bubble appearing
        }

        /*
        action watch(animated) -
            action scree(animated) -
            action regualar(still)
            */

        return _grp
    }
}