const { uuid } = require('uuidv4');
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile)
const readFileAsync = util.promisify(fs.readFile)

const allNotes = require("../db/db.json")
const notes = "./db/db.json"

function apiRoutes(app) {


    app.get("/api/notes", async function (req, res) {
        try {
            const note = await readFileAsync(notes, "utf-8")
            const parseNote = JSON.parse(note)
            res.json(parseNote)
        } catch (err) {
            if (err) {
                console.log(err)
            }
        }
    })

    app.post("/api/notes", async function (req, res) {
        try {
            const note = await readFileAsync(notes, "utf-8")
            const id = uuid();
            req.body.id = id
            const parseNote = JSON.parse(note)
            parseNote.push(req.body)

            await writeFileAsync(notes, JSON.stringify(parseNote, null, 2))
            res.json(req.body)

        } catch (err) {
            if (err) {
                console.log(err)
            }
        }
    })

    app.delete('/api/notes/:id', async function (req, res) {
        try {
            const note = await readFileAsync(notes, "utf-8")
            const id = req.params.id;
            const parseNote = JSON.parse(note)
            parseNote.forEach(value => {
                if (value.id === id) {
                    parseNote.splice(parseNote.indexOf(value), 1);
                    return

                }
            });

            await writeFileAsync(notes, JSON.stringify(parseNote, null, 2))
            res.json(req.body)

        } catch (err) {
            throw err;
        }
    });
}
module.exports = apiRoutes;

