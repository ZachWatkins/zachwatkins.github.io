import { svg } from './art-generator-svg.js';

export const ui = {
  form: document.createElement('form'),
  elements: {
    refresh: ['button'],
    save: ['button'],
    canvas: {
      size: ['select', 'options:full,custom'],
      width: ['input', 'type:number', 'value:640'],
      height: ['input', 'type:number', 'value:200'],
      xbuffer: ['input', 'type:number', 'value:10', 'min:0'],
      ybuffer: ['input', 'type:number', 'value:10', 'min:0'],
    },
    lines: {
      count: ['input', 'type:number', 'value:9'],
      min_width: ['input', 'type:number', 'value:2'],
      max_width: ['input', 'type:number', 'value:20'],
      diagonals: ['input', 'type:number', 'value:5', 'min:0'],
      colored: ['input', 'type:number', 'value:1', 'min:0'],
    },
    circles: {
      count: ['input', 'type:number', 'value:1'],
      min_radius: ['input', 'type:number', 'value:50'],
      max_radius: ['input', 'type:number', 'value:100'],
      fill: ['input', 'type:text', 'value:transparent'],
    },
    squares: {
      count: ['input', 'type:number', 'value:1'],
      min_width: ['input', 'type:number', 'value:50'],
      max_width: ['input', 'type:number', 'value:100'],
      fill: ['input', 'type:text', 'value:transparent'],
    },
    close: ['button'],
  },
  capitalizeFirstLetter: function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },
  toggleExpanded: function (e) {
    e.target.classList.toggle('expanded');
  },
  saveEvent: function (e) {
    e.preventDefault();
    var svg = document.querySelector('svg');
    var svgstring =
      '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">';
    svgstring += new XMLSerializer().serializeToString(svg);
    var datauri = 'data:image/svg+xml;base64,';
    datauri += window.btoa(svgstring);
    window.open(datauri);
  },
  setSVGDimensions: function (e) {
    var width, height;
    if (this.canvas.size.value == 'custom') {
      width = this.canvas.width.value;
      height = this.canvas.height.value;
    } else {
      var reference = document.querySelector('#viewport');
      width = reference.offsetWidth - 1;
      height = window.innerHeight - 1;
    }

    svg.setdimensions(width, height);
  },
};

ui.changeCanvasSize = function (e) {
  e.target.className = e.target.value;
  this.setSVGDimensions();
};

ui.updateDiagonalValues = function () {
  this.lines.diagonals.max = this.lines.count.value;
  if (this.lines.diagonals.value > this.lines.count.value) {
    this.lines.diagonals.value = this.lines.count.value;
  }
};

ui.closeForm = function (e) {
  e.preventDefault();
  this.form.classList.remove('show');
};

ui.openForm = function (e) {
  if (e.clientX < 10 && e.clientY < 10) {
    this.form.classList.add('show');
  }
};

ui.refreshView = function (e) {
  e.preventDefault();
  refreshLines();
  refreshCircles();
};

ui.updateLineWidths = function (e) {
  var lines = svg.el.getElementsByTagName('line'),
    diff =
      parseInt(this.lines.max_width.value) -
      parseInt(this.lines.minwidth.value);

  for (var i = 0; i < lines.length; i++) {
    var linewidth = parseInt(this.lines.minwidth.value),
      modifier = parseFloat(lines[i].getAttribute('width-percentage'));

    linewidth += diff * modifier;
    lines[i].setAttribute('stroke-width', linewidth);
  }
};

ui.init = function (e) {
  // Populate dynamic UI field values
  var grid = document.querySelector('#grid');
  this.updateDiagonalValues();
  this.canvas.xbuffer.max = Math.floor(grid.offsetWidth / 2);
  this.canvas.ybuffer.max = Math.floor(grid.offsetHeight / 2);
};

ui.generate = function () {
  // Generate form elements
  this.form.action = '';
  this.form.id = 'ui';

  // Build each menu item from "elements" property
  for (var property in this.elements) {
    if (this.elements.hasOwnProperty(property)) {
      var prop = this.elements[property];
      if (Array.isArray(prop)) {
        var el = document.createElement(prop[0]);
        switch (prop[0]) {
          case 'button':
            el.id = property;
            el.innerHTML = this.capitalizeFirstLetter(property);
            break;
          default:
            break;
        }
        this[property] = el;
        this.form.appendChild(this[property]);
      } else {
        var label = document.createElement('label'),
          fieldset = document.createElement('fieldset');
        fieldset.id = fieldset.name = label.for = property;
        label.innerHTML = this.capitalizeFirstLetter(property);
        this.form.appendChild(label);
        this[property] = {};

        for (var property2 in this.elements[property]) {
          if (this.elements[property].hasOwnProperty(property2)) {
            var prop2 = this.elements[property][property2],
              label2 = document.createElement('label'),
              el = document.createElement(prop2[0]),
              labeltext = property2.split('_');
            label2.for = property2;
            for (var i = 0; i < labeltext.length; i++) {
              labeltext[i] = this.capitalizeFirstLetter(labeltext[i]);
            }
            label2.innerHTML = labeltext.join(' ');
            switch (prop2[0]) {
              case 'input':
                if (prop2.length > 1) {
                  for (var i = 1; i < prop2.length; i++) {
                    var pair = prop2[i].split(':');
                    if (pair.length == 1) pair.push('');
                    el.setAttribute(pair[0], pair[1]);
                  }
                }
                break;
              case 'select':
                if (prop2.length > 1) {
                  for (var i = 1; i < prop2.length; i++) {
                    var pair = prop2[i].split(':');
                    if (pair.length == 1) pair.push('');

                    if (prop2[i].indexOf('options:') < 0) {
                      el.setAttribute(pair[0], pair[1]);
                    } else {
                      var opts = pair[1].split(',');
                      for (var i = 0; i < opts.length; i++) {
                        var opt = document.createElement('option');
                        opt.setAttribute('value', opts[i]);
                        opt.innerHTML = this.capitalizeFirstLetter(opts[i]);
                        if (i == 0) opt.setAttribute('default', 'default');
                        el.appendChild(opt);
                      }
                    }
                  }
                }
              default:
                break;
            }
            this[property][property2] = el;
            fieldset.appendChild(label2);
            fieldset.appendChild(this[property][property2]);
          }
          this.form.appendChild(fieldset);
        }
      }
    }
  }

  document.body.appendChild(this.form);
};

ui.once = function () {
  this.generate();
  this.addEvents();

  // Add event listeners
  var menus = document.querySelectorAll('#ui > label');
  for (var i = 0; i < menus.length; i++) {
    menus[i].addEventListener('click', this.toggleExpanded);
  }

  // Initialize
  this.init();
};

ui.addEvents = function () {
  this.canvas.size.addEventListener('change', this.changeCanvasSize.bind(this));
  this.canvas.width.addEventListener('keyup', this.setSVGDimensions.bind(this));
  this.canvas.height.addEventListener(
    'keyup',
    this.setSVGDimensions.bind(this),
  );
  this.close.addEventListener('click', this.closeForm.bind(this));
  this.lines.count.addEventListener(
    'change',
    this.updateDiagonalValues.bind(this),
  );
  this.lines.max_width.addEventListener(
    'change',
    this.updateLineWidths.bind(this),
  );
  this.refresh.addEventListener('click', this.refreshView.bind(this));
  this.save.addEventListener('click', this.saveEvent);

  window.addEventListener('resize', this.init.bind(this));
  window.addEventListener('mousemove', this.openForm.bind(this));
};

// Initialize
ui.once();
