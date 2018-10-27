/*!
 *
 */
class Palace {
  state = {
    stone: 1,
    wood: 2,
    food: 2,
    gold: 0,
    population: 1,
    renown: 0,
    work: 0,
  }

  add(diff) {
    for (let k in diff) {
      if (k in this.state) {
        let update = this.state[k] + diff[k]
        if (update < 0) {
          // throw error
          update = 0
        }
        this.state[k] = update
      }
    }
  }

  grow() {
    // Upkeep
    for (let i = 0, l = Math.floor(this.state.population / 4); i < l; i++) {
      if (this.state.food > 0) {
        this.state.food--
      } else if (this.state.renown > 0) {
        this.state.renown--
      } else if (this.state.population > 0){
        // get rid of units === renown ???
        this.state.population--
      } else {
        // Game over? 
      }
    }
    // Grow
    if (this.state.food >= this.state.population) {
      this.state.food -= this.state.population
      this.state.population++
    }
  }
}
