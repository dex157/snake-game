class RoundStatistic {
  constructor(levels) {
    this.levels = levels
    this.point = 0
    this.level = 0
    this.food = this.levels[this.level].food
    this.stepMS = this.levels[this.level].stepMS
    console.log(this.levels)
  }

  addPoints() {
    this.point += 10
    if (this.point > this.levels[this.level].maxPoints && this.levels[this.level + 1] != null) {
      this.level += 1
      this.food = this.levels[this.level].food
      this.stepMS = this.levels[this.level].stepMS
    }
  }
}

export default RoundStatistic
