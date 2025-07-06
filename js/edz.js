window.onload = function () {
    setTimeout(function () {
        document.getElementById("hang").style.display = "flex";
    }, 500);
}

function playVideo() {
    document.getElementById("hang").style.display = "none";

    const videos = ['vidi', 'vidi2', 'vidi3'];

    videos.forEach(id => {
        const video = document.getElementById(id);
        if (video) {
            video.play().then(() => {
                console.log(`${id} elindult.`);
            }).catch((err) => {
                console.error(`${id} hiba történt a lejátszás során:`, err);
            });
        }
    });
}
