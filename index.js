const inquirer = require("inquirer");
const { Square, Triangle, Circle } = require('./library/shape');

class SVGLOGO {
    constructor() {
        this.color = "";
        this.shape = "";
        this.text = "";
        this.shapeLayout = null;
    }

    async creatingShape() {
        const userInput = await inquirer.prompt([
            {
                type: 'input',
                name: 'color',
                message: 'Enter color:',
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Pick a shape',
                choices: ['Circle', 'Triangle', 'Square'],
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Choose shape color:',
            },
        ]);

        this.color = userInput.color;
        this.shape = userInput.shape;

        switch (this.shape) {
            case 'Square':
                this.shapeLayout = new Square();
                break;
            case 'Circle':
                this.shapeLayout = new Circle();
                break;
            case 'Triangle':
                this.shapeLayout = new Triangle();
                break;
        }

        this.shapeLayout.setColor(userInput.shapeColor);
    }
}


async function createSVGLogo() {
    const logo = new SVGLOGO();
    await logo.creatingShape();
    console.log(logo); 
}

createSVGLogo();
