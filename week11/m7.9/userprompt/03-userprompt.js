// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: "input",
            message: "What is Your Name?",
            name: "user"
        },
        {
            type: "password",
            message: "Set your password:",
            name: "password"
        },
        {
            type: "list",
            message: "Choose your hobbit:",
            choices: ["Merry", "Pippin", "Frodo", "Sam"],
            name: "hobbit"
        },
        {
            type: "checkbox",
            message: "Choose your destination: ",
            choices: ["Hobbiton", "Mordor", "Gondor", "Rohan"],
            name: "destination",
            checked : true
        },
        {
            type: "confirm",
            message: "Are you Sure?",
            name: "confirm",
            default: true
        }
    ])

    .then(function(inquirerResponse){
        if (inquirerResponse.confirm) {
            console.log("\nWelcome " + inquirerResponse.user);
            console.log("Your " + inquirerResponse.hobbit + " is going to " +inquirerResponse.destination+ "!\n");
          }
          else {
            console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
          }
          
    });