
/*!
 * base building
 * always extended
 */
class Building {
  // Default
  cost = {
    work: 0,
    food: 0,
    stone: 0,
    wood: 0,
    renown: 0,
    gold: 0,
    population: 0,
  }

  type: null,
  unit: 1,

  state = {
    production: [],
  }

  contructor(cost) {
    this.cost = cost

    this.state.production.push(this.unit)
  }

  use() {
    // if barracks, recruit
    // if store, stock 
  }

  refresh() {
    this.state.production.push(this.unit)
  }

  
}
