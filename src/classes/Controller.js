//This class binds controls to actions

class Controller {

	constructor (game, keyBinds, actions) {
		this.game = game
		this.controls = []

		for (let i = 0; i < keyBinds.length; i++) {
			this.controls.push({key: keyBinds[i], action: actions[i]})
		}
	}

	checkControls () {
		for (let i = 0; i < this.controls.length; i++) {
			if (this.game.input.keyboard.isDown(this.controls[i].key)) {
				this.controls[i].action.callback(this.controls[i].action.param)
			}
		}
	}
}

export default Controller
