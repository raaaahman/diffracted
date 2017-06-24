import GUI from '../classes/GUI.js'

class TitleScreen extends Phaser.State {

	create () {

		let buttons = [
			{	label: 'Start Game',	fn: this.startGame, sound: 'start' }
		]

		new GUI (this, this.world.centerX - 55, this.world.centerY - 12 , buttons, 90, 25, 10, 10, 10, 'vertical', {	font: '16px Arial',	fill: '#fff' }, 'click' )
	}

	startGame() {
		this.state.start('main')
	}
}

export default TitleScreen
