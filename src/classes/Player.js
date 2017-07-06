//The player class holds the sprite and animations for the player

class Player {

	constructor (
		game,
		playerX = 370,
		playerY = 245,
		color = 'white'
	) {

		this.game = game

		//Define player stats
		this.speed = 150
		this.lastJump = 0
		this.color = color

		/*switch (color) {
			case "red":
				this.colorCode = 1
				break
			case "green":
				this.colorCode = 2
				break
			case "blue":
				this.colorCode = 3
			case "white":
			default:
				this.colorCode = 0
				break
		}*/

		//Player Sprite
		this.sprite = game.add.sprite( playerX, playerY, 'player-' + this.color)

		//this.sprite.animations.add('left', [0, 4, 8, 12], 8, true)
		//this.sprite.animations.add('down', [1, 5, 9, 13], 8, true)
		//this.sprite.animations.add('right', [2, 6, 10, 14], 8, true)
		//this.sprite.animations.add('up', [3, 7, 11, 15], 8, true)

		this.sprite.anchor.set(0.5, 0.5)
		this.game.physics.enable(this.sprite)

		//Looks for collisions with the world bounds
		/*this.sprite.body.collideWorldBounds = true
		this.sprite.body.onWorldBounds = new Phaser.Signal()
		this.sprite.body.onWorldBounds.add(this.teleport, this, this.sprite.body.velocity)*/

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
		/*console.log(this.sprite.body.onFloor())
		console.log(this.lastJump)
		console.log(this.game.time)*/
		if (this.sprite.body.onFloor() && this.lastJump + 100 < this.game.time.time) {
			this.sprite.body.velocity.y = -900
			this.lastJump = this.game.time.time
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

	signal (sprite, up, down, left, right) {
		console.log('World bump!')
		console.log(
			up ? 'up' : '',
			down ? 'down' : '',
			left ? 'left' : '',
			right ? 'right' : ''
		)
	}

	teleport (sprite, up, down, left, right, curVelocity) {
		if (up) {
			sprite.body.y = this.game.world.height - 65
		} else if (down) {
			sprite.body.y = 1
		}

		if (left) {
			sprite.body.x = this.game.world.width - 33
		} else if (right) {
			sprite.body.x = 1
		}

		//Keeps the current velocity
		sprite.body.velocity = curVelocity
	}


}

export default Player
