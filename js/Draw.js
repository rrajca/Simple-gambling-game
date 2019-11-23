class Draw {
  constructor() {
    this.options = ['red', 'blue', 'green'];
    const result = this.getDraw();
    this.getGameResult = () => result;
  }

  getDraw() {
    const colors = [];
    this.options.forEach(() => {
      const index = Math.floor(Math.random() * this.options.length);
      const color = this.options[index];
      colors.push(color);
    });
    return colors;
  }
}
