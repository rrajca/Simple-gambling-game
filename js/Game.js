class Game {
  constructor(money) {
    this.money = new Wallet(money);
    this.statistics = new Statistics();
    this.colors = document.querySelectorAll('.game .color');
    this.inputPlay = document.getElementById('bid');
    document.getElementById('start').addEventListener('click', this.startGame.bind(this));
    this.wallet = document.querySelector('.panel .wallet');
    this.result = document.querySelector('.score .result');
    this.gamesNumber = document.querySelector('.score .number');
    this.gamesWins = document.querySelector('.score .win');
    this.gamesLoss = document.querySelector('.score .loss');

    this.render();
  }

  render(colors = ['grey', 'grey', 'grey'], money = this.money.checkMoney(), win = '', bid = 0, wonMoney = 0, stats = [0, 0, 0]) {
    this.colors.forEach((el, index) => {
      const color = el;
      color.style.backgroundColor = colors[index];
    });
    this.wallet.textContent = money;
    let result = win;
    if (result) {
      result = `Wygrałeś ${wonMoney}$ `;
    } else if (!result && result !== '') {
      result = `Przegrałeś ${bid}$ `;
    }
    this.result.textContent = result;
    [this.gamesNumber.textContent, this.gamesWins.textContent, this.gamesLoss.textContent] = stats;

    this.inputPlay.value = '';
  }

  startGame() {
    const bid = Math.floor(this.inputPlay.value);
    if (bid <= 0) {
      return alert('Podałeś złą stawkę!');
    }
    if (!this.money.checkCanPlay(bid)) {
      return alert('Masz za mało pieniędzy aby postawić zakład!');
    }
    this.money.changeMoney(false, bid);
    const draw = new Draw();
    const colors = draw.getGameResult();
    const win = Result.checkWin(colors);
    const wonMoney = Result.getWinValue(win, bid);
    this.money.changeMoney(win, wonMoney);
    this.statistics.addGameResult(win, bid);
    const stats = this.statistics.getGameResults();

    return this.render(colors, this.money.checkMoney(), win, bid, wonMoney, stats);
  }
}
