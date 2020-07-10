// const getNotes = require('./notes.js');
// const validator = require('validator');
const chalk = require('chalk');

// const add = require('./utils.js');

// const sum = add(4, -2);
// console.log(sum);


/*
    Challenge: Define and use a function in a new file

    1. Create a new file called notes.js
    2. Create getNotes function that returns "Your notes…"
    3. Export getNotes function
    4. From app.js, load in and call the function printing message to console
*/

// const msg = getNotes();
// console.log(msg);


// console.log(validator.isURL('brie.work'));

/*
    Challenge: Use the chalk libarary in your project

    1. Intall version 2.4.1 of chalk
    2. Load chalk into app.js
    3. Use it to print the string "Success!" to the console in green
    4. test your work

    Bonus: Use docs to mess around with other styles. Make text bold and inversed.
*/

console.log(chalk.green.bold.inverse('Success!'));