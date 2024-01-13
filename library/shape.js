class Shape {
    constructor(){
        this.color=''
    }
    setColor(color){
        this.color=(color);
    }
    
}

class Triangle extends Shape {
  
    getColor() {
        return this.color
    }

};

class Square extends Shape {
    
    getColor() {
        return this.color
    }

};

class Circle extends Shape{
   
    getColor () {
        return this.color
    }

};

module.exports = {Triangle, Circle, Square}