import Background from './main/background';
import Bubble from './main/bubble';
import ShipFight from './main/ship-fight';
import UI from './main/ui';

export default class MainGameplay extends Phaser.Group {
    constructor(game) {
        super(game);

        // this.game = game;
        this._state = game.state.getCurrentState();

        this.init();

        this.x = this.game.width / 2
        this.y = this.game.height / 2

        this.WIDTH = 1280;
        this.HEIGHT = 720;
    }

    init() {
        this.bg = new Background(this.game, this);
        this.shipFight = new ShipFight(this.game, this);
        this.bubble = new Bubble(this.game, this);
        this.ui = new UI(this.game, this);

        // const bannerText = 'Ciao Mattia'
        // let banner = this.game.add.text(0,0, bannerText, {
        //     font: '40px Bangers',
        //     fill: '#77BFA3',
        //     smoothed: false
        // })
        // this.add(banner)

        // banner.padding.set(10, 16)
        // banner.anchor.setTo(0.5)
        this.graphics = this.game.add.graphics(0,0);
        this.graphics.beginFill(0x000000, 1);
        this.graphics.drawRect(-this.game.width/2, -this.game.height/2, this.game.width, this.game.height);
        this.graphics.endFill();
        this.graphics.alpha = 11
        this.add(this.graphics)
    }

    zoomIn() {
        this.game.add.tween(this.scale).to({
            x: 1,
            y: 1
        }, 1000, Phaser.Easing.Quadratic.InOut, true);
    }

    zoomOut() {
        this.game.add.tween(this.scale).to({
            x: 0.8,
            y: 0.8
        }, 1000, Phaser.Easing.Quadratic.InOut, true);
    }

    fadeIn() {
        this.bringToTop(this.graphics)
        var tw = this.game.add.tween(this.graphics).to({
            alpha: 0
        }, 1000, Phaser.Easing.Quadratic.In, true);

        tw.onComplete.add(function() {
            //DO SOMETHING?
        }, this)
    }

    fadeOut() {
this.bringToTop(this.graphics)

        var tw = this.game.add.tween(this.graphics).to({
            alpha: 1
        }, 1000, Phaser.Easing.Quadratic.In, true);

        tw.onComplete.add(function() {
            //DO SOMETHING?
        }, this)
    }
}
