/*!
 *
 */
class Calendar {
  state = {
    month: -1,
  }

  /*!
   * @return Boolean
   */
  newSeason() {
    return this.state.month % 3
  }

  /*!
   * Move to next month
   * Returns resources
   */
  next() {
    let resources = {
      food: 1,
    }
    this.state.month++
    if (this.state.month === 12)
      this.state.month = 0
    if (this.newSeason()) {
      // New season
      resources = {
        wood: 1,
        stone: 1,
        ...resources
      }
    }
    return resources
  }
}

export default Calendar
