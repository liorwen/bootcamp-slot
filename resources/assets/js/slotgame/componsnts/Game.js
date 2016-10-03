/**
 * Created by lyndon on 2016/9/21.
 */

export default class Game extends Phaser.Game {
    constructor () {
        super(384, 192, Phaser.AUTO, 'game-container', null);
        this.gameState = new GameState();
        this.state.add('GameState', this.gameState, false);
        this.state.start('GameState');

    }
}

class GameState extends Phaser.State {
    constructor () {
        super();
        this.background = null;
        this.capguy = null;
        this.capguyState = 'stop';

    }
    preload() {
        // this.load.image('background','../images/textures/background.png');
        this.load.atlasJSONHash('cityscene', '../images/textures/cityscene.png', '../images/textures/cityscene.json');
    }
    create() {
        this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
        this.background = this.add.sprite(0, 0, 'cityscene', 'background');
        this.background.scale.setTo(0.48,0.48);
        this.capguy = this.add.sprite(9.6, 168, 'cityscene', 'capguy/walk/0001');
        this.capguy.smoothed = true;
        this.capguy.anchor.setTo(0.5, 1);
        this.capguy.scale.setTo(0.24, 0.24);
        this.capguy.animations.add('wait', Phaser.Animation.generateFrameNames('capguy/walk/', 4, 4, '', 4), 10, true, false);
        this.capguy.animations.add('walk', Phaser.Animation.generateFrameNames('capguy/walk/', 1, 8, '', 4), 10, true, false);
        this.capguy.animations.play('wait');

        let gameContainer = document.getElementById("game-container");

        console.log('game-container width: '+ gameContainer.style.width);
        console.log('game-container height: '+ gameContainer.style.height);

        console.log('Viewport Width: ' + this.scale.viewportWidth);
        console.log('window.innerWidth: ' + window.innerWidth);
        console.log('window.outerWidth: ' + window.outerWidth);

        console.log('Viewport Height: ' + this.scale.viewportHeight);
        console.log('window.innerHeight: ' + window.innerHeight);
        console.log('window.outerHeight: ' + window.outerHeight);



        console.log('Document Width: ' + this.scale.documentWidth);
        console.log('Document Height: ' + this.scale.documentHeight);

        //  Device: How to get device size.

        //  Use window.screen.width for device width and window.screen.height for device height.
        //  .availWidth and .availHeight give you the device size minus UI taskbars. (Try on an iPhone.)
        //  Device size is static and does not change when the page is resized or rotated.


        console.log('window.screen.width: ' + window.screen.width);
        console.log('window.screen.availWidth: ' + window.screen.availWidth);
        console.log('window.screen.height: ' + window.screen.height);
        console.log('window.screen.availHeight: ' + window.screen.availHeight);
    }
    onStop() {
        this.capguyState = 'stop';
        this.capguy.animations.stop('walk');
        this.capguy.animations.play('wait');
    }
    onleft() {
        this.capguyState = 'left';
        this.capguy.scale.setTo(-0.24, 0.24);
        this.capguy.animations.stop('wait');
        this.capguy.animations.play('walk');
    }
    onRight() {
        this.capguyState = 'right';
        this.capguy.scale.setTo(0.24, 0.24);
        this.capguy.animations.stop('wait');
        this.capguy.animations.play('walk');
    }
    scaleMode1() {
        // this.scale.setGameSize(300,200);
        this.scale.setUserScale(0.24, 0.24);
    }
    scaleMode2() {
        this.scale.setUserScale(2, 2);
    }
    update() {
        switch ( this.capguyState )
        {
            case 'left':
                this.capguy.x -= 3;
                break;
            case 'right':
                this.capguy.x += 3;
                break;
        }

        if(this.capguy.x > 400)
        {
            this.capguy.x = -50;
        }
        if(this.capguy.x < -50)
        {
            this.capguy.x = 400;
        }
    }
}
