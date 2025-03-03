document.addEventListener("DOMContentLoaded", function () {
    // 倒數計時
    function updateCountdown() {
        const weddingDate = new Date("2025-05-03T11:00:00");
        const now = new Date();
        const diff = weddingDate - now;

        if (diff <= 0) {
            document.getElementById("timer").innerHTML = "婚禮開始了！";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = `${days} 天 ${hours} 時 ${minutes} 分 ${seconds} 秒`;
    }
    setInterval(updateCountdown, 1000);
    updateCountdown();

    // 輪播婚紗照
    let slideIndex = 0;
    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000); // 每3秒切換一次
    }
    showSlides();
});
