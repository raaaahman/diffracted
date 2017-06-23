import GUI from '../classes/GUI.js'

class TitleScreen extends Phaser.State {

	create () {
		let buttons = [
			{	label: 'Dummy',	fn: this.buttonClick }
		]

		new GUI (this, 20, 20, buttons, 90, 25, 10, 10, 'horizontal', {
			font: '16px Arial',
			fill: '#fff'
		} )
	}

	buttonClick () {
		console.log('Clicked')
	}
}

export default TitleScreen
