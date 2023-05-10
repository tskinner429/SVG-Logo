const shape = require("./shape.js");

class square extends shape {
    

    render() {
        return `<svg height="400" width="400" xmlns="http://www.w3.org/2000/svg">
        <square cx="250" cy="250" r="250" fill="${this.color}" />
        <text fill = "${this.textColor}" font-size="80" x="172" y="250">${this.text}</text>
        </svg>`
    }
}

module.exports = square;