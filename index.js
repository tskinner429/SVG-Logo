const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./utilis/generateLogo');

const questions = [
    {
        type: "list",
        message: "What shape do you want your logo to be?",
        name: "shape",
        choices: [
            "circle",
            "square",
            "triangle",
        ]
    },

    {
        type: "input",
        message: "What color do you want your shape to be?",
        name: "shape_color"

    },
    {
        type: "input",
        message: "Please enter a set of 3 letters.",
        name: "text"
    },
    {
        type: "input",
        message: "What color do you want the text to be?",
        name: "text_color"
    },
];

function writeToFile(fileName, data) {
    var content = generateLogo(data);
    fs.writeFileSync(fileName, content, function (error) {
        if (error) {
            return console.log(error);

        }
        console.log('Generated logo.svg');
    })
}

function init () {
    inquirer.prompt(questions).then(function (data) {
        var fileName = 'logo.svg';
        writeToFile(fileName, data);
    });
}

init();