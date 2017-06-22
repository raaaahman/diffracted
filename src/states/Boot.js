class Boot extends Phaser.State {

	preload () {

		this.load.image('preloaderBar', '/assets/img/preloaderBar.png')

	}

	create () {

		this.state.start('preloader')
	}
}

export default Boot
