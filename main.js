(function () {
  var d = document.documentElement;
  var q = new URLSearchParams(location.search).get('lang');
  var l = (q === 'de' || q === 'en') ? q : 'en';

  function apply(x) {
    l = x;
    d.setAttribute('data-lang', x);
    d.setAttribute('lang', x);
    var i, el;
    var btns = document.querySelectorAll('[data-set-lang]');
    for (i = 0; i < btns.length; i++) {
      btns[i].setAttribute('aria-pressed', btns[i].getAttribute('data-set-lang') === x ? 'true' : 'false');
    }
    var links = document.querySelectorAll('a[data-int]');
    for (i = 0; i < links.length; i++) {
      links[i].setAttribute('href', links[i].getAttribute('data-int') + '?lang=' + x);
    }
  }

  d.setAttribute('data-lang', l);
  d.setAttribute('lang', l);

  document.addEventListener('DOMContentLoaded', function () {
    apply(l);
    var btns = document.querySelectorAll('[data-set-lang]');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function (e) {
        apply(e.currentTarget.getAttribute('data-set-lang'));
      });
    }
  });
})();
