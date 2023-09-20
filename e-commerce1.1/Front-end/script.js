const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const cartItems = [];
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // alert(`Product Added Successfuly!`);
        const productBlock = button.parentElement;
        const productName = productBlock.querySelector('h3').textContent;
        const productDescription = productBlock.querySelector('p').textContent;
        
        // Create an object representing the product
        const product = { name: productName, description: productDescription };
        // Add the product to the cart
        cartItems.push(product);
        alert(`${productName}  added to the cart!`);
        // Show a pop-up message
        console.log(cartItems);        
        
        // You can update the cart UI here
    });
});
