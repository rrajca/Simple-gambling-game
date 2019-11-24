class Wallet {
  constructor(value) {
    let money = value;
    this.checkMoney = () => money;

    this.checkCanPlay = (bid) => {
      if (bid <= money) {
        return true;
      }
      return false;
    };

    this.changeMoney = (win, bid) => {
      if (win) {
        money += bid;
        return money;
      }
      if (!win) {
        money -= bid;
        return money;
      }
      throw new Error('Błędny wynik');
    };
  }
}
