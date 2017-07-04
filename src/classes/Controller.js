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
				for (let j = 0; j < this.controls[i].action.entities.length; j++){
					this.controls[i].action.entities[j][this.controls[i].action.function](
						this.controls[i].action.params
					)
				}

			}
		}
	}
}

export default Controller
