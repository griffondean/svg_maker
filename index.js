const fs = require("fs");
const inquirer = require("inquirer");
const shapes = require("./lib/shapes.js");


// Array of questions for user input
const questions = [
    // Question for the text inside the SVG
    {
        type: "input",
        name: "text",
        message: "Please enter text up to three characters:",
    },

    // Question for the color of the text
    {
        type: "input",
        name: "text-color",
        message: "Please enter a color for your text:",
    },

    // Question for the shape of the SVG
    {
        type: "list",
        name: "shape",
        message: "Enter the shape for your SVG:",
        choices: [
            "Circle",
            "Triangle",
            "Square",
        ],
    },

    // Question for the shape color
    {
        type: "input",
        name: "color",
        message: "Please enter a color for the shape:",
    },
];

class Image {
    constructor(){
        this.text = '';
        this.shape = '';
    }
    render(){
        return `<svg version="1.1" xmlns="https://www.w3.org/TR/SVG2/" width="300" height="200">${this.shape}${this.text}</svg>`;
    }
    setTextColor(text, color) {
        this.text = `<text font-size="40" fill="${color}">${text}</text>`;
    }
    setShape(shape) {
        this.shape = shape.render();
    }
}

// Function to write SVG file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, shapes(data), function (err) {
        if (err) {
            return console.log(err);
        }
    console.log("You have generated a logo.svg.")
    });
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("./examples/logo.svg", data);
    });
}


// Function call to initialize app
init();
