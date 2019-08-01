class SumOfASquare {
  constructor(num) {
    this.num = num;
  }
  sumOfSquares() {
    let arr = [];
    for (let i = 1; i < this.num + 1; i++) {
      arr.push(Math.pow(i, 2));
    }
    return arr.reduce((total, arr) => total + parseInt(arr), 0);
  }
  squareOfTheSums() {
    let arr2 = [];
    for (let i = 1; i < this.num + 1; i++) {
      arr2.push(i);
    }
    return Math.pow(
      parseInt(arr2.reduce((total, arr2) => total + parseInt(arr2), 0)),
      2
    );
  }
}

module.exports = { SumOfASquare };
