// Class to set the color
class Shapes {

    constructor(){
        this.color = '';
    }
    selectColor(color) {
        this.color = (color);
    }
};

// Class that sets the shape and extends the color
class Circle extends Shapes {
    render(){
        return `<circle height="100%" width="100%" fill="${this.color}"/>`
    }
}

class Triangle extends Shapes {
    render(){
        return `<polygon height="100%" width="100%" fill="${this.color}"/>`
    }
}

class Square extends Shapes {
    render(){
        return `<rect x="50" height="300" width="200" fill="${this.color}"/>`
    }
};

module.exports = { Circle, Triangle, Square };
