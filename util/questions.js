// prompt question to start the application
exports.readyYet = {
  type: 'confirm', 
  message: 'Are you ready to create your logo?',
  name: 'status', 
}


// prompt questions used to get the qualities for the logo
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
    choices: ['Triangle', 'Circle', 'Square'],
  },
  {
    type: 'input',
    message: 'Please either type a color word or type a hex code (starting with a #) to set the shape color.',
    name: 'logoShapeColor',
    default: '',
  },
]