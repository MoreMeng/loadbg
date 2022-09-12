const bingBG = document.querySelector('#bg');

const getBackground = async (el, display) => {
  el.style.opacity = 0;
  el.style.display = display || "block";
  el.style.backgroundImage = `url(${site_url}/../bing-wallpaper/)`;

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .05) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
    setTimeout(() => {
      el.className = 'blur';
    }, 5000)
  })();
}

getBackground(bingBG);