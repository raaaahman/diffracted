import 'pixi'
import 'p2'
import 'phaser'

import Boot from './states/Boot'
import Preloader from './states/Preloader'
import TitleScreen from './states/TitleScreen'
import Main from './states/Main'
import GameOver from './states/GameOver'

class Game extends Phaser.Game {

	constructor () {

		super(600, 400, Phaser.AUTO)

		this.state.add('boot', Boot)
		this.state.add('preloader', Preloader)
		this.state.add('titleScreen', TitleScreen)
		this.state.add('main', Main)
		this.state.add('gameOver', GameOver)

		this.state.start('boot')
	}
}

var game = new Game();
