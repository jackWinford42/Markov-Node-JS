/** Command-line tool to generate Markov text. */
const MarkovMachine = require("./markov.js");
const axios = require('axios');
const fs = require('fs');

arg = process.argv[2]
argThree = process.argv[3]

function cat(path) {
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            // handle possible error
            console.error(err);
            // kill the process and tell the shell it errored
            process.exit(1);
        }
        // otherwise success
        resolve(data);
    })
}

function webCat(url) {
    axios
        .get(url)
        .then(function(response) {
            resolve(response.data)
        })
        .catch(error => {
            console.log(error)
            process.exit(1);
        })
}

function resolve(data) {
    const mm = new MarkovMachine(String(data))
    console.log(mm.makeText())
}

if (arg == 'file') {
    cat(argThree)
} else if (arg == 'url') {
    webCat(argThree)
} else {
    console.log("Format your command line args like: '$ node makeText.js file eggs.txt' or '$ node makeText.js url http://www.gutenberg.org/files/11/11-0.txt'")
}