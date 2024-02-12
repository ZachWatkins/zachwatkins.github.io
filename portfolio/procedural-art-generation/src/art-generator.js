import { ui } from './art-generator-ui.js';
import { svg } from './art-generator-svg.js';

// Create SVG elements
svg.createElements('line', ui.lines.count.value);
svg.createElements('circle', ui.circles.count.value);
svg.createElements('square', ui.squares.count.value);

var refreshLines = function () {
  var grid = document.querySelector('#grid'),
    gridDimensions = [grid.offsetWidth, grid.offsetHeight],
    count = ui.lines.count.value,
    diagonalcount = ui.lines.diagonals.value,
    xbuffer = ui.canvas.xbuffer.value,
    ybuffer = ui.canvas.ybuffer.value,
    coordRange = [],
    diagonalIndexes = [];

  svg.changeElementCount('line', count);

  // Populate the coordinate range variable
  coordRange.push([xbuffer, gridDimensions[0] - xbuffer]);
  coordRange.push([ybuffer, gridDimensions[1] - ybuffer]);

  // Configure and add each line to the page
  for (var i = 0; i < count; i++) {
    // Configure line
    var orientation = Math.random() < 0.5 ? 'vertical' : 'horizontal',
      svgwidth = parseInt(svg.el.getAttribute('width')),
      svgheight = parseInt(svg.el.getAttribute('height')),
      p1 = [],
      p2 = [];

    if (diagonalcount > 0 && i < diagonalcount) {
      orientation = 'diagonal';
    }

    switch (orientation) {
      case 'vertical':
        var x = getRandomIntInclusive(coordRange[0][0], coordRange[0][1]);
        p1 = [x, 0];
        p2 = [x, svgheight];
        break;
      case 'horizontal':
        var y = getRandomIntInclusive(coordRange[1][0], coordRange[1][1]);
        p1 = [0, y];
        p2 = [svgwidth, y];
        break;
      case 'diagonal':
        var p1 = [
            getRandomIntInclusive(coordRange[0][0], coordRange[0][1]),
            getRandomIntInclusive(coordRange[1][0], coordRange[1][1]),
          ],
          p2 = [
            p1[0] + 10,
            getRandomIntInclusive(coordRange[1][0], coordRange[1][1]),
          ];
        // Ensure p2[1] is not equal to p1[1]
        while (p2[1] == p1[1]) {
          p2[1] = getRandomIntInclusive(coordRange[1][0], coordRange[1][1]);
        }

        /* Line function: y = mx + b
                Line function for top edge:
                m = 0, b = 0 - d, y = 0 - d
                Line function for bottom edge:
                m = 0, b = svgheight + d, y = svgheight + d
                Get x value for intersection between two lines:
                m1 * x + b1 = m2 * x + b2
                or
                x = (b2 - b1) / (m1 - m2) */

        var m = (p1[1] - p2[1]) / (p1[0] - p2[0]),
          b = parseInt(p1[1] - m * p2[0]),
          d = 20, // dilation beyond canvas boundaries
          top = [getXIntersect(0, -d, m, b), -d], // Where line intersects with top boundary
          bottom = [getXIntersect(0, svgheight + d, m, b), svgheight + d],
          left = [0 - d, b],
          right = [svgwidth + d, parseInt(m * svgwidth + d + b)];

        // y=mx+b
        // b=y-mx
        // Determine which edge of the canvas our line will intersect with
        // By default constrain the points to the left and right boundaries
        p1 = left;
        p2 = right;

        // top edge
        if (p1[1] < 0 - d) {
          p1 = top;
        } else if (p2[1] < 0 - d) {
          p2 = top;
        }
        // bottom edge
        if (p1[1] > svgheight) {
          p1 = bottom;
        } else if (p2[1] > svgheight) {
          p2 = bottom;
        }

        break;
      default:
        break;
    }

    // Set line points
    svg.lines[i].setAttribute('x1', p1[0]);
    svg.lines[i].setAttribute('y1', p1[1]);
    svg.lines[i].setAttribute('x2', p2[0]);
    svg.lines[i].setAttribute('y2', p2[1]);

    // Set line color
    var threshold = ui.lines.colored.value;
    var color = i < threshold ? '#cc0000' : 'black';
    svg.lines[i].setAttribute('stroke', color);

    // Set line width
    var linewidth = parseInt(ui.lines.min_width.value);
    var diff =
      parseInt(ui.lines.max_width.value) - parseInt(ui.lines.min_width.value);
    var modifier = Math.round(parseInt(Math.random() * 100)) / 100;
    linewidth += diff * modifier;
    svg.lines[i].setAttribute('width-percentage', modifier);
    svg.lines[i].setAttribute('stroke-width', linewidth);
  }
};

