const shapes = require('./shapes');


describe('Test of the Triangle Class', () => {
  describe('Render a string successfully', () => {
    it ('should create a string to generate a triangle in the svg file.', () => {
      const shape = new shapes.Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
  })
})

describe('Test of the Circle Class', () => {
  describe('Render a string successfully', () => {
    it ('should create a string to generate a circle in the svg file.', () => {
      const shape = new shapes.Circle();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    })
  })
})

describe('Test of the Square Class', () => {
  describe('Render a string successfully', () => {
    it ('should create a string to generate a square in the svg file.', () => {
      const shape = new shapes.Square();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<rect x="65" y="40" width="165" height="165" fill="blue" />');
    })
  })
})