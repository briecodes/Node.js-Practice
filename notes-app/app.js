// const getNotes = require('./notes.js');
// const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

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

// console.log(chalk.green.bold.inverse('ciao!'));

// console.log(process.argv[2]);

// const command = process.argv[2];

// switch(command) {
//     case 'add':
//       console.log('adding note…');
//       break;
//     case 'remove':
//       console.log('removing note…');
//       break;
//     default: return;
// };

// Customize yargs version
yargs.version('1.1.0');

// console.log(process.argv);

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => /* console.log(`title: ${argv.title} | body: ${argv.body}`) */ notes.addNote(argv.title, argv.body)
});


// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: () => console.log('removing the note')
});

yargs.command({
  command: 'list',
  describe: 'List notes',
  handler: () => console.log('listing notes…')
});

yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: () => console.log('reading a note…')
});

// console.log(yargs.argv);
yargs.parse();