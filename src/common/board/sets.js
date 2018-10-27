import Tile, { types } from './tile'


let { regular, special } = types
/*!
 * Defined sets
 */
const homeBasic = [
  [null, Tile(regular.forest), Tile(regular.mountain)],
  [Tile(regular.swamp), Tile(special.palace), Tile(regular.field)],
  [null, Tile(regular.mountain), Tile(regular.field)]
]

const bossBasic = [
  [null, Tile(regular.mountain), Tile(regular.mountain)],
  [Tile(regular.mountain), Tile(special.boss), Tile(regular.mountain)],
  [null, Tile(regular.mountain), Tile(regular.mountain)]
]

export { bossBasic, homeBasic }
