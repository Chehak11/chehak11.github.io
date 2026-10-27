// Show a labeled placeholder for any image or video that hasn't been added to /images yet.
document.querySelectorAll('.fig').forEach(function (fig) {
  var media = fig.querySelector('img, video');
  if (!media) { fig.classList.add('missing'); return; }
  var miss = function () { fig.classList.add('missing'); };
  if (media.tagName === 'IMG') {
    if (media.complete && media.naturalWidth === 0) miss();
    media.addEventListener('error', miss);
  } else {
    var src = media.querySelector('source');
    (src || media).addEventListener('error', miss);
  }
});
