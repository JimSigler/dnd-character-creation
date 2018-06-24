const sql2 = require('mysql2');

function SQL2 () {
    return {
        connect,
        createDB,
        getTraining,
        getCharacter
    };
}

module.exports = SQL2;

function connect() {

}
 
 // this function should be used to create db's for various
 // users as well as various training chances
function createDB(dbname) {

}

function getTraining(dbname) {

}

function getCharacter(dbname, characterId) {

}