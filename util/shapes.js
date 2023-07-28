class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = `fill="${shapeColor}"`;
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
  
}







module.exports = {
  renderShapes: renderShapes,

}