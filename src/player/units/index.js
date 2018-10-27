/*
 * base unit
 */

class Unit {
  state = {
    health: 0,
    mana: 0,

    block: false,
  }

  static = {
    attack: 0, 
    defense: 0,
    range: 1,

    flying: false,
    ranged: false,

    resist: false,
    evasive: false,
    block: false,
  }

  special = {

  }

  constructor(props) {
    for(let k in props) {
      if (k in this.static) {
        this.static[k] = props[k]    
      }
    }
  }

  attack(num, magic=false, ranged=false) {
    if (this.static.ranged) {
      return true
    }

    let effective = num
    if (magic && this.static.resist) {
      // Check magic defense 
      effective /= 2 
    } else if (ranged && this.static.evasive) {
      // Check physical defense
      effective /= 2 
    } else if (!magic && this.state.block) {
       
      effective /= 2 
      this.state.block = false
    }

    this.state.health -= Math.floor(effective) 
    return this.state.health > 0
  }

}
