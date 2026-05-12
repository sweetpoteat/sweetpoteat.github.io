---
layout: home
title: Welcome to Sweet Poteat Bakery
---

<!-- Hero Carousel -->

<div class="hero-carousel-wrapper">
  <div class="swiper-container hero-carousel-swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="{{ '/assets/images/banner/biscoff-truffle-banner.jpg' | relative_url }}" alt="Biscoff Truffles">
      </div>
      <div class="swiper-slide">
        <img src="{{ '/assets/images/banner/pb-blossom-banner.jpg' | relative_url }}" alt="Peanut Butter Blossoms" loading="lazy">
      </div>
      <div class="swiper-slide">
        <img src="{{ '/assets/images/banner/cookie-dough-banner.jpg' | relative_url }}" alt="Cookie Dough" loading="lazy">
      </div>
      <div class="swiper-slide">
        <img src="{{ '/assets/images/banner/snickerdoodle-banner.jpg' | relative_url }}" alt="Snickerdoodles" loading="lazy">
      </div>
      <div class="swiper-slide">
        <img src="{{ '/assets/images/banner/lemon-truffle-banner.jpg' | relative_url }}" alt="Lemon Truffles" loading="lazy">
      </div>
      <div class="swiper-slide">
        <img src="{{ '/assets/images/banner/sugar-cookie-banner.jpg' | relative_url }}" alt="Sugar Cookies" loading="lazy">
      </div>
      <div class="swiper-slide">
        <img src="{{ '/assets/images/banner/strawberry-truffle-banner.jpg' | relative_url }}" alt="Strawberry Truffles" loading="lazy">
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- Shop Now centered over the banner -->
    <a href="{{ '/all/' | relative_url }}" class="btn-primary hero-shop-now">Shop Now</a>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    new Swiper(".hero-carousel-swiper", {
      loop: true,
      slidesPerView: 1,
      autoplay: { delay: 4000, disableOnInteraction: false },
      pagination: { el: ".hero-carousel-swiper .swiper-pagination", clickable: true },
      navigation: {
        nextEl: ".hero-carousel-swiper .swiper-button-next",
        prevEl: ".hero-carousel-swiper .swiper-button-prev"
      }
    });
  });
</script>

<!-- Slogan Ribbon -->
<div class="slogan-ribbon">
  <p>The Sweet Poteat Difference</p>
</div>

<!-- Category Grid -->
<div class="category-grid">
  <a href="{{ '/cookies/' | relative_url }}" class="category-card">
    <img src="{{ '/assets/images/icons/cookie.png' | relative_url }}" alt="Cookies" loading="lazy">
    <span>Cookies</span>
  </a>
  <a href="{{ '/truffles/' | relative_url }}" class="category-card">
    <img src="{{ '/assets/images/icons/truffle.png' | relative_url }}" alt="Truffles" loading="lazy">
    <span>Truffles</span>
  </a>
  <a href="{{ '/all/' | relative_url }}" class="category-card">
    <img src="{{ '/assets/images/icons/cupcake.png' | relative_url }}" alt="All Treats" loading="lazy">
    <span>All Treats</span>
  </a>
  <a href="{{ '/holiday/' | relative_url }}" class="category-card">
    <img src="{{ '/assets/images/icons/holiday.png' | relative_url }}" alt="Holiday" loading="lazy">
    <span>Holiday</span>
  </a>
</div>

<!-- Holiday Specials Banner — pink fill -->
<div class="banner-card banner-card--pink">
  <h2 class="banner-card__title">Celebrate With Sweet Poteat!</h2>
  <p class="banner-card__text">
    Our seasonal treats are perfect for making the holidays extra special. Check out our limited-time goodies and order early to sweeten your celebrations!
  </p>
  <a href="{{ '/holiday/' | relative_url }}" class="btn-primary">Reserve Your Holiday Treats</a>
</div>

<!-- Baking Classes Banner — white outline (visually distinct from above) -->
<div class="banner-card banner-card--outline">
  <h2 class="banner-card__title">Learn to Bake With Us!</h2>
  <p class="banner-card__text">
    Join Sweet Poteat for hands-on baking classes. From truffles to cupcakes, we'll guide you step by step.
  </p>
  <p class="banner-card__subtext">
    Fill out our contact form to express your interest and we'll coordinate all the details over email or text.
  </p>
  <a href="{{ '/contact/' | relative_url }}" class="btn-primary">Contact Us to Sign Up</a>
</div>

<p style="font-size:0.8rem;text-align:center;color:#999;margin-bottom:1rem;">
  Icons by <a href="https://www.flaticon.com/authors/freepik" target="_blank" rel="noopener" style="color:#999;">Freepik</a> from <a href="https://www.flaticon.com/" target="_blank" rel="noopener" style="color:#999;">Flaticon</a>
</p>
