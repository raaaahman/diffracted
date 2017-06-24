//The player class holds the sprite and animations for the player

class Player {

	constructor (
		game,
		spritesheet = 'player',
	) {

		this.sprite = game.add.sprite( 300, 200, spritesheet)

		this.sprite.animations.add('left', [0, 4, 8, 12], true)
		this.sprite.animations.add('down', [1, 5, 9, 13], true)
		this.sprite.animations.add('right', [2, 6, 10, 14], true)
		this.sprite.animations.add('up', [3, 7, 11, 15], true)
	}

	move () {
		console.log('Moving')
	}
}

export default Player
