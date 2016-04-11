function load() {
  var links = document.querySelectorAll('.js-download-theme');
  [].forEach.call(links, function(link) {
    link.addEventListener('click', function(event) {
      ga('send', 'event', 'Download', 'click', link.dataset.themeId);
    });
  });
}

document.addEventListener("DOMContentLoaded", load, false);
