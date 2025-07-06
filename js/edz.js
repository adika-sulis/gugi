window.onload = function () {
    setTimeout(function () {
        document.getElementById("hang").style.display = "flex";
    }, 500);
}

function playVideo() {
    document.getElementById("hang").style.display = "none";

    for (let i = 1; i <= 90; i++) {
        const video = document.getElementById(`vidi${i}`);
        if (video) {
            video.play().then(() => {
                console.log(`vidi${i} elindult.`);
            }).catch((err) => {
                console.error(`vidi${i} hiba a lejátszásnál:`, err);
            });
        }
    }
}
