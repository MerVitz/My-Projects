const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const cartItems = [];




addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productBlock = button.parentElement;
        const productName = productBlock.querySelector('h3').textContent;
        const productDescription = productBlock.querySelector('p').textContent;
        // Create an object representing the product
        const product = { name: productName, description: productDescription };
        // Add the product to the cart
        cartItems.push(product);
        alert(`Added ${productName} to the cart!`);
        // Show a pop-up message
        alert(`Product Added Successfuly!`);        
        
        // You can update the cart UI here
    });
});
