class Result {
  static getWinValue(win, bid) {
    if (win) {
      return bid * 3;
    }
    return 0;
  }

  static checkWin(draw) {
    if ((draw[0] === draw[1] && draw[1] === draw[2])
      || (draw[0] !== draw[1] && draw[1] !== draw[2] && draw[0] !== draw[2])) {
      return true;
    }
    return false;
  }
}
