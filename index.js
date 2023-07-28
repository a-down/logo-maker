const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./util/questions');
const shapes = require('./util/shapes');



function start() {
  inquirer
    .prompt(questions.questionsArr)
    .then((responses) => {
      console.log(responses)
      renderLogo(responses)
    })
}



function renderLogo(responses) {
  const svgContent = shapes.renderScript(responses)
  console.log(svgContent)
  fs.writeFile('logo.svg', svgContent, (error) => {
    error ? console.log(error) : console.log('Generated logo.svg')
  })
}





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






// Prompts
// - start on command
// - enter up to 3 characters
// - ask for text color (color keyword or hex)
// - choose from list of shapes
//   - circle
//   - triangle
//   - square
// - ask for shape color


// constructor uses the prompts responses to build object
  // shapes constructor
    // triangle with inheritance
    // circle with inheritance
    // square with inheritance
  
  // shapes is the global constructor
    // use ${response.shapeChoice} to determine which class extension is used
  
  // renderLogo() is comprised of
    // take in the object
    // send to utility function
      // put the keys from object into temperal literal
      // return finished string
    // fs.writeFile the logo.svg with the content of the finished string
    // console.log(Generated logo.svg)
