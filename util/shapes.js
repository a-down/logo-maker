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

  renderText() {
    return `<text x="98" y="135" fill="white" font-size="44">${this.text}</text>`
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

class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
    this.scriptTag = 'rect';
    this.positioning = 'x="65" y="40" width="165" height="165"'
  }
}

function renderScript(responses) {
  console.log(responses)
  const {logoLetters, logoTextColor, logoShape, logoShapeColor} = responses;
  console.log(logoLetters)

  let shape
  switch(responses.logoShape) {
    case 'Triangle':
      shape = new Triangle(logoLetters, logoTextColor, logoShapeColor)
      break;
    case 'Circle':
      shape = new Circle(logoLetters, logoTextColor, logoShapeColor)
      break;
    case 'Square':
      shape = new Square(logoLetters, logoTextColor, logoShapeColor)
      break;
  }

  const shapeScript = shape.render()
  const textScript = shape.renderText()

  return renderFullScript(shapeScript, textScript)
}

function renderFullScript(shapeScript, textScript) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="300px" height="200px">
${shapeScript}
${textScript}
</svg>`
}









module.exports = {
  renderScript: renderScript
}