class Shape {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
    }
    
    setColor(color) {
        this.color = color
    }
    setText(text) {
        this.text = text

    }

    setTextColor(textColor) {
        this.textColor = textColor
    }
}

module.exports = Shape;