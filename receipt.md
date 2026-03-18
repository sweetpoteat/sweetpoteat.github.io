---
layout: home
title: Receipt
permalink: /receipt/
---

<div class="venmo-instructions-wrapper" style="max-width:760px;margin:0 auto;padding:2rem;font-family:inherit;">
  <div id="receipt-card" style="background:#fff;border:2px solid #fc78b5;border-radius:16px;padding:1.5rem;box-shadow:0 4px 16px rgba(252,120,181,0.2);">
    <div style="text-align:center;border-bottom:1px solid #ffd3e7;padding-bottom:1rem;margin-bottom:1rem;">
      <img src="{{ '/assets/images/sp_logo1-removebg-preview.png' | relative_url }}" alt="Sweet Poteat logo" style="max-width:160px;width:100%;height:auto;">
      <h2 style="color:#fc78b5;margin:0.5rem 0 0.25rem;">Sweet Poteat Receipt</h2>
      <p id="receipt-id" style="margin:0;color:#555;font-size:0.95rem;">Receipt #</p>
      <p id="receipt-date" style="margin:0.25rem 0 0;color:#555;font-size:0.95rem;">Date:</p>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem;">
      <div>
        <h3 style="color:#fc78b5;margin:0 0 0.5rem;">Customer</h3>
        <p id="customer-name" style="margin:0.15rem 0;color:#333;">Name: —</p>
        <p id="customer-email" style="margin:0.15rem 0;color:#333;">Email: —</p>
        <p id="customer-phone" style="margin:0.15rem 0;color:#333;">Phone: —</p>
      </div>
      <div>
        <h3 style="color:#fc78b5;margin:0 0 0.5rem;">Business</h3>
        <p style="margin:0.15rem 0;color:#333;">Sweet Poteat</p>
        <p style="margin:0.15rem 0;color:#333;">Venmo: @Teisha-Poteat</p>
      </div>
    </div>

    <h3 style="color:#fc78b5;margin:0.5rem 0;">Order Items</h3>
    <div id="receipt-items" style="border:1px solid #ffd3e7;border-radius:10px;padding:0.75rem;background:#fff8fb;"></div>

    <div style="margin-top:1rem;text-align:right;">
      <p id="receipt-subtotal" style="margin:0.2rem 0;color:#333;">Subtotal: $0.00</p>
      <p id="receipt-tax" style="margin:0.2rem 0;color:#333;">Tax (3%): $0.00</p>
      <p id="receipt-total" style="margin:0.35rem 0;font-size:1.2rem;font-weight:700;color:#fc78b5;">Total: $0.00</p>
    </div>

    <div style="display:flex;gap:0.75rem;flex-wrap:wrap;margin-top:1rem;">
      <a id="email-customer-btn" href="#" style="display:inline-block;padding:0.7rem 1.1rem;background:#fc78b5;color:#fff;border-radius:10px;text-decoration:none;font-weight:600;">Email Customer Copy</a>
      <button id="download-pdf-btn" style="padding:0.7rem 1.1rem;background:#fff;color:#fc78b5;border:2px solid #fc78b5;border-radius:10px;font-weight:600;cursor:pointer;">Download PDF</button>
      <button id="print-receipt-btn" style="padding:0.7rem 1.1rem;background:#fff;color:#fc78b5;border:2px solid #fc78b5;border-radius:10px;font-weight:600;cursor:pointer;">Print / Save PDF</button>
    </div>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const TAX_RATE = 0.03;
  const cart = JSON.parse(localStorage.getItem('sweetPoteatCart')) || [];
  const meta = JSON.parse(localStorage.getItem('sweetPoteatReceiptMeta')) || {};

  const subtotal = cart.reduce((sum, i) => sum + i.qty * i.price, 0);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  const submittedAt = meta.submittedAt ? new Date(meta.submittedAt) : new Date();
  const receiptId = `SP-${submittedAt.getFullYear()}${String(submittedAt.getMonth() + 1).padStart(2, '0')}${String(submittedAt.getDate()).padStart(2, '0')}-${String(submittedAt.getTime()).slice(-6)}`;

  document.getElementById('receipt-id').textContent = `Receipt # ${receiptId}`;
  document.getElementById('receipt-date').textContent = `Date: ${submittedAt.toLocaleString()}`;

  document.getElementById('customer-name').textContent = `Name: ${meta.name || '—'}`;
  document.getElementById('customer-email').textContent = `Email: ${meta.email || '—'}`;
  document.getElementById('customer-phone').textContent = `Phone: ${meta.phone || '—'}`;

  const itemsEl = document.getElementById('receipt-items');
  if (cart.length === 0) {
    itemsEl.textContent = 'No items found in cart.';
  } else {
    let html = '<ul style="list-style:none;padding:0;margin:0;">';
    cart.forEach(i => {
      html += `<li style="display:flex;justify-content:space-between;gap:0.75rem;padding:0.35rem 0;border-bottom:1px solid #ffd3e7;"><span>${i.qty} x ${i.item}</span><span>$${(i.qty * i.price).toFixed(2)}</span></li>`;
    });
    html += '</ul>';
    itemsEl.innerHTML = html;
  }

  document.getElementById('receipt-subtotal').textContent = `Subtotal: $${subtotal.toFixed(2)}`;
  document.getElementById('receipt-tax').textContent = `Tax (3%): $${tax.toFixed(2)}`;
  document.getElementById('receipt-total').textContent = `Total: $${total.toFixed(2)}`;

  const bodyLines = [];
  bodyLines.push('Sweet Poteat Receipt');
  bodyLines.push(`Receipt # ${receiptId}`);
  bodyLines.push(`Date: ${submittedAt.toLocaleString()}`);
  bodyLines.push('');
  bodyLines.push(`Customer: ${meta.name || '—'}`);
  bodyLines.push(`Email: ${meta.email || '—'}`);
  bodyLines.push(`Phone: ${meta.phone || '—'}`);
  bodyLines.push('');
  bodyLines.push('Order Items:');
  if (cart.length === 0) {
    bodyLines.push('- No items found in cart');
  } else {
    cart.forEach(i => bodyLines.push(`- ${i.qty} x ${i.item} — $${(i.qty * i.price).toFixed(2)}`));
  }
  bodyLines.push('');
  bodyLines.push(`Subtotal: $${subtotal.toFixed(2)}`);
  bodyLines.push(`Tax (3%): $${tax.toFixed(2)}`);
  bodyLines.push(`Total: $${total.toFixed(2)}`);

  const encodedSubject = encodeURIComponent(`Sweet Poteat Receipt ${receiptId}`);
  const encodedBody = encodeURIComponent(bodyLines.join('\n'));

  const customerEmail = (meta.email || '').trim();
  const customerLink = document.getElementById('email-customer-btn');
  customerLink.href = `mailto:${customerEmail}?subject=${encodedSubject}&body=${encodedBody}`;
  if (!customerEmail) {
    customerLink.style.opacity = '0.6';
    customerLink.textContent = 'Customer Email Missing';
  }

  async function loadScript(src) {
    return new Promise((resolve, reject) => {
      const existing = document.querySelector(`script[src="${src}"]`);
      if (existing) {
        if (existing.dataset.loaded === 'true') {
          resolve();
          return;
        }
        existing.addEventListener('load', () => resolve(), { once: true });
        existing.addEventListener('error', () => reject(new Error(`Failed to load ${src}`)), { once: true });
        return;
      }

      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.addEventListener('load', () => {
        script.dataset.loaded = 'true';
        resolve();
      }, { once: true });
      script.addEventListener('error', () => reject(new Error(`Failed to load ${src}`)), { once: true });
      document.head.appendChild(script);
    });
  }

  async function ensurePdfLibraries() {
    await loadScript('https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js');
    await loadScript('https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js');
  }

  async function generateReceiptPdf() {
    await ensurePdfLibraries();
    const receiptCard = document.getElementById('receipt-card');
    if (!receiptCard || !window.html2canvas || !window.jspdf || !window.jspdf.jsPDF) {
      throw new Error('PDF library unavailable');
    }

    const canvas = await window.html2canvas(receiptCard, {
      scale: 2,
      backgroundColor: '#ffffff',
      useCORS: true
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new window.jspdf.jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 10;
    const targetWidth = pageWidth - margin * 2;
    const targetHeight = (canvas.height * targetWidth) / canvas.width;

    if (targetHeight <= pageHeight - margin * 2) {
      pdf.addImage(imgData, 'PNG', margin, margin, targetWidth, targetHeight);
    } else {
      const pageCanvas = document.createElement('canvas');
      const pageCtx = pageCanvas.getContext('2d');
      const pxPerMm = canvas.width / targetWidth;
      const pageContentHeightPx = Math.floor((pageHeight - margin * 2) * pxPerMm);
      const pageWidthPx = canvas.width;
      let renderedPx = 0;
      let isFirstPage = true;

      pageCanvas.width = pageWidthPx;
      pageCanvas.height = pageContentHeightPx;

      while (renderedPx < canvas.height) {
        pageCtx.clearRect(0, 0, pageCanvas.width, pageCanvas.height);
        pageCtx.fillStyle = '#ffffff';
        pageCtx.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
        pageCtx.drawImage(
          canvas,
          0,
          renderedPx,
          pageWidthPx,
          pageContentHeightPx,
          0,
          0,
          pageWidthPx,
          pageContentHeightPx
        );

        if (!isFirstPage) {
          pdf.addPage();
        }
        const pageImg = pageCanvas.toDataURL('image/png');
        pdf.addImage(pageImg, 'PNG', margin, margin, targetWidth, pageHeight - margin * 2);

        renderedPx += pageContentHeightPx;
        isFirstPage = false;
      }
    }

    return pdf;
  }

  const downloadPdfBtn = document.getElementById('download-pdf-btn');
  if (downloadPdfBtn) {
    downloadPdfBtn.addEventListener('click', async function() {
      const originalText = downloadPdfBtn.textContent;
      downloadPdfBtn.disabled = true;
      downloadPdfBtn.textContent = 'Generating PDF...';

      try {
        const pdf = await generateReceiptPdf();
        const safeReceiptId = receiptId.replace(/[^a-zA-Z0-9-_]/g, '');
        pdf.save(`SweetPoteat-Receipt-${safeReceiptId}.pdf`);
      } catch (err) {
        alert('Could not generate PDF. Please use Print / Save PDF instead.');
        console.error(err);
      } finally {
        downloadPdfBtn.disabled = false;
        downloadPdfBtn.textContent = originalText;
      }
    });
  }

  if (customerEmail) {
    customerLink.addEventListener('click', function() {
      setTimeout(() => {
        alert('Tip: Use Download PDF first, then attach that file in your email app. Browsers cannot auto-attach files to mailto links.');
      }, 50);
    });
  }

  document.getElementById('print-receipt-btn').addEventListener('click', function() {
    window.print();
  });
});
</script>
