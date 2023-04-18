const {Circle, Triangle, Square} = require('./shapes.js');

// Test for Circle
describe('Circle', () => {
  test('shape', () => {
      const shape = new Circle();
      let color = ('red');
      shape.selectColor(color);
      expect(shape.render()).toEqual(`<circle height="100%" width="100%" fill="${this.color}"/>`);
    });
});

// Test for Triangle
describe('Triangle', () => {
  test('shape', () => {
    const shape = new Triangle();
    let color = ('blue');
    shape.selectColor(color);
    expect(shape.render()).toEqual(`<polygon height="100%" width="100%" fill="${this.color}"/>`);
    });
});

// Test for Square
describe('Square', () => {
    test('shape', () => {
      const shape = new Rectangle();
      let color = ('green');
      shape.selectColor(color);
      expect(shape.render()).toEqual(`<rect x="50" height="300" width="200" fill="${this.color}"/>`);
      });
  });

