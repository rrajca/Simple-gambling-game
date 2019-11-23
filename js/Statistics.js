class Statistics {
  constructor() {
    this.gamesPlayed = [];
  }

  addGameResult(win, bid) {
    const result = {
      win,
      bid,
    };
    this.gamesPlayed.push(result);
  }

  getGameResults() {
    const games = this.gamesPlayed.length;
    const wins = this.gamesPlayed.filter((game) => game.win).length;
    const loses = this.gamesPlayed.filter((game) => !game.win).length;
    return [games, wins, loses];
  }
}
