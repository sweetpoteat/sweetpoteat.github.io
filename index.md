---
layout: home
title: Welcome to Sweet Poteat Bakery
---


<!-- fc78b5 -->

<!-- Carousel with Shop Now Button -->

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
/>

<div style="padding: 2rem 0;">
  <div
    class="swiper-container"
    style="
      max-width: 900px;
      width: 90%;
      height: 350px;
      margin: 0 auto;
      position: relative;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    "
  >
    <!-- Centered Shop Now Button -->
    <a
      href="/all"
      style="
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
        background-color: #fc78b5;
        color: white;
        padding: 12px 24px;
        border-radius: 999px;
        font-weight: bold;
        font-size: 1.1rem;
        text-decoration: none;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        transition: background-color 0.3s ease;
      "
      onmouseover="this.style.backgroundColor='#ffc4ea'"
      onmouseout="this.style.backgroundColor='#fc78b5'"
    >
      Shop Now
    </a>

    <!-- Slides -->
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img
          src="assets/images/banner1.jpg"
          alt="Delicious treats"
          style="width: 100%; height: 100%; object-fit: cover"
        />
      </div>
      <div class="swiper-slide">
        <img
          src="assets/images/banner2.jpg"
          alt="Cookies"
          style="width: 100%; height: 100%; object-fit: cover"
        />
      </div>
      <div class="swiper-slide">
        <img
          src="assets/images/banner3.jpg"
          alt="Cupcakes"
          style="width: 100%; height: 100%; object-fit: cover"
        />
      </div>
    </div>

    <!-- Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</div>

<!-- Swiper JS -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<!-- Swiper Initialization -->
<script>
  var swiper = new Swiper(".swiper-container", {
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
</script>


<!-- Ribbon with slogan -->

<div class="slogan-ribbon">
  <p>Your Favorite Treats, Made With Love</p>
</div>


<!-- Grid of item categories -->

<div class="category-grid">
  <a href="/cookies/" class="category-card">
    <img src="{{ site.baseurl }}/assets/images/icons/cookie.png" alt="Cookies" />
    <span>Cookies</span>
  </a>
  <a href="/truffles/" class="category-card">
    <img src="{{ site.baseurl }}/assets/images/icons/truffle.png" alt="Truffles" />
    <span>Truffles</span>
  </a>
  <a href="/cupcakes/" class="category-card">
    <img src="{{ site.baseurl }}/assets/images/icons/cupcake.png" alt="Cupcakes" />
    <span>Cupcakes</span>
  </a>
  <a href="/holiday/" class="category-card">
    <img src="{{ site.baseurl }}/assets/images/icons/holiday.png" alt="Pies" />
    <span>Holiday</span>
  </a>
</div>

<footer>
  <p style="font-size: 0.8rem; text-align: center;">
    Icons by <a href="https://www.flaticon.com/authors/freepik" target="_blank" rel="noopener">Freepik</a> from <a href="https://www.flaticon.com/" target="_blank" rel="noopener">Flaticon</a>
  </p>
</footer>
