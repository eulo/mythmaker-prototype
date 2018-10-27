import Calendar from '../common/calendar'
import Player from '../player'
import Board from '../common/board'
// types
import Types from '../player/types'

/*!
 *
 */
class Game {
  state = {
    players: [],
    calendar: null, 
    board: null,
  }
  constructor(playerCount) {
    if (playerCount > 4) playerCount = 4
    // TODO: years
    this.calendar = Calendar()

    for (let i = 0; i < playerCount; i++) {
      const player = Player(Types[i])
      this.state.players.push(player)
    } 

    this.board = Board(playerCount)

    this.monthPhase()
  }

  monthPhase() {
    let resources = this.calendar.next()
    this.state.players.map(player => {
      if (this.calender.newSeason()) {
        player.seasonPhase()
      }
      player.palace.add(resources)
    })
  }

  resourcePhase() {
    
  }

}
