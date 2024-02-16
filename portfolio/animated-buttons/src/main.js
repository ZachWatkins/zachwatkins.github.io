import './styles.css';

// Google Asynchronous Web Font Loader
window.WebFontConfig = {
  google: {
    families: [
      'Sanchez',
      'Arvo:700',
      'Homenaje',
      'Montserrat Alternates:700',
      'Boogaloo',
      'Averia Sans Libre:700,italic',
    ],
  },
};
(function () {
  var wf = document.createElement('script');
  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();
