
<!-- Christmas Banner -->
<div class="gingerbread-card">
  
  <!-- Top Icing Decoration -->
  <div class="icing-drip"></div>
  <div class="icing-filler"></div>

  <!-- Background Texture -->
  <div class="cookie-grain"></div>

  <!-- Uniformly Distributed Stars -->
  <!-- Top Row -->
  <div class="sparkle small" style="top: 20%; left: 5%;"></div>
  <div class="sparkle medium" style="top: 15%; left: 25%;"></div>
  <div class="sparkle small"  style="top: 22%; left: 45%;"></div>
  <div class="sparkle medium" style="top: 15%; right: 25%;"></div>
  <div class="sparkle small"  style="top: 20%; right: 5%;"></div>

  <!-- Middle/Bottom Row -->
  <div class="sparkle medium" style="bottom: 25%; left: 10%;"></div>
  <div class="sparkle small"  style="bottom: 15%; left: 35%;"></div>
  <div class="sparkle medium" style="bottom: 20%; right: 35%;"></div>
  <div class="sparkle small"  style="bottom: 25%; right: 10%;"></div>

  <!-- Main Typography -->
  <div class="text-container">
    <div class="text-line">Merry</div>
    <div class="text-line">Christmas!</div>
  </div>

</div>

<style>
  /* --- Variables --- */
  :root {
    --gb-brown: #c59160;
    --gb-dark: #a87b4f;
    --icing-pink: #ffb6d3; /* Slightly lighter for better contrast */
    --icing-white: #ffffff;
  }

  /* --- Main Container --- */
  .gingerbread-card {
    position: relative;
    max-width: 900px;
    height: 300px;
    margin: 3rem auto;
    background-color: var(--gb-brown);
    /* Subtle gradient to give the cookie shape depth */
    background-image: radial-gradient(circle at center, var(--gb-brown) 0%, var(--gb-dark) 100%);
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Pacifico', cursive;
  }

  /* --- Cookie Texture (Grain) --- */
  .cookie-grain {
    position: absolute;
    inset: 0;
    opacity: 0.15;
    /* Noise pattern */
    background-image:  repeating-radial-gradient(#fff 0 0.0001%, #fff 0 0.0002%, transparent 0 0.0003%, transparent 0 1%);
    background-size: 20px 20px;
    pointer-events: none;
  }

  /* --- Top Icing Scallops --- */
  .icing-drip {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 30px;
    background-color: var(--icing-pink);
    /* Create scallops using radial gradient mask */
    mask-image: radial-gradient(circle at 50% 120%, transparent 8px, black 8.5px);
    mask-size: 25px 20px;
    mask-repeat: repeat-x;
    mask-position: bottom;
    -webkit-mask-image: radial-gradient(circle at 50% 120%, transparent 8px, black 8.5px);
    -webkit-mask-size: 25px 20px;
    -webkit-mask-repeat: repeat-x;
    -webkit-mask-position: bottom;
    z-index: 10;
  }
  
  /* Solid pink bar behind the scallops so it touches the top edge */
  .icing-filler {
    position: absolute;
    top: 0; left: 0; right: 0; height: 15px;
    background: var(--icing-pink);
    z-index: 9;
  }

  /* --- Typography Styling --- */
  .text-container {
    z-index: 20;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .text-line {
    font-size: 4.5rem;
    line-height: 1;
    font-weight: bold;
    font-style: italic;
    color: var(--icing-pink);
    letter-spacing: -1px;
    /* Elegant, clean contrast instead of 3D piping */
    text-shadow: 
      0 2px 0 rgba(0,0,0,0.1), /* Slight depth */
      0 0 20px rgba(255, 182, 211, 0.4); /* Soft glow */
    /* Subtle white stroke for readability */
    -webkit-text-stroke: 1.5px white;
    paint-order: stroke fill;
  }

  /* --- Sparkle/Star CSS Shape --- */
  .sparkle {
    position: absolute;
    background: #fff;
    /* 4-point star shape */
    clip-path: polygon(50% 0%, 65% 35%, 100% 50%, 65% 65%, 50% 100%, 35% 65%, 0% 50%, 35% 35%);
    animation: twinkle 4s ease-in-out infinite;
    box-shadow: 0 0 10px rgba(255,255,255,0.9);
  }

  .sparkle.medium { width: 25px; height: 25px; animation-delay: 0s; }
  .sparkle.small  { width: 15px; height: 15px; animation-delay: 1.5s; opacity: 0.8; }

  @keyframes twinkle {
    0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.9; }
    50% { transform: scale(0.8) rotate(15deg); opacity: 0.5; }
  }

  /* --- Mobile Response --- */
  @media (max-width: 600px) {
    .text-line { font-size: 3rem; -webkit-text-stroke: 1px white; }
    .gingerbread-card { height: 220px; }
  }
</style>