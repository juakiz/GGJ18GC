/* globals __DEV__ */
import Phaser from 'phaser'
// import Mushroom from '../sprites/Mushroom'
import Button from '../gameplay/button'
import ONO from '../gameplay/onomatopoia'
import SOUNDS from '../gameplay/sounds'

export default class extends Phaser.State {
    init() {
        console.log("GAME OVER")
    }
    create() {

        this.filter = null
        this.filterSprite = null

        var fragmentSrc = [

            "precision mediump float;",

            "uniform float     time;",
            "uniform vec2      resolution;",
            "uniform vec2      mouse;",

            "float noise(vec2 pos) {",
            "return fract(sin(dot(pos, vec2(12.9898 - time,78.233 + time))) * 43758.5453);",
            "}",

            "void main( void ) {",

            "vec2 normalPos = gl_FragCoord.xy / resolution.xy;",
            "float pos = (gl_FragCoord.y / resolution.y);",
            "float mouse_dist = length(vec2((mouse.x - normalPos.x) * (resolution.x / resolution.y) , mouse.y - normalPos.y));",
            "float distortion = clamp(1.0 - (mouse_dist + 0.1) * 3.0, 0.0, mouse.x);",

            "pos -= (distortion * distortion) * 0.1;",

            "float c = sin(pos * 400.0) * 0.4 + 0.4;",
            "c = pow(c, 0.2);",
            "c *= 0.2;",

            "float band_pos = fract(time * 0.1) * 3.0 - 1.0;",
            "c += clamp( (1.0 - abs(band_pos - pos) * 10.0), 0.0,mouse.x) * 0.1;",

            "c += distortion * 0.08;",
            "// noise",
            "c += (noise(gl_FragCoord.xy) - 0.5) * (0.1);",


            "gl_FragColor = vec4( c, c, c, mouse.x );",
            "}"
        ];
        /*
        this.filter = new Phaser.Filter(this.game, null, fragmentSrc);
        this.filter.setResolution(1280, 720);

        this.filterSprite = game.add.sprite();
        this.filterSprite.width = 1280;
        this.filterSprite.height = 720;

        this.filterSprite.filters = [this.filter];

        */




        this.spritel = this.game.add.sprite(this.game.width / 2, this.game.height / 2-100, 'start');
        this.spritel.anchor.setTo(0.5)
        this.spritel.scale.setTo(0.6)

        var style = {
            font: "64px Chela One",
            fill: "#000000",
            boundsAlignH: "center",
            boundsAlignV: "middle"
        };	
        var addText = ""
        //addText = "Player xxx Wins!"
        var text = this.game.add.text(this.game.width/2, this.game.height/2+100, "GAME OVER!\n"+addText, style);
        text.anchor.setTo(0.5)

        var style = {
            font: "20px Chela One",
            fill: "#000000",
            boundsAlignH: "center",
            boundsAlignV: "middle"
        };
        var text = this.game.add.text(140,80, "BirbTeam:\nCoding: Mattia Fortunati, Joaquin Monte\nArt: Daniela Arienti\nMusic: Valerio Silvetti", style);
        text.alpha = 0.8

        //this.playButton = new Button(this, this.game.width / 2, this.game.height / 3 * 2, "PLAY", this.goToGame)

        this.graphics = this.game.add.graphics(0, 0);
        this.graphics.beginFill(0x000000, 1);
        this.graphics.drawRect(0, 0, this.game.width, this.game.height);
        this.graphics.endFill();
        this.graphics.alpha = 0

        this.sprite = this.game.add.sprite(this.game.width / 2, this.game.height / 2, 'tvFrame');
        this.sprite.anchor.setTo(0.5)
        this.sprite.scale.setTo(0.8)


        /*
        this.filter.value = 300
        this.game.add.tween(this.filter).to({
            value: 0,
        }, 1000, Phaser.Easing.Quadratic.InOut, true);
        */
        this.canPress = true

        this.game.input.keyboard.addCallbacks(this, function() {
            var keyboard = this.game.input.keyboard;
            keyboard.onDownCallback = keyboard.onUpCallback = keyboard.onPressCallback = null;
            if (this.canPress == true) {
                this.canPress = false
                this.goToGame()
            }
        });

    }
    goToGame() {

        ONO.show(this.game.width / 2, this.game.height / 2, "Kree!", this.game, 1000, 6, null)
        SOUNDS.playFx(this.game, "skraa")

        var tw = this.game.add.tween(this.graphics).to({
            alpha: 1
        }, 1000, Phaser.Easing.Quadratic.In, true);

        tw.onComplete.add(function() {
            this.state.start('Game')
        }, this)


    }

    update() {
        //this.filter.update({x:this.filter.value});
    }
}