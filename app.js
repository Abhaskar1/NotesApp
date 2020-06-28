const yargs = require("yargs")
const notes = require("./notes")
//COMMANDS

//add 
yargs.command({
    command: "add",
    describe: "add a new note",
    builder: {
        title: {
            describe: "Title of note",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Body of note",
            demandOption: true,
            type: "string"
        }

    },
    handler: function (argv) { notes.addNotes(argv.title, argv.body) }
})

//remove
yargs.command({
    command: "remove",
    describe: "remove a note",
    builder: {
        title: {
            describe: "Title of note",
            demandOption: true,
            type: "string"
        }

    },
    handler: function (argv) { notes.removeNote(argv.title) }
})

//read
yargs.command({
    command: "read",
    describe: "read a note",
    builder: {
        title: {
            describe: "Title of note",
            demandOption: true,
            type: "string"
        }

    },
    handler: function (argv) { notes.readNote(argv.title) }
})

//list
yargs.command({
    command: "list",
    describe: "list all note",
    handler: function (argv) { notes.listNotes() }
})

yargs.parse()