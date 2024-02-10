import(
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'
).then(() => {
  import('./jquery-plugin.js').then(() => {
    $('#demo ol li').gumboot({
      selector: 'em',
      separator: '-',
      callback: function (settings, index, length) {
        var $this = $(this);
        $this.append('<br>' + JSON.stringify($this.data('gumboot')));
      },
    });
  });
});
