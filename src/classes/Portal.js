//An object that the player must reach in white to win the level

class Portal {
	constructor (game, portalX, portalY, isActive = true) {
		this.isActive = isActive

		this.sprite = game.add.sprite(portalX, portalY, 'portal')
		game.physics.enable(this.sprite)
		this.sprite.body.immovable = true
		this.sprite.body.allowGravity = false

		//Animations
		this.sprite.animations.add('idle', [0], 8, false)
		this.sprite.animations.add('active', [1, 2, 3, 4], 8, true)

		if (this.isActive) {
			this.sprite.animations.play('active')
		} else {
			this.sprite.animations.play('idle')
		}
	}

	open () {
		this.isActive = true
		this.sprite.animations.play('active')
	}

	close () {
		this.isActive = false
		this.sprite.animations.play('idle')
	}
}

export default Portal
