import { EndScreen } from "./endscreen.js"
import { GameObject } from "./gameobject.js"
import { GameScreen } from "./gamescreen.js"
import { StartScreen } from "./startscreen.js"

export class Game {

    private screen:GameObject

    constructor(){
        this.screen = new StartScreen(this)
        this.gameLoop()
    }

    public showGameScreen(){
        this.screen = new GameScreen(this)
    }

    public showEndScreen(){
        this.screen = new EndScreen(this)
    }

    private gameLoop(){
        this.screen.update()
        requestAnimationFrame(()=>this.gameLoop())
    }
}

new Game()