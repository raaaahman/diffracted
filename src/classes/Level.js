//Holds the level data and functions,
//Loads from Tiled JSON maps

class Level {

	constructor (
		game,
		level,
		tilesetName,
		tilesetCacheKey
	) {
		this.map = game.add.tilemap(level)

		this.map.addTilesetImage(tilesetName, tilesetCacheKey)

		//this.floor = this.map.createLayer('floor')
		//this.walls = this.map.createLayer('walls')
		this.background = this.map.createLayer('background')
		this.white			= this.map.createLayer('white')
		this.red				= this.map.createLayer('red')
		this.green 			= this.map.createLayer('green')
		this.blue				= this.map.createLayer('blue')
		this.startPos 	= this.map.createLayer('start-pos')

		this.background.resizeWorld()

		this.map.setCollision([1], true, this.white)
		this.map.setCollision([2], true, this.red)
		this.map.setCollision([3], true, this.blue)
		this.map.setCollision([4], true, this.green)

	}

}

export default Level
