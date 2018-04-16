import { Simon } from './../src/simon.js';

describe('Simon', function() {

  it('should output an array of one color', function() {
    var colorArray = new Simon(); //create an instance
    colorArray.addColor(0); //run the function
    expect(colorArray.colors).toEqual(["red"]); //test the spec
  });
  it('should output an array of one color', function() {
    var colorArray = new Simon();
    colorArray.addColor(1);
    expect(colorArray.colors).toEqual(["blue"]);
  });
  it('should output an array of one color', function() {
    var colorArray = new Simon();
    colorArray.addColor(2);
    expect(colorArray.colors).toEqual(["yellow"]);
  });
  it('should output an array of one color', function() {
    var colorArray = new Simon();
    colorArray.addColor(3);
    expect(colorArray.colors).toEqual(["green"]);
  });
  it('should check if input color matches colorArray', function() {
    var colorArray = new Simon();
    colorArray.addColor(1);
    colorArray.addColor(2);

    expect(colorArray.compareArray("yellow", 1)).toEqual(true);
  });
  it('should check if input color matches colorArray', function() {
    var colorArray = new Simon();
    colorArray.addColor(1);
    colorArray.addColor(2);

    expect(colorArray.compareArray("yellow", 0)).toEqual(false);
  });
});
