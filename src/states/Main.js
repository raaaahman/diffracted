import GUI from '../classes/GUI.js'
import Level from '../classes/Level.js'
import Player from '../classes/Player.js'
import Controller from '../classes/Controller.js'
import game from '../index.js'

class Main extends Phaser.State {

	create () {

		let buttons = [
			{label: 'Back to menu', fn: this.toMenu },
			{label: 'Restart Level', fn: this.reset, sound: 'reset'}
		]

		this.gui = new GUI (this, 0, this.world.height - 45, buttons, 90, 25, 370, 20, 10, 'horizontal', {font: '12px Arial', fill:'#fff'}, 'click' )

		this.level = new Level (this, 'colors', 'tileset')

		this.physics.startSystem(Phaser.Physics.ARCADE)
		this.physics.arcade.gravity.y = 1400

		this.player = new Player (this, 320, 245, 'blue')

		this.controller = new Controller (this, [Phaser.KeyCode.Q, Phaser.KeyCode.D, Phaser.KeyCode.Z],
			[{entities: [this.player], function:'move', params:'left'},
			{entities: [this.player], function:'move', params:'right'},
			{entities: [this.player], function:'jump', params: ''}]
		)

		/*Player controls
		this.controls = this.input.keyboard.addKeys (
			{
				'up': Phaser.KeyCode.Z,
				'down': Phaser.KeyCode.S,
				'left': Phaser.KeyCode.Q,
				'right': Phaser.KeyCode.D
			}
		)*/
		/*
		console.log(this.level.map instanceof Phaser.Tilemap)
		console.log(this.player.sprite instanceof Phaser.Sprite)
		console.log(this.level.walls instanceof Phaser.TilemapLayer)
		*/

	}

	update () {

	/*	let tileAt = this.level.map.getTile(
			Math.floor(this.player.sprite.body.x / 32),
			Math.floor(this.player.sprite.body.y / 32),
			1
		)
		if (tileAt) {
			console.log(tileAt.index)
		}*/
		/*if (this.player.color !== 'white') {
			this.physics.arcade.collide(this.player.spite, this.level[this.player.color])
		}*/
		let collideWith = [this.level.white]

		if (this.player.color != 'white') {
			collideWith[1] = this.level[this.player.color]
		}

		this.physics.arcade.collide(this.player.sprite, collideWith)

		this.player.stop()

		/*this.player.updatePos()

		if (this.controls.up.isDown && !this.controls.down.isDown) { this.player.setDir('up') }
		if (this.controls.down.isDown && !this.controls.up.isDown) { this.player.setDir('down') }
		if (this.controls.left.isDown && !this.controls.right.isDown) { this.player.setDir('left') }
		if (this.controls.right.isDown && !this.controls.left.isDown) { this.player.setDir('right') }

		if (this.player.isMoving) {
			this.player.move()
		} else {
			this.player.sprite.animations.stop()
		}*/
		if(this.player.sprite.body.x > this.level.map.widthInPixels) {
			this.player.sprite.body.x = 1
		} else if (this.player.sprite.body.x < 0) {
			this.player.sprite.body.x = this.level.map.widthInPixels - 33
		}

		if(this.player.sprite.body.y > this.level.map.heightInPixels) {
			this.player.sprite.body.y = 1
		} else if (this.player.sprite.body.y < 0) {
			this.player.sprite.body.y = this.level.map.heightInPixels - 65
		}

		this.controller.checkControls()

		//this.player.update()
	}

	render () {
		//game.debug.bodyInfo(this.player.sprite, 5, 20)
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
