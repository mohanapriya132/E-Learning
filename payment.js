// Function to delete cart item
function deleteItem() {
    const cartItem = document.getElementById('cart-item');
    const emptyCart = document.getElementById('empty-cart');
    cartItem.style.display = 'none';
    emptyCart.style.display = 'block';
    document.getElementById('total-price').innerText = 'Rs.0';
}

// Payment button actions (demo purposes)
document.querySelector('.google-pay').addEventListener('click', () => {
    alert('Google Pay Payment Initiated');
});

document.querySelector('.phonepe').addEventListener('click', () => {
    alert('PhonePe Payment Initiated');
});
