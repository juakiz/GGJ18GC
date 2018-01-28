class Sounds {
    constructor() {

    }

    static setupSounds(_game){
        _game.customSounds = []
        _game.customSounds["bgm"] = _game.add.audio('bgm');
        _game.customSounds["boom"] = _game.add.audio('boom');
        _game.customSounds["caca"] = _game.add.audio('caca');
        _game.customSounds["coo"] = _game.add.audio('coo');
        _game.customSounds["flap"] = _game.add.audio('flap');
        _game.customSounds["frush"] = _game.add.audio('frush');
        _game.customSounds["scream"] = _game.add.audio('scream');
        _game.customSounds["shoot"] = _game.add.audio('shoot');
        _game.customSounds["skraa"] = _game.add.audio('skraa');
        _game.customSounds["water"] = _game.add.audio('water');
        _game.customSounds["wood"] = _game.add.audio('wood');
    }

    static playFx(_game,_name) {
        _game.customSounds[_name].play()
    }

    static playBgm(_game) {
        _game.customSounds["bgm"].loopFull()
    }
        
}
export default Sounds