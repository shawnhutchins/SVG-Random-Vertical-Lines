// Import stylesheets
import './style.css';

const lineCount = 100;
const startLength = 80;
const lineGap = 8;
const strokeWidth = 2;

let Line = {};

Line.LINES = Array.apply(null, Array(lineCount)).map(function (x, i) {
	return i;
});

let SVGline = function (l) {
	this.l = l;
};

for (let i = Line.LINES.length; i > -1; i -= 1) {
	Line[Line.LINES[i]] = new SVGline(Line.LINES[i]);
}

//add setting animation-delay with JS to remove static values in css
SVGline.prototype.createline = function (
	x1,
	y1,
	x2,
	y2,
	color,
	w,
	animationDelay
) {
	const aLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
	aLine.setAttribute('animation-delay', animationDelay);
	aLine.setAttribute('x1', x1);
	aLine.setAttribute('y1', y1);
	aLine.setAttribute('x2', x2);
	aLine.setAttribute('y2', y2);
	aLine.setAttribute('stroke', color);
	aLine.setAttribute('stroke-width', w);
	return aLine;
};

let aSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
aSvg.setAttribute('width', 400);
aSvg.setAttribute('height', 84);

let container = document.getElementById('container');

for (let i = 1; i < 50; i += 1) {
	let topRand = Math.floor((Math.random() * 500) / 16);
	let bottomRand = Math.floor((Math.random() * 500) / 16);
	let nextLine = Line[i].createline(
		i * lineGap,
		topRand,
		i * lineGap,
		startLength - bottomRand,
		'rgb(0,0,' + topRand + ')',
		strokeWidth
	);
	aSvg.appendChild(nextLine);
}
container.appendChild(aSvg);
