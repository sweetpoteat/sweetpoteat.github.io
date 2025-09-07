---
layout: home
title: Venmo Instructions
permalink: /venmo-instructions/
---

<div class="venmo-instructions-wrapper" style="max-width:600px;margin:0 auto;text-align:center;padding:2rem;font-family:inherit;">

  <h2 style="color:#fc78b5;margin-bottom:1rem;">Almost Done!</h2>
  <p style="font-size:1.1rem;color:#333;margin-bottom:2rem;">
    Thanks for sending your message! If you have placed an order, please send your payment via Venmo to:
  </p>

  <p style="font-weight:700;font-size:1.3rem;color:#fc78b5;margin-bottom:2rem;">@Teisha-Poteat</p>

    <!-- Venmo QR Code Image -->
  <img src="/assets/images/teisha-qr.jpg" alt="Venmo QR Code" style="max-width:300px;width:100%;margin:1rem auto;border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,0.1);">

  <!-- Cart Summary Card -->
  <div style="background: #fff0f6; border: 2px solid #fc78b5; border-radius: 16px; padding: 1.5rem; margin-bottom: 2rem; box-shadow: 0 4px 16px rgba(252,120,181,0.2); text-align:left;">
    <h3 style="color:#fc78b5; margin-bottom:1rem;">Your Order</h3>

    <div id="venmo-items" style="margin-bottom:1rem;"></div>

    <p id="venmo-total-text" style="font-weight:700; font-size:1.2rem; color:#ff90c3; text-align:right; margin-top:1rem;">
      You need to send: $0.00
    </p>

    <!-- "I've Paid / Clear Cart" Button -->
    <button id="clear-cart-btn" style="margin-top:1rem;padding:0.75rem 1.5rem;background:#fc78b5;color:#fff;border:none;border-radius:10px;cursor:pointer;font-weight:600;box-shadow:0 4px 12px rgba(0,0,0,0.15);transition:0.2s ease;">
      I’ve Paid / Clear Cart
    </button>
  </div>

  <p style="color:#333;font-size:0.95rem;margin-top:1rem;">
    Make sure to include your name and order details in the Venmo note so we can confirm your order quickly.
  </p>

  <a href="/" style="display:inline-block;margin-top:2rem;padding:0.75rem 1.5rem;background:#fc78b5;color:#fff;border-radius:10px;text-decoration:none;font-weight:600;box-shadow:0 4px 12px rgba(0,0,0,0.15);transition:0.2s ease;">
    Back to Home
  </a>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    let cart = JSON.parse(localStorage.getItem('sweetPoteatCart')) || [];
    let totalPrice = cart.reduce((sum, i) => sum + i.qty * i.price, 0);

    // Update total
    const totalText = document.getElementById('venmo-total-text');
    if (totalText) totalText.textContent = `You need to send: $${totalPrice.toFixed(2)}`;

    // Update itemized list
    const itemsDiv = document.getElementById('venmo-items');
    if (itemsDiv && cart.length > 0) {
        let html = '<ul style="list-style:none;padding:0;margin:0;">';
        cart.forEach(i => {
            html += `<li style="padding:0.25rem 0;border-bottom:1px solid #ff90c3;">${i.qty} x ${i.item} — $${(i.qty*i.price).toFixed(2)}</li>`;
        });
        html += '</ul>';
        itemsDiv.innerHTML = html;
    }

    // Clear cart button
    const clearBtn = document.getElementById('clear-cart-btn');
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            localStorage.removeItem('sweetPoteatCart');
            alert('Thank you! Your cart has been cleared.');
            window.location.href = '/'; // redirect home
        });
    }
});
</script>
