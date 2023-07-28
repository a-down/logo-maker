const inquirer = require('inquirer');

class Question {
  constructor(type, message, name) {
    this.type = type;
    this.message = message;
    this.name = name;
    this.default = '';
  }
}




class List extends Question {
  constructor(type, message, name, choices) {
    super(type, message, name);
    this.choices = choices;
  }
}

const readyYet = new Question('confirm', 'Are you ready to create your logo?', 'readyYet');

questionsArr = [
  new Question('input', 'Please type up to 3 letters to display on your logo.', 'logoLetters'),

  new Question('input', 'Please either type a color word or type a hex code (starting with a #) to set the text color.', 'logoTextColor'),

  new List('list', 'Please select a shape for the logo.', 'logoShape', ['Triangle', 'Square', 'Rectangle']),

  new Question('input', 'Please either type a color word or type a hex code (starting with a #) to set the shape color.', 'logoShapeColor'),
]

function test() { console.log(questionsArr) }
test()
