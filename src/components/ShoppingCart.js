import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import '../css/Cart.css';
import product1 from '../Images/product1.png'
import product2 from '../Images/product2.png'
import product3 from '../Images/product3.png'

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  //new items are added to the cart
  const handleAddToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };
  //items are removed from the cart based on their id
  const handleRemoveFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };
  //increasing the quantity of the items
  const handleIncreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
  };
  //decreasing the quantity of the items
  const handleDecreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCartItems);
  };

  //calculating the total selected items in the cart
  const calculateTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };
  //calculating the total price of the selected items in the cart
  
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>

      <div className="product-list">
        <div className="product">
          <img src={product1} alt="Product 1" />
          <h2>Product 1</h2>
          <p>$10</p>
          <button onClick={() => handleAddToCart({ id: 1, name: 'Product 1', price: 10, image: product1 })}>
            Add to Cart
          </button>
        </div>
        <div className="product">
          <img src={product2} alt="Product 2" />
          <h2>Product 2</h2>
          <p>$15</p>
          <button onClick={() => handleAddToCart({ id: 2, name: 'Product 2', price: 15, image: product2 })}>
            Add to Cart
          </button>
        </div>
        <div className="product">
          <img src={product3} alt="Product 3" />
          <h2>Product 3</h2>
          <p>$20</p>
          <button onClick={() => handleAddToCart({ id: 3, name: 'Product 3', price: 20, image: product3 })}>
            Add to Cart
          </button>
        </div>
      </div>

      <div className="cart-items">
        <h2>Cart Items</h2>
        {cartItems.length ===0 ? (
          <p>No items in cart</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className="cart-item">
                  <div>
                    <img src={item.image} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <div className="quantity">
                      <button onClick={() => handleDecreaseQuantity(item.id)}>
                        <FaMinus />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleIncreaseQuantity(item.id)}>
                        <FaPlus />
                      </button>
                    </div>
                    <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <p>Total Items: {calculateTotalItems()}</p>
        <p>Subtotal: ${calculateSubtotal()}</p>
      </div>
    </div>
  );
};

export default ShoppingCart;
