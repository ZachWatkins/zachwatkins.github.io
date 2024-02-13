export const svg = {
  ns: 'http://www.w3.org/2000/svg',
  el: null,
  lines: [],
  circles: [],
  squares: [],
  init: null,
  setdimensions: null,
  mouse: {
    mode: {
      name: false,
      timer: 0,
      func: null,
    },
    lastdown: 0,
    target: null,
  },
  drag: {
    target: {
      el: null,
      p1: { x: null, y: null },
      p2: { x: null, y: null },
      cx: null,
      cy: null,
    },
    coords: { x: null, y: null },
  },
  click: {
    delay: 300,
    coords: { x: 0, y: 0 },
  },
};

svg.el = document.createElementNS(svg.ns, 'svg');

svg.createline = function () {
  var line = document.createElementNS(this.ns, 'line');
  line.setAttribute('x1', '0');
  line.setAttribute('y1', '0');
  line.setAttribute('x2', '0');
  line.setAttribute('y2', '0');
  line.setAttribute('style', 'fill:none;');
  line.setAttribute('stroke', '#000000');
  line.setAttribute('stroke-width', '1');
  line.setAttribute('class', 'line');

  this.lines.push(line);
  this.el.appendChild(line);

  return line;
};

svg.createcircle = function () {
  var circle = document.createElementNS(this.ns, 'circle');
  circle.setAttribute('cx', '0');
  circle.setAttribute('cy', '0');
  circle.setAttribute('r', '0');
  circle.setAttribute('fill', 'none');
  circle.setAttribute('stroke', '#000000');
  circle.setAttribute('stroke-width', '1');
  circle.setAttribute('class', 'circle');

  this.circles.push(circle);
  this.el.appendChild(circle);

  return circle;
};

svg.createsquare = function () {
  var square = document.createElementNS(this.ns, 'rect');

  square.setAttribute('x', '0');
  square.setAttribute('y', '0');
  square.setAttribute('width', '0');
  square.setAttribute('height', '0');
  square.setAttribute('fill', 'none');
  square.setAttribute('stroke', '#000000');
  square.setAttribute('stroke-width', '1');
  square.setAttribute('class', 'square');

  this.squares.push(square);
  this.el.appendChild(square);

  return square;
};

svg.createElements = function (type, count) {
  var funcname = 'create' + type;
  for (var i = 0; i < count; i++) {
    this[funcname]();
  }
};

svg.removeElements = function (type, count) {
  type += 's';
  for (var i = 0; i < count; i++) {
    this.el.removeChild(this[type].pop());
  }
};

svg.changeElementCount = function (type, value) {
  type += 's';
  var length = this[type].length,
    diff = Math.abs(value - length);
  if (length < value) {
    this.createElements(type, diff);
  } else if (length > value) {
    this.removeElements(type, diff);
  }
};

svg.mouseDown = function (e) {
  e.preventDefault();

  // Store mouse target
  this.mouse.target = e.target;

  /* Begin timer to determine click or drag mode
		 If mouse is down for more than "svg.click.delay" milliseconds, then
		 begin drag mode. If it is released before or on that time, then begin click mode. */
  this.mouse.mode.name = false;
  this.mouse.lastdown = new Date().getTime();
  this.mouse.timer = window.setTimeout(
    this.mouse.mode.func.bind(this),
    this.click.delay,
  );

  // Start drag mode
  switch (e.target.tagName) {
    case 'line':
      this.drag.target.p1.x = parseInt(e.target.getAttribute('x1'));
      this.drag.target.p1.y = parseInt(e.target.getAttribute('y1'));
      this.drag.target.p2.x = parseInt(e.target.getAttribute('x2'));
      this.drag.target.p2.y = parseInt(e.target.getAttribute('y2'));
      break;
    case 'circle':
      this.drag.target.cx = parseInt(e.target.getAttribute('cx'));
      this.drag.target.cy = parseInt(e.target.getAttribute('cy'));
      break;
    case 'rect':
      this.drag.target.x = parseInt(e.target.getAttribute('x'));
      this.drag.target.y = parseInt(e.target.getAttribute('y'));
      break;
    default:
      break;
  }

  this.drag.coords.x = e.clientX;
  this.drag.coords.y = e.clientY;
};

svg.mouseUp = function (e) {
  e.preventDefault();

  this.click.coords.x = e.clientX;
  this.click.coords.y = e.clientY;

  if (new Date().getTime() - this.mouse.lastdown <= this.click.delay) {
    // Enter click mode
    if (e.target.tagName != 'svg') {
      this.mouse.mode.name = 'click';
      window.clearTimeout(this.mouse.timer);
    }
  } else if (this.mouse.target != null) {
    // End drag mode
    this.mouse.mode.name = false;
  }
};

svg.mouseMove = function (e) {
  if (!this.mouse.mode.name) return;

  e.preventDefault();

  if (this.mouse.mode.name == 'drag') {
    var change = {
      x: e.clientX - this.drag.coords.x,
      y: e.clientY - this.drag.coords.y,
    };

    switch (this.mouse.target.tagName) {
      case 'line':
        this.mouse.target.setAttribute('x1', this.drag.target.p1.x + change.x);
        this.mouse.target.setAttribute('y1', this.drag.target.p1.y + change.y);
        this.mouse.target.setAttribute('x2', this.drag.target.p2.x + change.x);
        this.mouse.target.setAttribute('y2', this.drag.target.p2.y + change.y);
        break;
      case 'circle':
        this.mouse.target.setAttribute('cx', this.drag.target.cx + change.x);
        this.mouse.target.setAttribute('cy', this.drag.target.cy + change.y);
        break;
      case 'rect':
        this.mouse.target.setAttribute('x', this.drag.target.x + change.x);
        this.mouse.target.setAttribute('y', this.drag.target.y + change.y);
        break;
      default:
        break;
    }
  }
};

svg.mouseOut = function (e) {
  e.preventDefault();

  if (this.mouse.target == null) return;

  var boundary = this.el.getBoundingClientRect();

  // If cursor is outside svg canvas boundary
  if (
    e.clientX > boundary.right ||
    e.clientX < boundary.left ||
    e.clientY < boundary.top ||
    e.clientY > boundary.bottom
  ) {
    this.mouse.target = null;
  }
};

svg.mouse.mode.func = function () {
  if (this.mouse.target != null) {
    this.mouse.mode.name = 'drag';
  } else {
    this.mouse.mode.name = 'click';
    objui.open();
    objui.update(this.mouse.target, this.click.coords.x, this.click.coords.y);
  }
};

svg.setdimensions = function (width, height) {
  if (!height) {
    height = (width / 16) * 9;
  }
  this.el.setAttribute('width', width);
  this.el.setAttribute('height', height);

  document.getElementById('grid-wrapper').style.width = width + 'px';
  document.getElementById('grid-wrapper').style.height = height + 'px';
};

svg.addEvents = function () {
  this.el.addEventListener('mousemove', this.mouseMove.bind(this));
  this.el.addEventListener('mousedown', this.mouseDown.bind(this));
  this.el.addEventListener('mouseup', this.mouseUp.bind(this));
  this.el.addEventListener('mouseout', this.mouseOut.bind(this));
};

svg.init = function () {
  var grid = document.getElementById('grid');

  this.el.setAttribute('xmlns', this.ns);
  this.el.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
  this.setdimensions(grid.offsetWidth);
  this.el.style.cssText =
    'position:absolute;z-index:999;background-color:rgba(255,255,255,0.9);';

  grid.parentNode.insertBefore(this.el, grid);

  this.addEvents();
};

svg.init();
