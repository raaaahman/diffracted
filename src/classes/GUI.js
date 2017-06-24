//Graphical user interface
//Holds buttons, and decide how to dispose them

class GUI {

	constructor (game, x, y, buttons, btnWidth, btnHeight, offsetX, offsetY, display, UIstyle) {

		this.x = x
		this.y = y
		this.btnWidth = btnWidth | 90
		this.btnHeight = btnHeight | 25
		this.offsetX = offsetX | 10
		this.offsetY = offsetY | 10
		this.style = UIstyle

		for (let i = 0; i < buttons.length; i++) {

			if (display == "vertical") {
				var btnPosX = this.x + this.offsetX
				var btnPosY = this.y + (i * this.btnHeight) + this.offsetY
			} else {
				var btnPosX = this.x + (i * this.btnWidth) + this.offsetX
				var btnPosY = this.y + this.offsetY
			}

			let button = game.add.button(btnPosX, btnPosY, 'button', buttons[i].fn)

			let label = game.add.text(6, 2, buttons[i].label, this.style )

			button.addChild(label)

		}

	}

}

export default GUI
