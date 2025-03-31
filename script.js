document.addEventListener("DOMContentLoaded", function () {
    // Hero image zoom on scroll
    const heroBg = document.querySelector('.hero-bg');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (heroBg) {
            const scale = 1 + scrollY / 1500;
            heroBg.style.transform = `scale(${scale})`;
        }
    });
        
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

    // 初始化Bootstrap輪播
    var myCarousel = document.querySelector('#weddingCarousel');
    if (myCarousel) {
        // 檢查是否已加載Bootstrap
        if (typeof bootstrap !== 'undefined') {
            var carousel = new bootstrap.Carousel(myCarousel, {
                interval: 3000,
                wrap: true
            });
        } else {
            // 回退到原始的輪播邏輯
            let slideIndex = 0;
            function showSlides() {
                let slides = document.getElementsByClassName("carousel-item");
                for (let i = 0; i < slides.length; i++) {
                    slides[i].classList.remove("active");
                }
                slideIndex++;
                if (slideIndex > slides.length) { slideIndex = 1; }
                slides[slideIndex - 1].classList.add("active");
                setTimeout(showSlides, 3000);
            }
            showSlides();
        }
    }
});