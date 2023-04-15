// Import stylesheets
import './style.css';

const lineCount = 100;    
const startLength = 80;
const lineGap = 8;
const strokeWidth = 2;

let Line = {};

Line.LINES = Array.apply(null, Array(lineCount)).map(function (x, i) { return i; })

let SVGline = function (l) {
    this.l = l;
}

for (let i = Line.LINES.length; i > -1; i -= 1) {
    Line[Line.LINES[i]] = new SVGline(Line.LINES[i]);
}

SVGline.prototype.createline = function (x1, y1, x2, y2, color, w) {
    let aLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    aLine.setAttribute('x1', x1);
    aLine.setAttribute('y1', y1);
    aLine.setAttribute('x2', x2);
    aLine.setAttribute('y2', y2);
    aLine.setAttribute('stroke', color);
    aLine.setAttribute('stroke-width', w);
    return aLine;
}

function start() {
    let aSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    aSvg.setAttribute('width', 800);
    aSvg.setAttribute('height', 80);
    
    let container = document.getElementById('container');

    for (let i = 1; i < 100; i += 1) {

        let topRand = Math.floor(Math.random() * 500 / 16);
        let bottomRand = Math.floor(Math.random() * 500 / 16);
        //console.log(topRand + " + " + bottomRand)

        let nextLine = Line[i].createline(i*lineGap, topRand, i*lineGap, startLength-bottomRand, 'rgb(0,0,' + topRand + ')', strokeWidth);
        aSvg.appendChild(nextLine);

    }
    container.appendChild(aSvg);
}

start();