// function Question(type, message, name) {
//     this.type = type;
//     this.message = message;
//     this.name = name;
//     this.default = '';
//   }

// function List(type, message, name, choices) {
//     this.type = type;
//     this.message = message;
//     this.name = name;
//     this.choices = choices;
//   }



exports.readyYet = {
  type: 'confirm', 
  message: 'Are you ready to create your logo?',
  name: 'status', 
}



exports.questionsArr = [
  {
    type: 'input',
    message: 'Please type up to 3 letters to display on your logo.',
    name: 'logoLetters',
    default: '',
  },
  {
    type: 'input',
    message: 'Please either type a color word or type a hex code (starting with a #) to set the text color.',
    name: 'logoTextColor',
    default: '',
  },
  {
    type: 'list',
    message: 'Please select a shape for the logo.',
    name: 'logoShape',
    choices: ['Triangle', 'Square', 'Rectangle'],
  },
  {
    type: 'input',
    message: 'Please either type a color word or type a hex code (starting with a #) to set the shape color.',
    name: 'logoShapeColor',
    default: '',
  },
]