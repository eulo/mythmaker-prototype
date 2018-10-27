import Tile, { types } from './tile'
import sets from './sets'

class Board {

  // Tiles stored as 2D array
  tiles = []
  directions = {
    East: [[1,0],[1,0]],
    SouthEast: [[0,1],[1,1]],
    SouthWest: [[-1,1],[0,1]],
    West: [[-1,0],[-1,0]],
    NorthWest: [[-1,-1],[0,-1]],
    NorthEast: [[0,-1],[1,-1]],
  }

  /*!
   * @var Int
   */
  constructor(players) {
    let tiles = sets.bossBasic.slice()
    let spacing = ['NorthWest', 'SouthEast', 'NorthEast', 'SouthWest']
    for (let i = 0; i < players; i++) {
      // Set direction
      let direction = spacing[players % 4]
      let load = sets.homeBasic.slice()
      // Iterate through loaded set
      for (let j of load) {
        for (let k of load[j]) {
          this._replaceTile(j, k, load[j][k])
        }
      }
    }  

    this.tiles = tiles
  }

  /*!
   * Recursive function to move tiles
   */
  _replaceTile(x, y, tile, direction='SouthEast') {
    let current = null
    
    if (tiles[x] && tiles[x][y]) {
      current = tiles[x][y] 
    } else {
      if (!tiles[x]) {
        tiles[x].push(this._newLine(y)) 
      }
    }
    tiles[x][y] = tile

    if (current) {
      let coords = this._nextTile(x, y)
      this._replaceTile(coords[0], coords[1], current, direction)
    }
  }

  _newLine(length) {
    let line = [] 
    for (let i = 0; i < length; i++) {
      line.push(null)
    }
    return line
  }

  _nextTile(x, y, direction='SouthEast') {
    if (!(direction in this.directions)) 
      return [x, y]

    let diff = []
    
    if (y % 2 === 0) {
      //even
      diff = this.directions[direction][0]
    } else {
      //odd
      diff = this.directions[direction][1]
    }

    x += diff[0]
    y += diff[1]

    return [x, y]
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
