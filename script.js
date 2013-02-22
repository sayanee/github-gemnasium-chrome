var el = window.document.querySelector('.title-actions-bar h1 strong');
if (el) {
  insertStatusIcon(el);
}

function insertStatusIcon(el) {
  var project = window.location.pathname.split('/').splice(0,3).join('/');

  var img = window.document.createElement('img');
  img.src = 'https://gemnasium.com' + project + '.png';
  img.alt = 'dependancy status';

  img.onload = function() {
    document.styleSheets[0].insertRule('#gemnasium{border-radius:1px;display:inline-block;margin-left:8px;margin-bottom:-1px;opacity:0.9;-webkit-transition: all .2s;}', 1);
    document.styleSheets[0].insertRule('#gemnasium:hover{background:rgba(0,0,0,0.5);box-shadow: 0 0 3px rgba(0,0,0,1);opacity:1;cursor:pointer;}', 1);
    document.styleSheets[0].insertRule('#gemnasium img{display:block;}', 1);

    var link = window.document.createElement('a');
    link.href = 'http://gemnasium.com' + project;
    link.id = 'gemnasium';

    link.appendChild(img);
    el.appendChild(link);
  };
}
