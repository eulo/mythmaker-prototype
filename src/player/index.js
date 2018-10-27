import Palace from './palace'

class Player {
  palace = Palace()
  buildings = []

  constructor(type) {
    this.type = type()
  }

  populationPhase() {
    this.palace.grow()
  }

  seasonPhase() {
    this.buildings.map(item => {
      item.refresh()
    })
  }
}
