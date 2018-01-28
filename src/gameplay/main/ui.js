import ONO from '../onomatopoia'
import SOUNDS from '../sounds'

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

        this.birdRight = this.createChar("right")
        this.birdLeft = this.createChar("left")

        this.game.time.events.add(500, function() {
            this.birdLeft.show()
            SOUNDS.playFx(this.game, "flap")
            ONO.show(-350, this.birdLeft.mainGroup.y, "Flap", this.game, 500, 4, this)
        }, this)

        this.game.time.events.add(1000, function() {
            this.birdLeft.showName("Captain Hawk")
        }, this)

        this.game.time.events.add(1500, function() {
            this.birdLeft.talk("Chirp! They are attacking\nour ship!", 2000)
            SOUNDS.playFx(this.game, "caca")
        }, this)

        this.game.time.events.add(4500, function() {
            this.birdRight.show()
            SOUNDS.playFx(this.game, "flap")
            ONO.show(350, this.birdLeft.mainGroup.y, "Flap", this.game, 500, 4, this)
        }, this)

        this.game.time.events.add(5000, function() {
            this.birdRight.showName("Cacaptain Tua")
        }, this)

        this.game.time.events.add(5500, function() {
            this.birdRight.talk("CACACAACACACACACA!\nSKRAAAAA!", 2000)
            SOUNDS.playFx(this.game, "skraa")
        }, this)

        this.game.time.events.add(8500, function() {
            this.birdRight.hide()
            this.birdLeft.hide()
            this.game.add.tween(this.graphics).to({
                alpha: 0
            }, 200, Phaser.Easing.Quadratic.InOut, true);
        }, this)




    }


    showSideCharacter(_side, _mood) {
        var _text = ""
        if (_mood == "good") {
            var rndT = ["Kree! SMAAAASH!", "Kawhahaha!!", "hoo hoorray!"]
            _text = rndT[this.game.rnd.integerInRange(0, 2)]
            SOUNDS.playFx(this.game, "caca")
        } else {
            var rndT = ["*chitter*", "Skraaaaap!", "ku-whuuuut?"]
            _text = rndT[this.game.rnd.integerInRange(0, 2)]
            SOUNDS.playFx(this.game, "skraa")
        }
        var CH = this.createCharSmall(_side)
        CH.show()
        var _name = "Captain Hawk"
        if (_side == "right") {
            _name = "Cacaptain Tua"
        }
        CH.showName(_name)
        CH.talk(_text, 1500)

        //SOUNDS.playFx(this.game, "flap")
        //ONO.show(_side == "left" ? -350 : 350, CH.mainGroup.y, "Flap", this.game, 500, 4, this)

        this.game.time.events.add(2000, function() {
            CH.hide()
        }, this)
    }


    createEffectExplosion(xx, yy) {
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

    createEffectWater(xx, yy) {
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







    /////////////////////////// INTERNAL

    createCharSmall(side) {



        var _obj = {}
        _obj.mainGroup = this.game.add.group()
        this.add(_obj.mainGroup)

        _obj.mainGroup.scale.setTo(0.5)

        if (side == "right") {
            _obj.mainGroup.x = 1500 - 640
            _obj.mainGroup.y = 500 - 360 - 280
            _obj.finalX = 1000 - 640 + 140
            _obj.sprite1 = "cacatua_complete"
            _obj.sprite2 = "cacatua_CRAZYCRAA"
            _obj.startX = 1500 - 640
        } else {
            _obj.mainGroup.x = -300 - 640
            _obj.mainGroup.y = 500 - 360 + 50
            _obj.finalX = 200 - 640 - 100
            _obj.sprite1 = "hawk_complete"
            _obj.sprite2 = "hawk_CRAZYCRAA"
            _obj.startX = -300 - 640
        }

        _obj.side = side



        _obj.sprite = this.game.add.sprite(0, 0, _obj.sprite1)
        _obj.sprite.anchor.setTo(0.5)
        _obj.mainGroup.add(_obj.sprite)

        _obj.pigeon = this.game.add.sprite(side == "left" ? -130 : 130, 100, "pigeon")
        _obj.pigeon.anchor.setTo(0.5)
        _obj.pigeon.scale.setTo(side == "left" ? 0.8 : -0.8, 0.8)
        _obj.mainGroup.add(_obj.pigeon)

        this.game.add.tween(_obj.pigeon).to({
            angle: 4
        }, 1000, Phaser.Easing.Quadratic.InOut, true, true, -1, true);

        _obj.game = this.game

        _obj.show = function() {
            this.game.add.tween(this.mainGroup).to({
                x: this.finalX
            }, 500, Phaser.Easing.Quadratic.InOut, true);
        }

        _obj.hide = function() {
            var tw = this.game.add.tween(this.mainGroup).to({
                x: this.startX
            }, 500, Phaser.Easing.Quadratic.InOut, true);
            tw.onComplete.add(this.mainGroup.destroy, this.mainGroup)
        }

        _obj.talk = function(_text, time) {
            this.grpDialog = this.game.add.group()
            this.mainGroup.add(this.grpDialog)
            this.grpDialog.x = -300
            this.grpDialog.y = -300

            this.baloon = this.game.add.sprite(0, 0, "baloon")
            this.baloon.anchor.setTo(0.5)
            this.baloon.scale.setTo(0.8)
            this.grpDialog.add(this.baloon)

            this.sprite.loadTexture(this.sprite2)

            var style = {
                font: "50px Chela One",
                fill: "#000000",
                boundsAlignH: "center",
                boundsAlignV: "middle"
            };
            this.dialogText = this.game.add.text(0, -45, _text, style);
            this.dialogText.anchor.setTo(0.5)
            this.grpDialog.add(this.dialogText)

            if (this.side == "left") {
                this.baloon.scale.setTo(-0.8, 0.8)
                this.grpDialog.x += 620
            }

            this.grpDialog.alpha = 0
            this.game.add.tween(this.grpDialog).to({
                alpha: 1
            }, 1000, Phaser.Easing.Quadratic.InOut, true);

            this.game.time.events.add(time, function() {
                this.sprite.loadTexture(this.sprite1)
                var tw = this.game.add.tween(this.grpDialog).to({
                    alpha: 0
                }, 1000, Phaser.Easing.Quadratic.InOut, true);
                tw.onComplete.add(this.grpDialog.destroy, this.grpDialog)

            }, this);

        }

        _obj.showName = function(_name) {
            if (_name != null && _name != "") {
                this.grpName = this.game.add.group()
                this.mainGroup.add(this.grpName)
                this.grpName.x = 130
                this.grpName.y = 200

                this.banner = this.game.add.sprite(0, 0, "banner")
                this.banner.anchor.setTo(0.5)
                this.banner.scale.setTo(1.5)
                this.grpName.add(this.banner)



                var style = {
                    font: "50px Chela One",
                    fill: "#000000",
                    boundsAlignH: "center",
                    boundsAlignV: "middle"
                };
                this.text = this.game.add.text(-30, 8, _name, style);
                this.text.anchor.setTo(0.5)
                this.grpName.add(this.text)

                if (this.side == "left") {
                    this.banner.scale.setTo(-1.5, 1.5)
                    this.banner.x -= 220
                    this.text.x -= 140
                }

                this.grpName.alpha = 0
                this.game.add.tween(this.grpName).to({
                    alpha: 1
                }, 500, Phaser.Easing.Quadratic.InOut, true);

            }
        }


        /*
        action watch(animated) -
            action scree(animated) -
            action regualar(still)
            */

        return _obj
    }





    createChar(side) {



        var _obj = {}
        _obj.mainGroup = this.game.add.group()
        this.add(_obj.mainGroup)

        if (side == "right") {
            _obj.mainGroup.x = 1600 - 640
            _obj.mainGroup.y = 500 - 360
            _obj.finalX = 1000 - 640
            _obj.sprite1 = "cacatua_complete"
            _obj.sprite2 = "cacatua_CRAZYCRAA"
            _obj.startX = 1500 - 640
        } else {
            _obj.mainGroup.x = -300 - 640
            _obj.mainGroup.y = 500 - 360
            _obj.finalX = 200 - 640
            _obj.sprite1 = "hawk_complete"
            _obj.sprite2 = "hawk_CRAZYCRAA"
            _obj.startX = -300 - 640
        }

        _obj.side = side



        _obj.sprite = this.game.add.sprite(0, 0, _obj.sprite1)
        _obj.sprite.anchor.setTo(0.5)
        _obj.mainGroup.add(_obj.sprite)

        _obj.pigeon = this.game.add.sprite(side == "left" ? -130 : 130, 120, "pigeon")
        _obj.pigeon.anchor.setTo(0.5)
        _obj.pigeon.scale.setTo(side == "left" ? 0.8 : -0.8, 0.8)
        _obj.mainGroup.add(_obj.pigeon)

        this.game.add.tween(_obj.pigeon).to({
            angle: 4
        }, 1000, Phaser.Easing.Quadratic.InOut, true, true, -1, true);

        _obj.game = this.game

        _obj.show = function() {
            this.game.add.tween(this.mainGroup).to({
                x: this.finalX
            }, 500, Phaser.Easing.Quadratic.InOut, true);
        }

        _obj.hide = function() {
            var tw = this.game.add.tween(this.mainGroup).to({
                x: this.startX
            }, 500, Phaser.Easing.Quadratic.InOut, true);
            tw.onComplete.add(this.mainGroup.destroy, this.mainGroup)
        }

        _obj.talk = function(_text, time) {
            this.grpDialog = this.game.add.group()
            this.mainGroup.add(this.grpDialog)
            this.grpDialog.x = -300
            this.grpDialog.y = -300

            this.baloon = this.game.add.sprite(0, 0, "baloon")
            this.baloon.anchor.setTo(0.5)
            this.baloon.scale.setTo(0.8)
            this.grpDialog.add(this.baloon)

            this.sprite.loadTexture(this.sprite2)

            var style = {
                font: "50px Chela One",
                fill: "#000000",
                boundsAlignH: "center",
                boundsAlignV: "middle"
            };
            this.dialogText = this.game.add.text(0, -45, _text, style);
            this.dialogText.anchor.setTo(0.5)
            this.grpDialog.add(this.dialogText)

            if (this.side == "left") {
                this.baloon.scale.setTo(-0.8, 0.8)
                this.grpDialog.x += 620
            }

            this.grpDialog.alpha = 0
            this.game.add.tween(this.grpDialog).to({
                alpha: 1
            }, 1000, Phaser.Easing.Quadratic.InOut, true);

            this.game.time.events.add(time, function() {
                this.sprite.loadTexture(this.sprite1)
                var tw = this.game.add.tween(this.grpDialog).to({
                    alpha: 0
                }, 1000, Phaser.Easing.Quadratic.InOut, true);
                tw.onComplete.add(this.grpDialog.destroy, this.grpDialog)

            }, this);

        }

        _obj.showName = function(_name) {
            if (_name != null && _name != "") {
                this.grpName = this.game.add.group()
                this.mainGroup.add(this.grpName)
                this.grpName.x = 130
                this.grpName.y = 160

                this.banner = this.game.add.sprite(0, 20, "banner")
                this.banner.anchor.setTo(0.5)
                this.banner.scale.setTo(1.5)
                this.grpName.add(this.banner)



                var style = {
                    font: "50px Chela One",
                    fill: "#000000",
                    boundsAlignH: "center",
                    boundsAlignV: "middle"
                };
                this.text = this.game.add.text(-30, 28, _name, style);
                this.text.anchor.setTo(0.5)
                this.grpName.add(this.text)

                if (this.side == "left") {
                    this.banner.scale.setTo(-1.5, 1.5)
                    this.banner.x -= 220
                    this.text.x -= 140
                }

                this.grpName.alpha = 0
                this.game.add.tween(this.grpName).to({
                    alpha: 1
                }, 500, Phaser.Easing.Quadratic.InOut, true);

            }
        }


        /*
        action watch(animated) -
            action scree(animated) -
            action regualar(still)
            */

        return _obj
    }


}