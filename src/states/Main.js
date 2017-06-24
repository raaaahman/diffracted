import GUI from '../classes/GUI.js'
import Level from '../classes/Level.js'
import Player from '../classes/Player.js'

class Main extends Phaser.State {

	create () {

		let buttons = [
			{label: 'Back to menu', fn: this.toMenu },
			{label: 'Restart Level', fn: this.reset, sound: 'reset'}
		]

		this.gui = new GUI (this, 0, this.world.height - 45, buttons, 90, 25, 370, 20, 10, 'horizontal', {font: '12px Arial', fill:'#fff'}, 'click' )

		this.level = new Level (this, 'simple-room', 'tileset')

		this.player = new Player (this)

		//Player controls
		this.controls = this.input.keyboard.addKeys (
			{
				'up': Phaser.KeyCode.Z,
				'down': Phaser.KeyCode.S,
				'left': Phaser.KeyCode.Q,
				'right': Phaser.KeyCode.D
			}
		)

	}

	update () {

		if (this.controls.up.isDown) { this.player.move() }

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
