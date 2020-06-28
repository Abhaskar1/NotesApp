const chalk = require("chalk")
const fs = require("fs")
console.log("Notes App Running")

const addNotes = function (title, body) {
    const notes = loadNotes()
    const duplicateNote = notes.find(function (note) {
        return note.title === title
    })
    if (!duplicateNote) {
        console.log(chalk.green.inverse("Note Added"))
        notes.push({ title: title, body: body })
        saveNotes(notes)
    }
    else {
        console.log(chalk.red.inverse("Title already taken"))
    }
}


const saveNotes = function (notes) {
    const JSONNotes = JSON.stringify(notes)
    fs.writeFileSync("notes.json", JSONNotes)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (e) {
        return []
    }
}

const removeNote = function (title) {
    const notes = loadNotes()
    const toKeep = notes.filter(function (note) {
        return note.title !== title
    })
    saveNotes(toKeep)
    console.log(chalk.green.inverse("Notes updated"))
}

const readNote = function (title) {
    const notes = loadNotes()
    const foundNote = notes.find(function (note) {
        return note.title === title
    })
    console.log(foundNote)
    if (foundNote) {
        console.log(chalk.green.inverse("Note Found"))
        console.log(foundNote.title)
        console.log(foundNote.body)
    }
    else {
        console.log(chalk.red.inverse("No note with given title found"))
    }
}

const listNotes = function () {
    const notes = loadNotes()
    notes.forEach(function (note) {
        console.log("**********")
        console.log(note.title)
        console.log(note.body)
        console.log("**********")
    })
}


module.exports = { addNotes: addNotes, saveNotes: saveNotes, loadNotes: loadNotes, removeNote: removeNote, readNote: readNote, listNotes: listNotes }

