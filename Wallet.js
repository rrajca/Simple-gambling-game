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
        this.changeMoney = (result, bid) => {
            if (result === 'win') {
                return _money += bid;
            } else if (result === 'lose') {
                return _money -= bid;
            } else {
                throw new Error('Błędny wynik');
            };
        };
    };
};