var refreshCircles = function () {
  var grid = document.querySelector('#grid'),
    gridDimensions = [grid.offsetWidth, grid.offsetHeight],
    count = ui.circles.count.value,
    xbuffer = ui.canvas.xbuffer.value,
    ybuffer = ui.canvas.ybuffer.value,
    coordRange = [];

  svg.changeElementCount('circle', count);

  // Populate the coordinate range variable
  coordRange.push([xbuffer, gridDimensions[0] - xbuffer]);
  coordRange.push([ybuffer, gridDimensions[1] - ybuffer]);

  // Configure and add each line to the page
  for (var i = 0; i < count; i++) {
    // Configure line
    var svgwidth = parseInt(svg.el.getAttribute('width')),
      svgheight = parseInt(svg.el.getAttribute('height'));

    var x = getRandomIntInclusive(coordRange[0][0], coordRange[0][1]);
    var y = getRandomIntInclusive(coordRange[1][0], coordRange[1][1]);
    var r = getRandomIntInclusive(
      ui.circles.min_radius.value,
      ui.circles.max_radius.value,
    );

    // Set line points
    svg.circles[i].setAttribute('cx', x);
    svg.circles[i].setAttribute('cy', y);
    svg.circles[i].setAttribute('r', r);

    // Set fill color
    svg.circles[i].setAttribute('fill', ui.circles.fill.value);

    // Set line width
    var linewidth = parseInt(ui.lines.min_width.value);
    var diff =
      parseInt(ui.lines.max_width.value) - parseInt(ui.lines.min_width.value);
    var modifier = Math.round(parseInt(Math.random() * 100)) / 100;
    linewidth += diff * modifier;
    svg.circles[i].setAttribute('width-percentage', modifier);
    svg.circles[i].setAttribute('stroke-width', linewidth);
  }
};

var refreshSquares = function () {
  var grid = document.querySelector('#grid'),
    gridDimensions = [grid.offsetWidth, grid.offsetHeight],
    count = ui.squares.count.value,
    xbuffer = ui.canvas.xbuffer.value,
    ybuffer = ui.canvas.ybuffer.value,
    coordRange = [];

  svg.changeElementCount('square', count);

  // Populate the coordinate range variable
  coordRange.push([xbuffer, gridDimensions[0] - xbuffer]);
  coordRange.push([ybuffer, gridDimensions[1] - ybuffer]);

  // Configure and add each line to the page
  for (var i = 0; i < count; i++) {
    // Configure line
    var svgwidth = parseInt(svg.el.getAttribute('width')),
      svgheight = parseInt(svg.el.getAttribute('height'));

    var x = getRandomIntInclusive(coordRange[0][0], coordRange[0][1]);
    var y = getRandomIntInclusive(coordRange[1][0], coordRange[1][1]);
    var d = getRandomIntInclusive(
      ui.squares.min_width.value,
      ui.squares.max_width.value,
    );

    // Set line points
    svg.squares[i].setAttribute('x', x);
    svg.squares[i].setAttribute('y', y);
    svg.squares[i].setAttribute('width', d);
    svg.squares[i].setAttribute('height', d);

    // Set fill color
    svg.squares[i].setAttribute('fill', ui.squares.fill.value);

    // Set line width
    var linewidth = parseInt(ui.lines.min_width.value);
    var diff =
      parseInt(ui.lines.max_width.value) - parseInt(ui.lines.min_width.value);
    var modifier = Math.round(parseInt(Math.random() * 100)) / 100;
    linewidth += diff * modifier;
    svg.squares[i].setAttribute('width-percentage', modifier);
    svg.squares[i].setAttribute('stroke-width', linewidth);
  }
};

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function getXIntersect(m1, b1, m2, b2) {
  return parseInt((b2 - b1) / (m1 - m2));
}

function getYIntersect(m1, b1, m2, b2) {
  // y = mx + b
  // (y - b1) / m1 = (y - b2) / m2
  // y / m1 - y / m2 = b1 / m1 - b2 / m2
  return parseInt((b2 - b1) / (m1 - m2));
}

// Keyboard functionality
window.addEventListener('keyup', function (e) {
  var keys = [];
  keys[8] = true; // delete
  keys[46] = true; // delete

  if (!keys[e.keyCode]) {
    return;
  }

  e.preventDefault();

  switch (e.keyCode) {
    case 8:
    case 46:
      if (svg.mouse.target && e.target.tagName.toUpperCase() != 'INPUT') {
        svg.el.removeChild(svg.mouse.target);
        svg.mouse.target = null;
      }
      break;
    default:
      break;
  }
});

// Initialize
refreshLines();
refreshCircles();
refreshSquares();
