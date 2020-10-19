var bodyParser = require('body-parser')
const { uuid } = require('uuidv4');
const fs = require("fs");
const util = require("util");
const { parse } = require('path');
// const note = require("../db/db.json");

const writeFileAsync = util.promisify(fs.writeFile)
const readFileAsync = util.promisify(fs.readFile)

const notes = "./db/db.json"

function apiRoutes(app) {

    // app.use(bodyParser.urlencoded({
    //   extended: true
    // }));

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
            console.log("hey")
            parseNote.push(req.body)



            await writeFileAsync(notes, JSON.stringify(parseNote, null, 2))


            res.json(req.body)


        } catch (err) {
            if (err) {
                console.log(err)
            }
        }
    })





}

module.exports = apiRoutes;

// let rawdata = fs.readFileSync('student.json');
// let student = JSON.parse(rawdata);
// console.log(student);