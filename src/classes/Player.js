//The player class holds the sprite and animations for the player

class Player {

	constructor (
		game,
		spritesheet = 'player',
	) {

		this.game = game

		//Define player stats
		this.speed 		 = 5
		this.direction = [0, 0, 'left']
		this.nextDir 	 = [0, 0, 'left']
		this.position = {}
		this.isMoving  = false

		//Player Sprite
		this.sprite = game.add.sprite( 304, 176, spritesheet)

		this.sprite.animations.add('left', [0, 4, 8, 12], 8, true)
		this.sprite.animations.add('down', [1, 5, 9, 13], 8, true)
		this.sprite.animations.add('right', [2, 6, 10, 14], 8, true)
		this.sprite.animations.add('up', [3, 7, 11, 15], 8, true)

		this.sprite.anchor.set(0.5, 0.5)

		this.updatePos()
	}

	updatePos () {
		let posX = Math.floor((this.sprite.x + 1) / 32)
		let posY = Math.floor((this.sprite.y + 1) / 32)

		let around = {
			left: this.game.level.map.getTileLeft(1, posX, posY),
			right:this.game.level.map.getTileRight(1, posX, posY),
			up: 	this.game.level.map.getTileAbove(1, posX, posY),
			down: this.game.level.map.getTileBelow(1, posX, posY)
		}

		let isOnTileX = this.game.math.fuzzyEqual(this.sprite.x % 32, 16, this.speed)
		let isOnTileY = this.game.math.fuzzyEqual(this.sprite.y % 32, 16, this.speed)

		this.position = {x: posX, y: posY, around: around, tileX: isOnTileX, tileY: isOnTileY}
	}

	setDir (dir) {
		//dlet curPos = this.checkPos()

		if (this.position.around[dir].index == -1 &&
			this.position.tileX && this.position.tileY) {
			this.nextDir = [
				this.position.around[dir].x - this.position.x,
				this.position.around[dir].y - this.position.y,
				dir
			]

			this.isMoving = true
			this.sprite.animations.play(dir)

		}
		/*switch (dir) {
			case 'left':
				if (this.game.level.map.getTileLeft(1, curPos[0], curPos[1])) {
					this.nextDir = [-1, 0]
				}
				break
			case 'right':
				if (this.game.level.map.getTileRight(1, curPos[0], curPos[1])) {
					this.nextDir = [1, 0]
				}
				break
			case 'up':
				if (this.game.level.map.getTileAbove(1, curPos[0], curPos[1])) {
					this.nextDir = [0, -1]
				}
				break
			case 'down':
				if (this.game.level.map.getTileBelow(1, curPos[0], curPos[1])) {
						this.nextDir = [0, 1]
				}
				break
			default :
				break
		}*/


	}

	move () {
		//let curPos = this.checkPos()
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
		}
		let isOnTileX = this.game.math.fuzzyEqual(this.sprite.x % 32, 16, this.speed)
		let isOnTileY = this.game.math.fuzzyEqual(this.sprite.y % 32, 16, this.speed)*/
		//Handle the direction change
		//if (isOnTileX && isOnTileY) {
			this.direction[0] = this.nextDir[0]
			this.direction[2] = this.nextDir[2]

			this.direction[1] = this.nextDir[1]
		//}

		//Set new coordinates based on player speed and direction
		if (this.position.around[this.direction[2]].index == -1 ||
		!(this.position.onX && this.position.onY)
		) {
			if (this.direction[0]) {
				this.sprite.x += this.speed * this.direction[0]
			} else {
				this.sprite.x = this.game.math.snapToFloor(this.sprite.x, 32) + 16
			}

			if (this.direction[1]) {
				this.sprite.y += this.speed * this.direction[1]
			} else {
				this.sprite.y = this.game.math.snapToFloor(this.sprite.y, 32) + 16
			}
		} else {
				this.isMoving = false
		}



		console.log(this.direction[2])
		console.log(this.sprite.x, this.sprite.y)
		console.log(this.position.x, this.position.y)
	}
}

export default Player
