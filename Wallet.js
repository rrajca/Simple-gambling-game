class Wallet {
    constructor(value) {
        let _money = value;
        this.checkMoney = () => _money;
        this.checkCanPlay = (bid) => {
            if (bid <= _money) {
                return true;
            }
            return false;
        };
        this.changeMoney = (win, bid) => {
            if (win) {
                return _money += bid;
            } else if (!win) {
                return _money -= bid;
            } else {
                throw new Error('Błędny wynik');
            };
        };
    };
};