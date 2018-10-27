import Tile from './tile'

class Board {

  // Tiles stored as 2D array
  tiles = [[]]

  /*!
   * @var Int
   */
  constructor(players) {
    for (let i = 0, i < players * 10) {
      let type = ''
      let bonus = null
      //this.tiles.push(Tile(type, bonus))
    }  
  }
}

/*
 * Hexagonal movement
 *
 *                Even            Odd
 * Direction  DeltaX  DeltaY  DeltaX  DeltaY
 * East       +1      0       +1      0
 * SouthEast  0       +1      +1      +1
 * SouthWest  -1      +1      0       +1
 * West       -1      0       -1      0
 * NorthWest  -1      -1      0       -1
 * NorthEast  0       -1      1       -1
 */

export default Board
