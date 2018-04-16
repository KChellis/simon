export function Simon() {
  this.colors = [];
}
// function randomNumber() {
//   var number = Math.floor(Math.random() * (3));
//   return number;
// }
Simon.prototype.addColor = function () {
  var number = Math.floor(Math.random() * (3));
  if (number === 0) {
    this.colors.push("red");
  }else if (number === 1) {
    this.colors.push("blue");
  }else if (number === 2) {
    this.colors.push("yellow");
  }else {
    this.colors.push("green");
  }
};
Simon.prototype.compareArray = function (color, i) {
  if (color === this.colors[i]) {
    return true;
  }else {
    return false;
  }
};
