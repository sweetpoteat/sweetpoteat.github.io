---
layout: shop
title: Holiday
permalink: /holiday/
category: holiday
show_content: true
---

<!-- Holiday Specials Banner -->
<!-- <div style="background: #ffe3f0; border-radius: 12px; margin: 2rem auto; max-width: 900px; padding: 2rem; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
  <h2 style="color: #fc78b5; font-size: 2rem; margin-bottom: 0.5rem;">Christmas Specials Coming to Website Soon!</h2>
</div> -->

<div class="carousel-container">
  <button class="carousel-arrow left" onclick="prevSlide()">‹</button>

  <div class="carousel-main-img-wrapper">
    <img id="carousel-main-img"
         src="/assets/images/holiday-products/valentines/cookie_wars.png"
         alt="Carousel image">
  </div>

  <button class="carousel-arrow right" onclick="nextSlide()">›</button>
</div>

<div class="carousel-thumbnails">
  <img src="/assets/images/holiday-products/valentines/cookie_wars.png"
       class="thumb active" onclick="setSlide(0)">
  <img src="/assets/images/holiday-products/valentines/kids_cookie_wars.png"
       class="thumb" onclick="setSlide(1)">
  <img src="/assets/images/holiday-products/valentines/kids_truffle_wars.png"
       class="thumb" onclick="setSlide(2)">
</div>

<style>
  .carousel-container {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}

/* Main image wrapper */
.carousel-main-img-wrapper {
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.carousel-main-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: contain;   /* show entire image */
  background: #fff;      /* or transparent / theme color */
}

.carousel-main-img-wrapper {
  linear-gradient(#fff, #f3f3f3);
}

/* Thumbnails */
.carousel-thumbnails {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 0.5rem;
}

.carousel-thumbnails img.thumb {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: 0.2s;
}

.carousel-thumbnails img.thumb.active {
  border-color: #fc78b5;
}

/* Arrows */
.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(252,120,181,0.85);
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  z-index: 10;
}

.carousel-arrow.left { left: 10px; }
.carousel-arrow.right { right: 10px; }
</style>


<script>
  const images = [
    "/assets/images/holiday-products/valentines/cookie_wars.png",
    "/assets/images/holiday-products/valentines/kids_cookie_wars.png",
    "/assets/images/holiday-products/valentines/kids_truffle_wars.png"
  ];

  let currentIndex = 0;

  const mainImg = document.getElementById("carousel-main-img");
  const thumbs = document.querySelectorAll(".carousel-thumbnails .thumb");

  function updateCarousel() {
    mainImg.src = images[currentIndex];
    thumbs.forEach((t, i) =>
      t.classList.toggle("active", i === currentIndex)
    );
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex =
      (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  }

  function setSlide(index) {
    currentIndex = index;
    updateCarousel();
  }
</script>
