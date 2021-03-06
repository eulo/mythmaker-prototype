
const types = {
  special: {
    palace: {
      movement: 2,
      gather: 2,
    },
    boss: {
      movement: 2,
      gather: 2,
    },
  },
  regular: {
    forest: {
      movement: 1,
      gather: 2,
    },
    mountain: {
      movement: 2,
      gather: 2,
    },
    swamp: {
      movement: 1,
      gather: 2,
    },
    field: {
      movement: 1,
      gather: 1,
    },
    lake: {
      movement: 1,
      gather: 2,
    },
  }
}

class Tile {

  constructor(type, bonus) {
    this.type = type 
    this.bonus = bonus
  }
}


export { Tile as default, types }
