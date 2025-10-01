// --- Cart object ---
let cart = JSON.parse(localStorage.getItem('sweetPoteatCart')) || [];

document.addEventListener('DOMContentLoaded', () => {

    const toggle = document.getElementById('cart-toggle');
    const cartEl = document.getElementById('floating-cart');
    const dropdown = document.getElementById('cart-dropdown');

    if (toggle && cartEl) {
        // Toggle dropdown
        toggle.addEventListener('click', () => {
            cartEl.classList.toggle('open');
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!cartEl.contains(e.target) && cartEl.classList.contains('open')) {
                cartEl.classList.remove('open');
            }
        });
    }

    // --- Save cart ---
    function saveCart() {
        localStorage.setItem('sweetPoteatCart', JSON.stringify(cart));
        updateCartDisplay();
    }

    // --- Add to cart ---
    function addToCart(itemName, qty = 1, price = 0) {
        price = Number(price);
        const existing = cart.find(i => i.item === itemName);
        if (existing) {
            existing.qty += qty;
        } else {
            cart.push({ item: itemName, qty, price });
        }
        saveCart();

        // Show toast + flying animation
        showCartToast(`${qty} x ${itemName} added to cart`);
    }

    // --- Remove item from cart ---
    function removeFromCart(itemName) {
        cart = cart.filter(i => i.item !== itemName);
        saveCart();
    }

    // --- Update live cart display ---
    function updateCartDisplay() {
        if (!dropdown || !cartEl) return;

        const countSpan = document.getElementById('cart-count');
        const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
        countSpan.textContent = totalItems;

        dropdown.innerHTML = '';
        if (cart.length === 0) {
            dropdown.innerHTML = '<p>Your cart is empty</p>';
            return;
        }

        let totalPrice = 0;
        cart.forEach(i => {
            totalPrice += i.qty * i.price;
            const div = document.createElement('div');
            div.textContent = `${i.qty} x ${i.item} — $${(i.qty * i.price).toFixed(2)}`;
            const removeBtn = document.createElement('button');
            removeBtn.textContent = '✕';
            removeBtn.onclick = () => removeFromCart(i.item);
            div.appendChild(removeBtn);
            dropdown.appendChild(div);
        });

        const totalDiv = document.createElement('div');
        totalDiv.style.fontWeight = '600';
        totalDiv.style.marginTop = '0.5rem';
        totalDiv.textContent = `Total: $${totalPrice.toFixed(2)}`;
        dropdown.appendChild(totalDiv);

        const goToCartBtn = document.createElement('a');
        goToCartBtn.href = BASEURL + '/contact/';
        goToCartBtn.textContent = 'Go to Cart';
        goToCartBtn.className = 'go-to-cart-btn';
        goToCartBtn.addEventListener('click', () => {
            if (cartEl) cartEl.classList.remove('open');
        });
        dropdown.appendChild(goToCartBtn);
    }

    // --- Toast + flying animation ---
    function showCartToast(message) {
        const toast = document.getElementById('cart-toast');
        const msg = document.getElementById('cart-toast-message');
        if (!toast || !msg) return;

        // Update text
        msg.textContent = message;

        // Fade in
        toast.classList.add('show');

        // Flying animation from button to cart
        const addBtn = document.querySelector('.add-to-cart-button:hover, .add-to-cart-button:focus');
        if (addBtn) {
            const clone = addBtn.cloneNode(true);
            clone.style.position = 'fixed';
            const rect = addBtn.getBoundingClientRect();
            clone.style.left = rect.left + 'px';
            clone.style.top = rect.top + 'px';
            clone.style.margin = 0;
            clone.style.transition = 'all 0.8s ease-in-out';
            clone.style.zIndex = 9999;
            document.body.appendChild(clone);

            const cartRect = document.getElementById('cart-toggle').getBoundingClientRect();
            setTimeout(() => {
                clone.style.left = cartRect.left + 'px';
                clone.style.top = cartRect.top + 'px';
                clone.style.opacity = '0';
                clone.style.transform = 'scale(0.3)';
            }, 20);

            setTimeout(() => document.body.removeChild(clone), 800);
        }

        // Hide toast after 2s
        setTimeout(() => toast.classList.remove('show'), 2000);
    }

    // --- Add to Cart button handler ---
    document.querySelectorAll('.add-to-cart-button').forEach(btn => {
        btn.addEventListener('click', () => {
            const parent = btn.closest('.product-detail-info');
            const qtyInput = parent.querySelector('input[type="number"]');
            const qty = parseInt(qtyInput.value) || 1;
            const itemName = btn.dataset.name;

            let price, optionLabel;

            if (btn.dataset.hasOptions === "true") {
                const select = parent.querySelector('#product-option');
                price = Number(select.value);
                optionLabel = select.options[select.selectedIndex].dataset.quantity;
            } else {
                price = Number(btn.dataset.price);
                optionLabel = btn.dataset.quantityLabel || '';
            }

            const cartItemName = `${itemName}${optionLabel ? ` (${optionLabel})` : ''}`;
            addToCart(cartItemName, qty, price);
        });
    });

    // --- Prefill contact page order field ---
    const orderField = document.getElementById('order');
    if (orderField && cart.length > 0) {
        const orderLines = cart.map(i => `${i.qty} x ${i.item} — $${(i.qty * i.price).toFixed(2)}`);
        const totalPrice = cart.reduce((sum, i) => sum + i.qty * i.price, 0);
        orderLines.push(`Total: $${totalPrice.toFixed(2)}`);
        orderField.value = orderLines.join("\n");
    }

    updateCartDisplay();
});
