//Holds the level data and functions,
//Loads from Tiled JSON maps

class Level {

	constructor (
		game,
		tilesetName,
		tilesetCacheKey
	) {
		this.map = game.add.tilemap('map')

		this.map.addTilesetImage(tilesetName, tilesetCacheKey)

		this.floor = this.map.createLayer('floor')
		this.walls = this.map.createLayer('walls')

		this.floor.resizeWorld()
		this.map.setCollisionBetween(1, 15, true, this.walls)

	}

}

export default Level
