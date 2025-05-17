window.onload = function () {
  setTimeout(function () {
    document.getElementById("hang").style.display = "flex";
  }, 500);
}

function playVideo() {
  document.getElementById("hang").style.display = "none";

  const video = document.getElementById('vidi');
  video.play().then(() => {
    console.log('Videó elindult.');
  }).catch((err) => {
    console.error('Hiba történt a lejátszás során:', err);
  });
}
