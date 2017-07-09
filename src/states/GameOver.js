import GUI from '../classes/GUI.js'

class GameOver extends Phaser.State {
	create () {
		let buttons = [
			{label:'Back to menu', fn: function () {this.state.start('titleScreen')}}
		]

		this.gui = new GUI (this, this.stage.width / 2 - 45, 345, buttons)

		this.add.text(150, 120,
		'Thank you for playing! \n Game developed with Phaser \n Code and "art" by raaaahman \n Sounds from p0ss on opengameart.com', {	font: '16px Arial',	fill: '#fff', align: 'center'})
	}
}

export default GameOver
