// Novel-Slider
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentSlide = 0;

    // Thiết lập slider
    slider.style.width = `${slides.length * 100}%`;
    slides.forEach(slide => {
        slide.style.width = `${100 / slides.length}%`;
    });

    // Hàm chuyển đến slide tiếp theo
    function nextSlide() {
        if (currentSlide >= slides.length - 1) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }
        updateSlider();
    }

    // Hàm chuyển đến slide trước
    function prevSlide() {
        if (currentSlide <= 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide--;
        }
        updateSlider();
    }

    // Hàm cập nhật vị trí slider
    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * (100 / slides.length)}%)`;
    }

    // Thêm sự kiện click cho các nút
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Tự động chuyển slide sau mỗi 5 giây
    setInterval(nextSlide, 5000);
});
