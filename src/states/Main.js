import GUI from '../classes/GUI.js'
import Level from '../classes/Level.js'
import Player from '../classes/Player.js'
import Controller from '../classes/Controller.js'
import Portal from '../classes/Portal.js'
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

		this.portal = new Portal (this, 480, 224)

		this.players = [
			new Player (this, 300, 245, 'white')/*,
			new Player (this, 320, 245, 'blue'),
			new Player (this, 380, 245, 'green'),
			new Player (this, 240, 245,  'red')*/
		]

		//this.players[0].sprite.kill()



		this.controller = new Controller (this, [Phaser.KeyCode.Q, Phaser.KeyCode.D, Phaser.KeyCode.Z],
			[{entities: this.players, function:'move', params:'left'},
			{entities: this.players, function:'move', params:'right'},
			{entities: this.players, function:'jump', params: ''}]
		)

		this.frameCount = 0
	}

	update () {

		for (let nb = 0; nb < this.players.length; nb++) {

			if (this.players[nb].sprite.exists) {
				let collideWith = [this.level.white]
				let overlapAction = {over: [], callback: null }

				//Set overlap behavior and collisions for players
				if (this.players[nb].color != 'white') {
					collideWith[1] = this.level[this.players[nb].color]
					if (nb === this.players.length - 1) {
						overlapAction.over = [
							this.players[nb - 1].sprite,
							this.players[this.players.length % 3].sprite
						]
					} else {
						overlapAction.over = [
							this.players[nb - 1].sprite,
							this.players[nb + 1].sprite
						]
					}
					overlapAction.callback = this.players[nb].unite
				} else {
					overlapAction.over = [
						this.level.blue,
						this.level.red,
						this.level.green
					]

					overlapAction.callback = this.players[nb].diffract
				}

				this.physics.arcade.overlap(this.players[nb].sprite, overlapAction.over, overlapAction.callback, null, this)
				this.physics.arcade.collide(this.players[nb].sprite, collideWith)

				this.players[nb].stop()

				//Teleports player going outside the screen to the other side of the screen
				if(this.players[nb].sprite.body.x > this.level.map.widthInPixels) {
					this.players[nb].sprite.body.x = 1
				} else if (this.players[nb].sprite.body.x < 0) {
					this.players[nb].sprite.body.x = this.level.map.widthInPixels - 33
				}

				if(this.players[nb].sprite.body.y > this.level.map.heightInPixels) {
					this.players[nb].sprite.body.y = 1
				} else if (this.players[nb].sprite.body.y < 0) {
					this.players[nb].sprite.body.y = this.level.map.heightInPixels - 65
				}
			}
		}

		//resets player unification controller
		this.players.forEach(function (player) {
			player.sprite.data.unite = false
		})

		console.log(this.physics.arcade.overlap(this.portal.sprite, this.players[0].sprite, this.reset, null, this))

		this.controller.checkControls()

		this.frameCount++
	}

	render () {
		//game.debug.bodyInfo(this.players[i]sprite, 5, 20)
		game.debug.body(this.players[0].sprite)
		game.debug.body(this.portal.sprite)
	}

	//State transition functions
	toMenu () {
		this.state.start('titleScreen')
	}

	reset () {
		console.log('reset')
		this.state.start('main')
	}
}

export default Main
