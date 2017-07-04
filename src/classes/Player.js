//The player class holds the sprite and animations for the player

class Player {

	constructor (
		game,
		playerX = 370,
		playerY = 245,
		spritesheet = 'player'
	) {

		this.game = game

		//Define player stats
		this.speed = 150

		//Player Sprite
		this.sprite = game.add.sprite( playerX, playerY, spritesheet)

		this.sprite.animations.add('left', [0, 4, 8, 12], 8, true)
		//this.sprite.animations.add('down', [1, 5, 9, 13], 8, true)
		this.sprite.animations.add('right', [2, 6, 10, 14], 8, true)
		//this.sprite.animations.add('up', [3, 7, 11, 15], 8, true)

		this.sprite.anchor.set(0.5, 0.5)
		this.game.physics.enable(this.sprite)

	}

	move (dir) {

		let d
		if (dir === 'left') {
			d = -1
		} else if (dir === 'right') {
			d = 1
		}

		this.sprite.animations.play(dir)
		this.sprite.body.velocity.x = this.speed * d

	}

	jump () {
		if (this.sprite.body.onFloor) {
			this.sprite.body.velocity.y = -600
		}
	}

	stop () {
		this.sprite.body.velocity.x = 0
	}

	update () {
		if (this.sprite.body.velocity.x === 0) {
			this.sprite.animations.stop()
		}
	}


}

export default Player
