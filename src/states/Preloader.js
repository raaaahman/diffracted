class Preloader extends Phaser.State {

	preload () {

		//PRELOADER BAR
		this.preloader = this.add.image(this.world.centerX, this.world.centerY, 'preloaderBar')

		this.preloader.anchor.setTo(0.5, 0.5)

		this.stage.setBackgroundColor('#458')

		this.load.setPreloadSprite(this.preloader)

		//UI resources
		this.load.spritesheet('button', '/assets/img/button.png', 90, 25)

		this.load.audio('click', '/assets/sounds/click4.ogg')
		this.load.audio('start', '/assets/sounds/message.ogg')
		this.load.audio('reset', '/assets/sounds/dustbin.ogg')

		//GAME sprites and tilesets
		this.load.image('tileset', '/assets/img/tileset.png')

		//GAME data
		this.load.tilemap('map', '/assets/levels/level0.json', null, Phaser.Tilemap.TILED_JSON)

	}

	create () {

		this.state.start('titleScreen')
	}

}

export default Preloader
