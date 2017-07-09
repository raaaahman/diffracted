import game from '../index.js'

class Preloader extends Phaser.State {

	preload () {

		//PRELOADER BAR
		this.preloader = this.add.image(this.world.centerX, this.world.centerY, 'preloaderBar')

		this.preloader.anchor.setTo(0.5, 0.5)

		this.stage.setBackgroundColor('#221634')

		this.load.setPreloadSprite(this.preloader)

		//UI resources
		this.load.spritesheet('button', '/assets/img/button.png', 90, 25)

		this.load.audio('click', '/assets/sounds/click4.ogg')
		this.load.audio('start', '/assets/sounds/message.ogg')
		this.load.audio('reset', '/assets/sounds/dustbin.ogg')

		//GAME sprites and tilesets
		this.load.image('tileset', '/assets/img/tileset.png')

		this.load.spritesheet('player-white', '/assets/img/player-white.png', 32, 64)
		this.load.spritesheet('player-red', '/assets/img/player-red.png', 32, 64)
		this.load.spritesheet('player-green', '/assets/img/player-green.png', 32, 64)
		this.load.spritesheet('player-blue', '/assets/img/player-blue.png', 32, 64)
		this.load.spritesheet('portal', '/assets/img/portal.png', 32, 64)

		//GAME sounds
		this.load.audio('jump', '/assets/sounds/pop.ogg')
		this.load.audio('portal', '/assets/sounds/portal.ogg')

		//GAME data
		console.log(game.maxLevel)
		for (let i = 1; i <= game.maxLevel; i++) {
			this.load.tilemap('level' + i, '/assets/levels/level' + i + '.json', null, Phaser.Tilemap.TILED_JSON)
		}

	}

	create () {

		this.state.start('titleScreen')
	}

}

export default Preloader
