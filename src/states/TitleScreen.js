import GUI from '../classes/GUI.js'
import game from '../index.js'

class TitleScreen extends Phaser.State {

	create () {

		let buttons = [
			{	label: 'Start Game',	fn: this.startGame, sound: 'start' }
		]

		new GUI (this, this.stage.width / 2 - 55, this.stage.height / 2 - 12 , buttons, 90, 25, 10, 10, 10, 'vertical', {	font: '16px Arial',	fill: '#fff' }, 'click' )

		game.curLevel = 1
	}

	startGame() {
		this.state.start('main')
	}
}

export default TitleScreen
