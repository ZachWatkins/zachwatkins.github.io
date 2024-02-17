export function createUi(svg) {
  const ui = {
    form: document.createElement('form'),
    elements: {
      randomize: ['button'],
      save: ['button'],
      canvas: {
        width: ['input', 'type:number', 'value:'],
        height: ['input', 'type:number', 'value:'],
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

      var serializer = new XMLSerializer();
      var svgBlob = new Blob([serializer.serializeToString(svg.el)], {
        type: 'image/svg+xml',
      });
      var url = URL.createObjectURL(svgBlob);

      var downloadLink = document.createElement('a');
      downloadLink.href = url;
      downloadLink.download = 'my-svg.svg';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      console.log(url);
      URL.revokeObjectURL(url);
    },
    setSVGDimensions: function (e) {
      e.preventDefault();
      var width, height;
      var reference = document.querySelector('#viewport');
      if (this.canvas.width.value) {
        width = parseInt(this.canvas.width.value);
      } else {
        width = reference.offsetWidth - 1;
      }
      if (this.canvas.height.value) {
        height = parseInt(this.canvas.height.value);
      } else {
        height = (width / 16) * 9;
      }
      console.log('setting svg dimensions', width, height);

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
    // If the mouse is moving over the svg element, then show the form.
    var svgBounds = svg.el.getBoundingClientRect();
    if (
      e.clientX > svgBounds.left &&
      e.clientX < svgBounds.right &&
      e.clientY > svgBounds.top &&
      e.clientY < svgBounds.bottom
    ) {
      this.form.classList.add('show');
    } else {
      this.form.classList.remove('show');
    }
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

  ui.render = function (target) {
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

    target.appendChild(this.form);
  };

  ui.once = function ({ root, refresh }) {
    ui.refreshView = function (e) {
      e.preventDefault();
      refresh();
    };
    this.render(root);
    this.addEvents();

    this.canvas.width.value = root.offsetWidth;
    this.canvas.height.value = root.offsetHeight;

    // Add event listeners
    var menus = document.querySelectorAll('#ui > label');
    for (var i = 0; i < menus.length; i++) {
      menus[i].addEventListener('click', this.toggleExpanded);
    }

    // Initialize
    this.init();
  };

  ui.addEvents = function () {
    this.form.addEventListener('submit', function (e) {
      e.preventDefault();
    });
    this.canvas.width.addEventListener(
      'keyup',
      this.setSVGDimensions.bind(this),
    );
    this.canvas.height.addEventListener(
      'keyup',
      this.setSVGDimensions.bind(this),
    );
    this.close.addEventListener('mouseup', this.closeForm.bind(this));
    this.lines.count.addEventListener(
      'change',
      this.updateDiagonalValues.bind(this),
    );
    this.lines.max_width.addEventListener(
      'change',
      this.updateLineWidths.bind(this),
    );
    this.randomize.addEventListener('mouseup', this.refreshView.bind(this));
    this.save.addEventListener('mouseup', this.saveEvent);

    window.addEventListener('resize', this.init.bind(this));
    window.addEventListener('mousemove', this.openForm.bind(this));
  };

  return ui;
}

export default { createUi };
