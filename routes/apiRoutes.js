var bodyParser = require('body-parser')
const uuid = require("uuid");
const fs = require("fs");
const util = require("util");
// const note = require("../db/db.json");

const writeFileAsync = util.promisify(fs.writeFile)
const readFileAsync = util.promisify(fs.readFile)


function apiRoutes(app) {

    app.get("/api/notes", async function (req, res) {
        try {
            const note = await readFileAsync("./db/db.json", "utf-8")
            const parseNote = JSON.parse(note)
            res.json(parseNote)
            console.log(parseNote)
            console.log("hey Hey")
        } catch (err) {
            if (err) {
                console.log(err)
            }
        }
    })

    app.post("/api/notes", async function (req, res) {
        try {
            const newNote = req.body
            note.push(newNote)

            res.json(console.log("hey"))
        } catch {
            if (err) {
                console.log(err)
            }
        }
    })

    app.use(bodyParser.urlencoded({
        extended: true
    }));



}

module.exports = apiRoutes;

// let rawdata = fs.readFileSync('student.json');
// let student = JSON.parse(rawdata);
// console.log(student);