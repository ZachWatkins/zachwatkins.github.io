import { svg } from './art-generator-svg.js';
import { ui } from './art-generator-ui.js';

export const svgui = {
  el: document.querySelector('svg'),
  form: document.createElement('form'),
  wrap: document.createElement('div'),
  closebtn: document.createElement('button'),
  target: null,
  fields: [
    'x',
    'y',
    'x1',
    'y1',
    'x2',
    'y2',
    'cx',
    'cy',
    'r',
    'width',
    'height',
    'stroke',
    'stroke-width',
    'fill',
    'style',
    'index',
  ],
  textfields: ['stroke', 'fill', 'style'],
};

svgui.open = function (e) {
  if (e) e.preventDefault();
  this.wrap.classList.add('active');
};

svgui.close = function (e) {
  if (e) e.preventDefault();
  this.wrap.classList.remove('active');
};

svgui.correctPosition = function () {
  var rect = this.wrap.getBoundingClientRect();
  var bounds = this.el.getBoundingClientRect();
  if (rect.bottom > bounds.bottom) {
    // shift up
    this.wrap.style.top = bounds.height - rect.height - 4 + 'px';
  }
  if (rect.right > bounds.right) {
    // shift left
    this.wrap.style.left = bounds.width - rect.width - 20 + 'px';
  }
};

svgui.moveto = function (x, y) {
  // Move the UI
  this.wrap.style.left = x + 'px';
  this.wrap.style.top = y + 'px';

  window.requestAnimationFrame(this.correctPosition.bind(this));
};

svgui.init = function () {
  // Create basic ui elements
  this.wrap.id = 'svgui-wrapper';
  this.closebtn.id = 'svgui-close';
  this.closebtn.innerHTML = 'X';
  this.closebtn.addEventListener('click', this.close.bind(this));
  this.form.action = '';
  this.form.id = 'svgui';
  this.form.appendChild(this.closebtn);
  this.wrap.appendChild(this.form);

  // Create empty form fields
  this.createFields();

  this.el.addEventListener('mouseup', this.updateui.bind(this));

  // Add to page
  document.body.appendChild(this.wrap);
};

svgui.newField = function (name, type) {
  var label = document.createElement('label'),
    field = document.createElement('input');

  label.setAttribute('for', name);
  label.className =
    label.innerHTML =
    field.name =
    field.id =
    field.className =
      name;
  field.type = type;
  field.value = '';

  if (name == 'index') {
    field.min = 0;
    field.max = 99;
    field.addEventListener('change', this.changeIndex.bind(this));
  } else {
    field.addEventListener('change', this.updateatt.bind(this));
    if (type == 'number') {
      field.step = 'any';
      if (name == 'stroke-width') {
        field.min = 1;
        field.max = ui.lines.max_width.value;
      }
    }
  }

  this.form.appendChild(label);
  this.form.appendChild(field);
};

svgui.createFields = function () {
  // Create fields for element attributes
  for (var i = 0; i < this.fields.length; i++) {
    var field = this.fields[i],
      type = this.textfields.indexOf(field) < 0 ? 'number' : 'text';
    this.newField(field, type);
  }
};

svgui.updateatt = function (e) {
  console.log('updateatt');
  this.target.setAttribute(e.target.name, e.target.value);
};

svgui.changeIndex = function (e) {
  console.log('changeIndex');
  // Move element to new index
  var newindex = parseInt(e.target.value),
    elements = this.el.childNodes, // live list
    item = svgui.target;

  // Remove item from collection
  item.parentNode.removeChild(item);

  // Add item to page at desired index
  if (newindex < elements.length) {
    elements[newindex].parentNode.insertBefore(item, elements[newindex]);
  } else {
    this.el.appendChild(item);
  }
};

svgui.updateui = function (e) {
  if (e.target.tagName != 'svg' && svg.mouse.mode.name == 'click') {
    var o = svg.mouse.target,
      blacklist = ['class', 'width-percentage'],
      atts = o.attributes;

    this.target = o;

    // Disable all fields
    var fields = this.form.querySelectorAll(
      'label:not(.index),input:not(.index)',
    );
    for (var i = 0; i < fields.length; i++) {
      fields[i].classList.add('disabled');
    }

    // Update and show field values
    for (var i = 0; i < atts.length; i++) {
      var name = atts[i].name;

      if (blacklist.indexOf(name) < 0) {
        var el = this.form.querySelector('#' + name);
        // Update fields
        el.value = atts[i].value;
        el.classList.remove('disabled');
        el.previousSibling.classList.remove('disabled');
      }
    }

    // Update index field
    var indexfield = this.form.querySelector('#index');
    indexfield.max = this.el.childNodes.length;
    this.el.childNodes.forEach(
      function (item, index, list) {
        if (item == this.target) {
          indexfield.value = index;
        }
      }.bind(this),
    );

    this.open();
    this.moveto(e.clientX, e.clientY);
  }
};

svgui.init();
