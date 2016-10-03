<template>
    <div class="container" v-touch:pressup="onStop" v-touch:panend="onStop">
        <h1>Demo Game</h1>
        <div class="game-container" id="game-container" >

        </div>
        <div class="toolbar">
            <span>
                <label for="left">
                    <div class="spinButton" v-touch:press="onLeft"  v-touch:pressup="onStop">left</div>
                </label>
            </span>
            <span>
                <label for="right">
                    <div class="spinButton" v-touch:press="onRight"  v-touch:pressup="onStop">right</div>
                </label>
            </span>
            <span>
                <label for="mode1">
                    <div class="spinButton" v-touch:tap="changeMode1">mode1</div>
                </label>
            </span>
            <span>
                <label for="mode2">
                    <div class="spinButton" v-touch:tap="changeMode2">mode2</div>
                </label>
            </span>
        </div>
    </div>
</template>
<script>

    import Game from './componsnts/Game.js';
    let game = new Game();


    export default{
        data() {
            return {
                playerState:"stop",
                event:""
            }
        },
        ready() {

        },
        methods: {
            changeMode1(event) {
                game.gameState.scaleMode1();
            },
            changeMode2(event) {
                game.gameState.scaleMode2();
            },
            onLeft() {
                console.log('left');
                this.playerState = 'left';
                game.gameState.onleft();
            },
            onRight() {
                console.log('right');
                this.playerState = 'right';
                game.gameState.onRight();
            },
            onStop() {
                console.log('stop');
                this.playerState = 'stop';
                game.gameState.onStop();
            }
        }
    }


</script>
