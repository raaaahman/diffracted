import 'pixi'
import 'p2'
import 'phaser'

import Boot from './states/Boot'
import Preload from './states/Preload'
import TitleScreen from './states/TitleScreen'
import Main from './states/Main'
import GameOver from './states/GameOver'

class Game extends Phaser.Game {

	constructor () {

		super(600, 400, Phaser.AUTO)

		this.state.add('Boot', Boot)
		this.state.add('Preload', Preload)
		this.state.add('TitleScreen', TitleScreen)
		this.state.add('Main', Main)
		this.state.add('GameOver', GameOver)

		this.state.start('Boot')
	}
}

var game = new Game();
