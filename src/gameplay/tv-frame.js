export default class TvFrame extends Phaser.Group {
    constructor(game) {
        super(game);

        this.create()
        this.x = this.game.width / 2
        this.y = this.game.height / 2
    }

    create() {

        this.sprite = this.game.add.sprite(0, 0, 'tvFrame');
        this.sprite.anchor.setTo(0.5)
        this.add(this.sprite)

        this.scale.setTo(0.8)
    }

    zoomIn() {
        this.game.add.tween(this.scale).to({
            x: 0.8,
            y: 0.8
        }, 1000, Phaser.Easing.Quadratic.InOut, true);
    }

    zoomOut() {
        this.game.add.tween(this.scale).to({
            x: 1,
            y: 1
        }, 1000, Phaser.Easing.Quadratic.InOut, true);
    }
}