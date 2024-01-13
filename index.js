const inquirer = require("inquirer");
const { Square, Triangle, Circle } = require('./library/shape');
const { writeFile } = require("fs/promises");

class SVGLOGO {
    constructor() {
        this.text = "";
        this.textColor = "";
        this.shapeLayout = null;
        this.shapeColor = "";
    }
    //this is seeting up the prompt to allow the user to answer the questions when using node 
    async creatingShape() {
        const userInput = await inquirer.prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter text',
                validate: (input) => input.length <= 3,
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter text color',
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Choose a shape',
                choices: ['Circle', 'Triangle', 'Square'],
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Pick a shape color',
            },
        ]);

        const { text, textColor, shape, shapeColor } = userInput;
    
        let shapeLayout;
        switch (shape) {
            case 'Circle':
                shapeLayout = new Circle();
                break;
            case 'Square':
                shapeLayout = new Square();
                break;
            default:
                shapeLayout = new Triangle();
                break;
        }
        shapeLayout.setColor(shapeColor);

        this.text = text;
        this.textColor = textColor;
        this.shapeLayout = shapeLayout;
        this.shapeColor = shapeColor;

        // this is allowing the logo.svg file to be created 
        const shapeContent = this.shapeContent();
        await writeFile("logo.svg", shapeContent);
        console.log("Created logo.SVG!!!!!")
        
    }
    // this is formating the shape and text using get color from shape.js file and adding the text, also used else if statement to change between shapes
    shapeContent() {
        if (this.shapeLayout instanceof Triangle) {
            return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="0,200 300,200 150,0" fill="${this.shapeLayout.getColor()}" />
                <text x="150" y="135" text-anchor="middle" fill="${this.textColor}" font-size="45">${this.text}</text>
              </svg>`;
        } else if (this.shapeLayout instanceof Circle) {
            return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="100" r="100" fill="${this.shapeLayout.getColor()}" />
                <text x="150" y="115" text-anchor="middle" fill="${this.textColor}" font-size="45">${this.text}</text>
              </svg>`;
        } else if (this.shapeLayout instanceof Square) {
            return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="300" height="200" fill="${this.shapeLayout.getColor()}" />
                <text x="150" y="100" text-anchor="middle" fill="${this.textColor}" font-size="45">${this.text}</text>
              </svg>`;
        } 
    }
}
// this is the function that will allow the SVG to be created 
async function createSVGLogo() {
    const logo = new SVGLOGO();
    await logo.creatingShape();
}
// this is calling the creatSVGLogo function 
createSVGLogo();
