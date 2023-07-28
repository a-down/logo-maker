// dependencies
const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./util/questions');
const shapes = require('./util/shapes');


// starts when the user says they are ready
function start() {
  inquirer
    .prompt(questions.questionsArr)
    .then((responses) => {
      // console.log(responses)
      const {logoLetters, logoTextColor, logoShape, logoShapeColor} = responses
      const textArr = logoLetters.split('')
      // console.log(textArr)

      if (logoLetters === '' || logoTextColor === '' || logoShape === '' || logoShapeColor === '' ) {
        console.log('Please answer every prompt.')
        start()
      } else if (textArr.length > 3) {
        console.log('Please use 3 or fewer letters.')
        start()
      } else {
        renderLogo(responses)
      }
    })
}


// renders logo from prompts
function renderLogo(responses) {
  const svgContent = shapes.renderScript(responses)
  // console.log(svgContent)

  // writes the rendered script to 'logo.svg'
  fs.writeFile('logo.svg', svgContent, (error) => {
    error ? console.log(error) : console.log('Generated logo.svg')
  })
}


// called when the page opens
function init() {
  inquirer
    .prompt(questions.readyYet)
    .then((response) => {
      // console.log(response.appStart)
      response.status === true ? start() : 
      (console.log('Let us know when you are ready!'),
      init())
    })
}
init()