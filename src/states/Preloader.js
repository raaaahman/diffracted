class Preloader extends Phaser.State {

	preload () {

		//PRELOADER BAR
		this.preloader = this.add.image(this.world.centerX, this.world.centerY, 'preloaderBar')

		this.preloader.anchor.setTo(0.5, 0.5)

		this.load.setPreloadSprite(this.preloader)

		//UI resources
		this.load.spritesheet('button', '/assets/img/button.png', 90, 25)

		this.load.audio('click', '/assets/sounds/click4.ogg')
	}

	create () {

		this.state.start('titleScreen')
	}

}

export default Preloader
