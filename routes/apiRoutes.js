
const uuid = require("uuid");
const fs = require("fs");
// const util = require("uitl");
const note = require("../db/db.json")

function apiRoutes(app) {

    app.get("/api/notes", (req, res) => {
        console.log(note)
        res.json(note)
    })

}

module.exports = apiRoutes;