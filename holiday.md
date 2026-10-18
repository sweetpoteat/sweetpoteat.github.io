---
layout: shop
title: Holiday
permalink: /holiday/
category: holiday
show_content: false
---

<style>
  .hw {
    --ink: #2a1a2e;
    --plum: #4a2c4f;
    --copper: #b4651f;
    --cream: #faf5ec;
    --rule: #d9cdb8;
    max-width: 920px;
    margin: 2rem auto 4rem;
    padding: 0 1.25rem;
    color: var(--ink);
  }
  .hw h1, .hw h2, .hw h3 { font-family: 'Italiana', serif; font-weight: 400; margin: 0; }

  /* Hero */
  .hw-hero {
    background: var(--ink);
    color: var(--cream);
    text-align: center;
    padding: 4rem 1.5rem 3.5rem;
    border-radius: 4px;
    position: relative;
    overflow: hidden;
  }
  .hw-hero > *:not(svg) { position: relative; z-index: 1; }
  .hw-web { position: absolute; top: 0; width: 230px; height: 230px; stroke: #d9a46a; fill: none; stroke-width: 0.8; opacity: 0.4; pointer-events: none; }
  .hw-web.left { left: 0; }
  .hw-web.right { right: 0; transform: scaleX(-1); }
  .hw-spider { position: absolute; top: 0; right: 14%; width: 44px; height: 120px; pointer-events: none; }
  .hw-spider line, .hw-spider path { stroke: #d9a46a; stroke-width: 1; fill: none; stroke-linecap: round; }
  .hw-spider ellipse { fill: #d9a46a; }
  .hw-eyebrow {
    font-size: 0.8rem;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: #d9a46a;
  }
  .hw-hero h1 { font-size: clamp(2.6rem, 7vw, 4.25rem); line-height: 1.05; margin: 1rem 0 1.5rem; }
  .hw-hero hr { width: 56px; border: 0; border-top: 1px solid #d9a46a; margin: 0 auto 1.5rem; }
  .hw-when { font-size: 1.15rem; line-height: 1.7; margin: 0; }
  .hw-when span { display: block; color: #d9a46a; letter-spacing: 0.04em; }

  /* Menu */
  .hw-menu { margin-top: 4rem; }
  .hw-menu > h2, .hw-gallery > h2 {
    text-align: center;
    font-size: 2.1rem;
    color: var(--plum);
    margin-bottom: 0.4rem;
  }
  .hw-sub { text-align: center; color: #7a6a7c; margin: 0 0 2.25rem; font-size: 0.95rem; letter-spacing: 0.04em; }
  .hw-item { padding: 1.25rem 0; border-top: 1px solid var(--rule); }
  .hw-item:last-child { border-bottom: 1px solid var(--rule); }
  .hw-row { display: flex; align-items: baseline; gap: 0.75rem; }
  .hw-row h3 { font-size: 1.5rem; color: var(--ink); }
  .hw-row .dots { flex: 1; border-bottom: 1px dotted #b9ab94; transform: translateY(-4px); min-width: 1rem; }
  .hw-price { font-size: 1.1rem; color: var(--copper); white-space: nowrap; }
  .hw-item p { margin: 0.4rem 0 0; color: #5d4d60; line-height: 1.55; max-width: 38rem; }
  .hw-tiers { display: flex; flex-direction: column; gap: 0.35rem; margin-top: 0.6rem; }
  .hw-tiers .hw-row h3 { font-family: 'Questrial', sans-serif; font-size: 1rem; color: #5d4d60; }

  /* Gallery */
  .hw-gallery { margin-top: 4.5rem; }
  .hw-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; margin-top: 2rem; }
  .hw-grid figure { margin: 0; }
  .hw-grid img { width: 100%; aspect-ratio: 4 / 5; object-fit: cover; display: block; border-radius: 2px; }
  .hw-grid figcaption {
    margin-top: 0.6rem;
    font-size: 0.8rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #5d4d60;
    text-align: center;
  }
  @media (max-width: 720px) {
    .hw-hero { padding: 3rem 1.25rem 2.75rem; }
    .hw-web { width: 130px; height: 130px; }
    .hw-spider { right: 8%; height: 90px; width: 33px; }
    .hw-grid { grid-template-columns: repeat(2, 1fr); gap: 1rem; }
    .hw-row h3 { font-size: 1.3rem; }
  }
</style>

<div class="hw">

  <section class="hw-hero">
  <svg class="hw-web left" viewBox="0 0 230 230" aria-hidden="true">
      <path d="M0 0 L230 0 M0 0 L215 85 M0 0 L170 170 M0 0 L85 215 M0 0 L0 230"/>
      <path d="M46 0 Q34 34 0 46 M92 0 Q70 70 0 92 M138 0 Q104 104 0 138 M184 0 Q140 140 0 184"/>
  </svg>
  <svg class="hw-web right" viewBox="0 0 230 230" aria-hidden="true">
      <path d="M0 0 L230 0 M0 0 L215 85 M0 0 L170 170 M0 0 L85 215 M0 0 L0 230"/>
      <path d="M46 0 Q34 34 0 46 M92 0 Q70 70 0 92 M138 0 Q104 104 0 138 M184 0 Q140 140 0 184"/>
  </svg>
  <svg class="hw-spider" viewBox="0 0 44 120" aria-hidden="true">
    <line x1="22" y1="0" x2="22" y2="84"/>
    <ellipse cx="22" cy="104" rx="7" ry="9"/>
    <ellipse cx="22" cy="90" rx="4" ry="4.5"/>
    <path d="M17 100 Q8 94 3 100 M17 104 Q8 104 2 111 M27 100 Q36 94 41 100 M27 104 Q36 104 42 111 M18 96 Q10 88 6 90 M26 96 Q34 88 38 90 M18 108 Q10 114 8 118 M26 108 Q34 114 36 118"/>
  </svg>
    <div class="hw-eyebrow">Sweet Poteat Presents</div>
    <h1>The Halloween<br>Bake Sale</h1>
    <hr>
    <p class="hw-when">
      <span>Monday, October 26th &nbsp;&middot;&nbsp; 3:30 to 6:00 pm</span>
      Corner of 310 S and Storrs Ave
    </p>
  </section>

  <section class="hw-menu">
    <h2>What's at the Sale</h2>
    <p class="hw-sub">Everything is baked fresh and available while supplies last.</p>

    <div class="hw-item">
      <div class="hw-row"><h3>Halloween Oreo Truffle Box</h3><span class="dots"></span><span class="hw-price">$18.50</span></div>
      <p>A box of 16 delicious Halloween Oreo Truffles, with two of each of 8 spooky, hand-decorated designs!</p>
    </div>

    <div class="hw-item">
      <div class="hw-row"><h3>Variety Fall Box</h3><span class="dots"></span><span class="hw-price">$14</span></div>
      <p>A festive box of 12 treats featuring 6 delicious varieties—two of each: Pumpkin Snickerdoodles, Pumpkin Chocolate Chip Cookies, Double Chocolate White Chocolate Chip Cookies, Peanut Butter Blossom Spiders, Pumpkin Spice Truffles, and Frosted Pumpkin Cookies!</p>
    </div>

    <div class="hw-item">
      <div class="hw-row"><h3>Assorted Halloween Truffles</h3></div>
      <div class="hw-tiers">
        <div class="hw-row"><h3>Box of 2</h3><span class="dots"></span><span class="hw-price">$3</span></div>
        <div class="hw-row"><h3>Box of 4</h3><span class="dots"></span><span class="hw-price">$5</span></div>
      </div>
    </div>

    <div class="hw-item">
      <div class="hw-row"><h3>Assorted Pumpkin Spice Truffles</h3></div>
      <div class="hw-tiers">
        <div class="hw-row"><h3>Box of 2</h3><span class="dots"></span><span class="hw-price">$3</span></div>
        <div class="hw-row"><h3>Box of 4</h3><span class="dots"></span><span class="hw-price">$5</span></div>
      </div>
    </div>

    <div class="hw-item">
      <div class="hw-row"><h3>Individual Cookies</h3><span class="dots"></span><span class="hw-price">$1.50</span></div>
    </div>
  </section>

  <section class="hw-gallery">
    <h2>A Peek at the Treats</h2>
    <div class="hw-grid">
      <figure>
        <img src="{{ '/assets/images/holiday-products/halloween/halloween-truffle/htruff1.jpg' | relative_url }}" alt="Halloween truffles" loading="lazy">
        <figcaption>Halloween Truffles</figcaption>
      </figure>
      <figure>
        <img src="{{ '/assets/images/holiday-products/halloween/witch-hat-truffle/wht1.jpg' | relative_url }}" alt="Witch hat truffles" loading="lazy">
        <figcaption>Witch Hat Truffles</figcaption>
      </figure>
      <figure>
        <img src="{{ '/assets/images/products/pumpkin-spice-snickerdoodle/pss1.jpg' | relative_url }}" alt="Pumpkin snickerdoodles" loading="lazy">
        <figcaption>Pumpkin Snickerdoodles</figcaption>
      </figure>
      <figure>
        <img src="{{ '/assets/images/products/pumpkin-choco-chip-cookie/pumpkin-choco-chip-cookie1.jpg' | relative_url }}" alt="Pumpkin chocolate chip cookies" loading="lazy">
        <figcaption>Pumpkin Chocolate Chip</figcaption>
      </figure>
      <figure>
        <img src="{{ '/assets/images/products/double-choc-white-choc-chip-cookie/dcwccc1.jpg' | relative_url }}" alt="Double chocolate white chocolate chip cookies" loading="lazy">
        <figcaption>Double Chocolate &amp; White Chip</figcaption>
      </figure>
      <figure>
        <img src="{{ '/assets/images/products/pumpkin-spice-cookie/frosted-pumpkin-spice-cookie1.jpg' | relative_url }}" alt="Frosted pumpkin cookies" loading="lazy">
        <figcaption>Frosted Pumpkin Cookies</figcaption>
      </figure>
    </div>
  </section>

</div>
