class Shape {
    constructor(){
        this.color=''
        this.text =''
    }
    setColor(color){
        this.color=(color);
    }
    setText(text){
        this.text = (text)
    }
}

class Triangle extends Shape {
    getType() {
       return'polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}'
    }

    getColor() {
        return this.color
    }

    getText() {
        return this.text
    }
};

class Square extends Shape {
    getType() {
        return '<rect x="50" height="200" width="200" fill="${this.color}'
    }
    getColor() {
        return this.color
    }

};

class Circle extends Shape{
    render(){
        return'<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}'
    }

    getColor () {
        return this.color
    }

    getText () {
        return this.text
    }
};

module.exports = {Triangle, Circle, Square}