import GUI from '../classes/GUI.js'
import Level from '../classes/Level.js'

class Main extends Phaser.State {

	create () {

		let buttons = [
			{label: 'Back to menu', fn: this.toMenu },
			{label: 'Restart Level', fn: this.reset, sound: 'reset'}
		]

		var gameUI = new GUI (this, 0, this.world.height - 45, buttons, 90, 25, 370, 20, 10, 'horizontal', {font: '12px Arial', fill:'#fff'}, 'click' )

		var level = new Level (this, 'simple-room', 'tileset')

	}

	//State transition functions
	toMenu () {
		this.state.start('titleScreen')
	}

	reset () {
		this.state.start('main')
	}
}

export default Main
