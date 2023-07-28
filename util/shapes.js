class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  setColor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  render() {
    return `<${this.scriptTag} ${this.positioning} fill="${this.shapeColor}" />`
  }
}

class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
    this.scriptTag = 'polygon';
    this.positioning = 'points="150, 18 244, 182 56, 182"'
  }
}

class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
    this.scriptTag = 'circle';
    this.positioning = 'cx="148" cy="120" r="80"'
  }
}

class Rectangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
    this.scriptTag = 'rect';
    this.positioning = 'x="65" y="40" width="165" height="165"'
  }
}



function renderShapes(responses) {
  console.log(responses)
  const {logoLetters, logoTextColor, logoShape, logoShapeColor} = responses;

  console.log(logoLetters)
  switch(responses.logoShape) {
    case 'Triangle':
      return new Triangle(logoLetters, logoTextColor, logoShapeColor).render()
      break;
    case 'Circle':
      return new Circle(logoLetters, logoTextColor, logoShapeColor).render()
      break;
    case 'Rectangle':
      return new Rectangle(logoLetters, logoTextColor, logoShapeColor).render()
      break;
  }
}

function renderText() {

}







module.exports = {
  renderShapes: renderShapes,
  renderText: renderText,
}