//Graphical user interface
//Holds buttons, and decide how to dispose them

class GUI {

	constructor (
		game,
		x,
		y,
		buttons,
		btnWidth = 90,
		btnHeight = 25,
		gutter = 10,
		offsetX = 10,
		offsetY = 10,
		display = "horizontal",
		UIstyle = {	font: '16px Arial',	fill: '#fff' }
	) {

		//Set UI as a group
		let gui = game.add.group()

		gui.x = x
		gui.y = y

		gui.fixedToCamera = true

		for (let i = 0; i < buttons.length; i++) {

			if (display == "vertical") {
				var btnPosX = gui.x + offsetX
				var btnPosY = gui.y + (i * btnHeight) + offsetY

				//Add a gutter to separate from next button
				offsetY += gutter

			} else {
				var btnPosX = gui.x + (i * btnWidth) + offsetX
				var btnPosY = gui.y + offsetY

				//Add a gutter to separate from next button
				offsetX += gutter;
			}

			let button = game.add.button(btnPosX, btnPosY, 'button', buttons[i].fn, game, 1, 0, 2, 3)

			if ( buttons[i].sound ) {
				button.setDownSound(
					game.add.audio(buttons[i].sound)
				)
			}

			gui.addChild(button)

			let label = game.add.text(6, 2, buttons[i].label, UIstyle )

			button.addChild(label)

		}

	}

}

export default GUI
