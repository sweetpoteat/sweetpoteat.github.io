---
layout: home
title: Welcome to Sweet Poteat Bakery
---

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
      href="{{ '/all/' | relative_url }}"
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
          src="{{ '/assets/images/banner/biscoff-truffle-banner.jpg' | relative_url }}"
          alt="Delicious treats"
          style="width: 100%; height: 100%; object-fit: cover"
        />
      </div>
      <div class="swiper-slide">
        <img
          src="{{ '/assets/images/banner/pb-blossom-banner.jpg' | relative_url }}"
          alt="Cookies"
          style="width: 100%; height: 100%; object-fit: cover"
        />
      </div>
      <div class="swiper-slide">
        <img
          src="{{ '/assets/images/banner/cookie-dough-banner.jpg' | relative_url }}"
          alt="Cupcakes"
          style="width: 100%; height: 100%; object-fit: cover"
        />
      </div>
      <div class="swiper-slide">
        <img
          src="{{ '/assets/images/banner/snickerdoodle-banner.jpg' | relative_url }}"
          alt="Cookies"
          style="width: 100%; height: 100%; object-fit: cover"
        />
      </div>
      <div class="swiper-slide">
        <img
          src="{{ '/assets/images/banner/lemon-truffle-banner.jpg' | relative_url }}"
          alt="Cupcakes"
          style="width: 100%; height: 100%; object-fit: cover"
        />
      </div>
      <div class="swiper-slide">
        <img
          src="{{ '/assets/images/banner/sugar-cookie-banner.jpg' | relative_url }}"
          alt="Cupcakes"
          style="width: 100%; height: 100%; object-fit: cover"
        />
      </div>
      <div class="swiper-slide">
        <img
          src="{{ '/assets/images/banner/strawberry-truffle-banner.jpg' | relative_url }}"
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
  <p>The Sweet Poteat Difference</p>
</div>

<!-- Grid of item categories -->
<div class="category-grid">
  <a href="{{ '/cookies/' | relative_url }}" class="category-card">
    <img src="{{ '/assets/images/icons/cookie.png' | relative_url }}" alt="Cookies" />
    <span>Cookies</span>
  </a>
  <a href="{{ '/truffles/' | relative_url }}" class="category-card">
    <img src="{{ '/assets/images/icons/truffle.png' | relative_url }}" alt="Truffles" />
    <span>Truffles</span>
  </a>
  <a href="{{ '/cupcakes/' | relative_url }}" class="category-card">
    <img src="{{ '/assets/images/icons/cupcake.png' | relative_url }}" alt="Cupcakes" />
    <span>Cupcakes</span>
  </a>
  <a href="{{ '/holiday/' | relative_url }}" class="category-card">
    <img src="{{ '/assets/images/icons/holiday.png' | relative_url }}" alt="Holiday" />
    <span>Holiday</span>
  </a>
</div>

<!-- Holiday Specials Banner -->
<div style="background: #ffe3f0; border-radius: 12px; margin: 2rem auto; max-width: 900px; padding: 2rem; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
  <h2 style="color: #fc78b5; font-size: 2rem; margin-bottom: 0.5rem;">Celebrate With Sweet Poteat Bakery!</h2>
  <p style="color: #333; font-size: 1.1rem; margin-bottom: 1rem;">
    Our seasonal treats are perfect for making the holidays extra special. Check out our limited-time goodies and order early to sweeten your celebrations!
  </p>
  <a href="{{ '/holiday/' | relative_url }}" style="display:inline-block; background-color: #fc78b5; color: #fff; padding: 12px 24px; border-radius: 999px; font-weight: bold; font-size: 1.1rem; text-decoration: none; box-shadow: 0 4px 10px rgba(0,0,0,0.2); transition: background-color 0.3s ease; min-width: 200px;"
     onmouseover="this.style.backgroundColor='#ffc4ea'" 
     onmouseout="this.style.backgroundColor='#fc78b5'">
    Reserve Your Holiday Treats
  </a>
</div>

<!-- Baking Classes Banner -->
<div style="background: #ffe3f0; border-radius: 12px; margin: 2rem auto; max-width: 900px; padding: 2rem; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
  <h2 style="color: #fc78b5; font-size: 2rem; margin-bottom: 0.5rem;">Learn to Bake With Us!</h2>
  <p style="color: #333; font-size: 1.1rem; margin-bottom: 1rem;">
    Join Sweet Poteat Homemade Treats for hands-on baking classes. From truffles to cupcakes, we’ll guide you step by step.
  </p>
  <p style="color: #333; font-size: 0.95rem; margin-bottom: 1.5rem;">
    Simply fill out our contact form to express your interest, and we’ll coordinate over email or text with all the details.
  </p>
  <a href="{{ '/contact/' | relative_url }}" style="display:inline-block; background-color: #fc78b5; color: #fff; padding: 12px 24px; border-radius: 999px; font-weight: bold; font-size: 1.1rem; text-decoration: none; box-shadow: 0 4px 10px rgba(0,0,0,0.2); transition: background-color 0.3s ease; min-width: 200px;" 
     onmouseover="this.style.backgroundColor='#ffc4ea'" 
     onmouseout="this.style.backgroundColor='#fc78b5'">
    Contact Us to Sign Up
  </a>
</div>

<footer>
  <p style="font-size: 0.8rem; text-align: center;">
    Icons by <a href="https://www.flaticon.com/authors/freepik" target="_blank" rel="noopener">Freepik</a> from <a href="https://www.flaticon.com/" target="_blank" rel="noopener">Flaticon</a>
  </p>
</footer>
