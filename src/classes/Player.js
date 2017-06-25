//The player class holds the sprite and animations for the player

class Player {

	constructor (
		game,
		spritesheet = 'player',
	) {

		this.game = game

		//Define player stats
		this.speed 		 = 5
		this.direction = [0, 0]
		this.nextDir 	 = [0, 0]
		this.isMoving  = false

		//Player Sprite
		this.sprite = game.add.sprite( 300, 200, spritesheet)

		this.sprite.animations.add('left', [0, 4, 8, 12], 8, true)
		this.sprite.animations.add('down', [1, 5, 9, 13], 8, true)
		this.sprite.animations.add('right', [2, 6, 10, 14], 8, true)
		this.sprite.animations.add('up', [3, 7, 11, 15], 8, true)
	}

	setDir (dir) {
		let goTo

		switch (dir) {
			case 'left':
				goTo = [-1, 0]
				break
			case 'right':
				goTo = [1, 0]
				break
			case 'up':
				goTo = [0, -1]
				break
			case 'down':
				goTo = [0, 1]
				break
			default :
				break
		}

		this.nextDir = goTo
		this.isMoving = true

		this.sprite.animations.play(dir)
	}

	move (dir) {
		/*switch (dir) {
			case 'left':
				this.sprite.x -= this.speed
				this.sprite.y = this.game.math.snapToFloor(this.sprite.y, 32)
				break
			case 'right':
				this.sprite.x += this.speed
				this.sprite.y = this.game.math.snapToFloor(this.sprite.y, 32)
				break
			case 'up':
				this.sprite.y -= this.speed
				this.sprite.x = this.game.math.snapToFloor(this.sprite.x, 32)
				break
			case 'down':
				this.sprite.y += this.speed
				this.sprite.x = this.game.math.snapToFloor(this.sprite.x, 32)
				break
		}*/
		//Handle the direction change
		if (this.game.math.fuzzyEqual(this.sprite.x % 32, 0, this.speed )) {
			this.direction[0] = this.nextDir[0]
		}

		if (this.game.math.fuzzyEqual(this.sprite.y % 32, 0, this.speed)) {
			this.direction[1] = this.nextDir[1]
		}

		//Set new coordinates based on player speed and direction
		if (this.direction[0]) {
			this.sprite.x += this.speed * this.direction[0]
		} else {
			this.sprite.x = this.game.math.snapToFloor(this.sprite.x, 32)
		}

		if (this.direction[1]) {
			this.sprite.y += this.speed * this.direction[1]
		} else {
			this.sprite.y = this.game.math.snapToFloor(this.sprite.y, 32)
		}


	}
}

export default Player
