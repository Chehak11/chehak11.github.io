// 1) Show a labeled placeholder for any image or video that hasn't been added to /images yet.
// 2) Give every picture a box with its own shape (--ar), so new images never get empty bands.
document.querySelectorAll('.fig').forEach(function (fig) {
  var media = fig.querySelector('img, video');
  if (!media) { fig.classList.add('missing'); return; }
  var miss = function () { fig.classList.add('missing'); };
  var setAr = function (w, h) {
    if (!w || !h) return;
    var r = (w / h).toFixed(3);
    var host = fig.parentElement && fig.parentElement.parentElement && fig.parentElement.parentElement.classList.contains('figs') ? fig.parentElement : fig;
    host.style.setProperty('--ar', r);
    if (host !== fig) fig.style.setProperty('--ar', r);
  };
  if (media.tagName === 'IMG') {
    if (media.complete) { media.naturalWidth === 0 ? miss() : setAr(media.naturalWidth, media.naturalHeight); }
    media.addEventListener('load', function () { setAr(media.naturalWidth, media.naturalHeight); });
    media.addEventListener('error', miss);
  } else {
    var src = media.querySelector('source');
    (src || media).addEventListener('error', miss);
    media.addEventListener('loadedmetadata', function () { setAr(media.videoWidth, media.videoHeight); });
  }
});
