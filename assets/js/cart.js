// --- Cart object ---
let cart = JSON.parse(localStorage.getItem('sweetPoteatCart')) || [];

function saveCart() {
    localStorage.setItem('sweetPoteatCart', JSON.stringify(cart));
}

// --- Add to Cart function ---
function addToCart(itemName, qty = 1, price = 0) {
    price = Number(price);
    const existing = cart.find(i => i.item === itemName);
    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({ item: itemName, qty, price });
    }
    saveCart();
    updateCartDisplay();
}

// --- Remove item from cart ---
function removeFromCart(itemName) {
    cart = cart.filter(i => i.item !== itemName);
    saveCart();
    updateCartDisplay();
}

// --- Update live cart display ---
function updateCartDisplay() {
    const dropdown = document.getElementById('cart-dropdown');
    const countSpan = document.getElementById('cart-count');
    const cartEl = document.getElementById('floating-cart');

    if (!dropdown || !countSpan) return;

    // Update total quantity
    const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
    countSpan.textContent = totalItems;

    // Update dropdown
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

    // Add "Go to Cart" button
    const goToCartBtn = document.createElement('a');
    goToCartBtn.href = BASEURL + '/contact/';
    goToCartBtn.textContent = 'Go to Cart';
    goToCartBtn.className = 'go-to-cart-btn';
    goToCartBtn.addEventListener('click', () => {
        if (cartEl) cartEl.classList.remove('open');
    });
    dropdown.appendChild(goToCartBtn);
}

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('cart-toggle');
    const cartEl = document.getElementById('floating-cart');
    const dropdown = document.getElementById('cart-dropdown');

    if (toggle && cartEl) {
        // Toggle dropdown
        toggle.addEventListener('click', (e) => {
            cartEl.classList.toggle('open');
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!cartEl.contains(e.target) && cartEl.classList.contains('open')) {
                cartEl.classList.remove('open');
            }
        });
    }

    updateCartDisplay();

    // Prefill Contact page textarea if it exists
    const orderField = document.getElementById('order');
    if (orderField && cart.length > 0) {
        const orderLines = cart.map(i => `${i.qty} x ${i.item}`);
        orderField.value = orderLines.join("\n");
    }
    // Add the total price to the order field if it exists
    if (orderField && cart.length > 0) {
    const orderLines = cart.map(i => 
        `${i.qty} x ${i.item} — $${(i.qty * i.price).toFixed(2)}`
    );
    const totalPrice = cart.reduce((sum, i) => sum + i.qty * i.price, 0);
    orderLines.push(`Total: $${totalPrice.toFixed(2)}`);
    orderField.value = orderLines.join("\n");
}

});

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
            optionLabel = btn.dataset.quantityLabel || "";
        }

        addToCart(`${itemName} (${optionLabel})`, qty, price);
    });
});

