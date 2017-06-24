import GUI from '../classes/GUI.js'

class TitleScreen extends Phaser.State {

	create () {
		let buttons = [
			{	label: 'Dummy',	fn: this.buttonClick, sound: 'click' },
			{ label: 'Double', fn: this.buttonClick }
		]

		new GUI (this, 20, 20, buttons, 90, 25, 10, 10, 10, "horizontal" )
	}

	buttonClick () {
		console.log('Clicked')
	}
}

export default TitleScreen
