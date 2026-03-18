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

    <p style="margin-top:0.75rem;color:#8a3d63;font-weight:600;">
      Important: After you complete Venmo payment, click “I’ve Paid / Clear Cart” so your receipt is automatically sent to our business email for record keeping.
    </p>

    <!-- "I've Paid / Clear Cart" Button -->
    <button id="clear-cart-btn" style="margin-top:1rem;padding:0.75rem 1.5rem;background:#fc78b5;color:#fff;border:none;border-radius:10px;cursor:pointer;font-weight:600;box-shadow:0 4px 12px rgba(0,0,0,0.15);transition:0.2s ease;">
      I’ve Paid / Clear Cart
    </button>

    <p id="receipt-send-status" style="margin-top:0.75rem;font-size:0.9rem;color:#8a3d63;"></p>

    <a href="{{ '/receipt/' | relative_url }}" style="display:inline-block;margin-top:0.75rem;padding:0.75rem 1.5rem;background:#fff;color:#fc78b5;border:2px solid #fc78b5;border-radius:10px;text-decoration:none;font-weight:600;">
      View Receipt
    </a>
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
  const WEB3FORMS_ACCESS_KEY = '1a040c4a-088c-42d7-a6c5-5d3c4b46bb40';

  let cart = JSON.parse(localStorage.getItem('sweetPoteatCart')) || [];
  const receiptMeta = JSON.parse(localStorage.getItem('sweetPoteatReceiptMeta')) || {};
  const TAX_RATE = 0.03;
  let subtotal = cart.reduce((sum, i) => sum + i.qty * i.price, 0);
  let tax = subtotal * TAX_RATE;
  let totalPrice = subtotal + tax;

    // Update total
    const totalText = document.getElementById('venmo-total-text');
  if (totalText) totalText.innerHTML = `Subtotal: $${subtotal.toFixed(2)}<br>Tax (3%): $${tax.toFixed(2)}<br>You need to send: $${totalPrice.toFixed(2)}`;

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
    const sendStatus = document.getElementById('receipt-send-status');
    if (clearBtn) {
        clearBtn.addEventListener('click', async function() {
            try {
              clearBtn.disabled = true;
              clearBtn.textContent = 'Sending receipt...';
          if (sendStatus) sendStatus.textContent = 'Submitting paid receipt...';

              const submittedAt = receiptMeta.submittedAt ? new Date(receiptMeta.submittedAt) : new Date();
              const receiptId = `SP-${submittedAt.getFullYear()}${String(submittedAt.getMonth() + 1).padStart(2, '0')}${String(submittedAt.getDate()).padStart(2, '0')}-${String(submittedAt.getTime()).slice(-6)}`;

              const itemLines = cart.length > 0
                ? cart.map(i => `- ${i.qty} x ${i.item} — $${(i.qty * i.price).toFixed(2)}`)
                : ['- No items found in cart'];

              const messageLines = [
                'PAID ORDER RECEIPT',
                `Receipt ID: ${receiptId}`,
                `Date: ${new Date().toLocaleString()}`,
                'Delivery Target: Web3Forms inbox for this access key',
                '',
                `Customer Name: ${receiptMeta.name || '—'}`,
                `Customer Email: ${receiptMeta.email || '—'}`,
                `Customer Phone: ${receiptMeta.phone || '—'}`,
                '',
                'Order Items:',
                ...itemLines,
                '',
                `Subtotal: $${subtotal.toFixed(2)}`,
                `Tax (3%): $${tax.toFixed(2)}`,
                `Total: $${totalPrice.toFixed(2)}`
              ];

              const formData = new FormData();
              formData.append('access_key', WEB3FORMS_ACCESS_KEY);
              formData.append('subject', `Sweet Poteat Paid Receipt ${receiptId}`);
              formData.append('from_name', 'Sweet Poteat Website');
              formData.append('name', receiptMeta.name || 'Website Customer');
              formData.append('message', messageLines.join('\n'));
              formData.append('botcheck', '');
              if (receiptMeta.email) {
                formData.append('email', receiptMeta.email);
                formData.append('replyto', receiptMeta.email);
              }

              const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                  Accept: 'application/json'
                },
                body: formData
              });

              const result = await response.json();

              if (!response.ok || !result.success) {
                throw new Error(result.message || 'Receipt email request failed');
              }

              localStorage.setItem('sweetPoteatLastBusinessReceiptStatus', JSON.stringify({
                success: true,
                receiptId,
                submittedAt: new Date().toISOString(),
                provider: 'web3forms',
                response: result
              }));

              localStorage.removeItem('sweetPoteatCart');
              if (sendStatus) sendStatus.textContent = 'Paid receipt sent successfully.';
              alert('Thank you! Your payment confirmation was sent and your cart has been cleared.');
              window.location.href = '/'; // redirect home
            } catch (err) {
              const errMsg = err && err.message ? err.message : 'Unknown error';
              localStorage.setItem('sweetPoteatLastBusinessReceiptStatus', JSON.stringify({
                success: false,
                submittedAt: new Date().toISOString(),
                provider: 'web3forms',
                error: errMsg
              }));
              if (sendStatus) sendStatus.textContent = `Could not send receipt: ${errMsg}`;
              alert('We could not send the receipt record yet. Please try clicking “I’ve Paid / Clear Cart” again.');
              console.error(err);
              clearBtn.disabled = false;
              clearBtn.textContent = 'I’ve Paid / Clear Cart';
            }
        });
    }
});
</script>
