const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./util/questions');








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
init();



// function init() {
//   inquirer
//     .prompt(questions.readyYet)
//     .then((response) => {
//       // response.status === true ? askPrompts() : 
//       //   (console.log('Let us know when you are ready'),
//       //   init())
//       console.log(response)
//     })
//   }

// init()


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
