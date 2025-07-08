import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom'; // Ensure Link is imported

const CartPage = () => {
  const { cartItems, addToCart, decreaseQuantity, removeFromCart, getCartTotal } = useCart();

  return (
    <div style={cartPageStyles.container}>
      <h2 style={cartPageStyles.heading}>Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div style={cartPageStyles.emptyCart}>
          <p>Your cart is empty.</p>
          <Link to="/shop" style={cartPageStyles.shopNowButton}> {/* Changed to /shop for product list */}
            Start Shopping
          </Link>
        </div>
      ) : (
        <>
          <div style={cartPageStyles.cartItemsGrid}>
            {cartItems.map((item) => (
              <div key={item.id} style={cartPageStyles.cartItemCard}>
                <img src={item.image} alt={item.name} style={cartPageStyles.itemImage} />
                <div style={cartPageStyles.itemDetails}>
                  <h3 style={cartPageStyles.itemName}>{item.name}</h3>
                  <p style={cartPageStyles.itemPrice}>£{(item.price * item.quantity).toFixed(2)}</p>
                  <div style={cartPageStyles.quantityControl}>
                    <button
                      style={cartPageStyles.quantityButton}
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <span style={cartPageStyles.itemQuantity}>{item.quantity}</span>
                    <button
                      style={cartPageStyles.quantityButton}
                      onClick={() => addToCart(item)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    style={cartPageStyles.removeButton}
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={cartPageStyles.cartSummary}>
            <h3 style={cartPageStyles.summaryHeading}>Cart Summary</h3>
            <p style={cartPageStyles.totalText}>Total ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items): <span style={cartPageStyles.totalAmount}>£{getCartTotal()}</span></p>
            {/* CORRECTED: Use Link to navigate to checkout */}
            <Link to="/checkout" style={cartPageStyles.checkoutButton}>
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

const cartPageStyles = {
  container: {
    maxWidth: '900px',
    margin: '60px auto',
    padding: '40px',
    backgroundColor: 'var(--white)',
    borderRadius: '12px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
    color: 'var(--text-color)',
    minHeight: '400px',
  },
  heading: {
    fontSize: '2.8em',
    color: 'var(--primary-blue)',
    marginBottom: '30px',
    textAlign: 'center',
    fontWeight: '700',
  },
  emptyCart: {
    textAlign: 'center',
    padding: '50px 0',
    fontSize: '1.2em',
    color: 'var(--secondary-dark)',
  },
  shopNowButton: {
    display: 'inline-block',
    marginTop: '25px',
    backgroundColor: 'var(--accent-pink)',
    color: 'var(--white)',
    padding: '12px 25px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    '&:hover': {
      backgroundColor: '#e66d00',
      transform: 'translateY(-2px)',
    },
  },
  cartItemsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '25px',
    marginBottom: '40px',
  },
  cartItemCard: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid var(--border-color)',
    borderRadius: '10px',
    padding: '20px',
    backgroundColor: 'var(--light-bg)',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    flexWrap: 'wrap',
    gap: '20px',
  },
  itemImage: {
    width: '100px',
    height: '100px',
    objectFit: 'contain',
    borderRadius: '8px',
    marginRight: '20px',
    flexShrink: 0,
  },
  itemDetails: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  itemName: {
    fontSize: '1.4em',
    color: 'var(--secondary-dark)',
    marginBottom: '8px',
    fontWeight: '600',
  },
  itemPrice: {
    fontSize: '1.2em',
    color: 'var(--primary-blue)',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  quantityControl: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '15px',
  },
  quantityButton: {
    backgroundColor: 'var(--primary-blue)',
    color: 'var(--white)',
    border: 'none',
    borderRadius: '5px',
    width: '35px',
    height: '35px',
    fontSize: '1.2em',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    '&:hover': {
      backgroundColor: '#0056b3',
    },
  },
  itemQuantity: {
    fontSize: '1.1em',
    fontWeight: 'bold',
    minWidth: '20px',
    textAlign: 'center',
  },
  removeButton: {
    backgroundColor: 'var(--dark-grey)',
    color: 'var(--white)',
    border: 'none',
    borderRadius: '5px',
    padding: '8px 15px',
    fontSize: '0.9em',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    marginTop: '10px',
    '&:hover': {
      backgroundColor: '#cc0000',
    },
  },
  cartSummary: {
    borderTop: '2px solid var(--border-color)',
    paddingTop: '30px',
    textAlign: 'right',
    marginTop: '40px',
  },
  summaryHeading: {
    fontSize: '2em',
    color: 'var(--secondary-dark)',
    marginBottom: '15px',
  },
  totalText: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    marginBottom: '25px',
    color: 'var(--text-color)',
  },
  totalAmount: {
    color: 'var(--accent-pink)',
    fontSize: '1.2em',
    marginLeft: '10px',
  },
  checkoutButton: {
    backgroundColor: 'var(--primary-blue)',
    color: 'var(--white)',
    padding: '15px 30px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.3em',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease',
    boxShadow: '0 5px 15px rgba(0, 123, 255, 0.3)',
    '&:hover': {
      backgroundColor: '#0056b3',
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 20px rgba(0, 123, 255, 0.4)',
    },
  },
  '@media (max-width: 768px)': {
    container: {
      margin: '30px 15px',
      padding: '25px',
    },
    heading: {
      fontSize: '2.2em',
    },
    cartItemCard: {
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '15px',
    },
    itemImage: {
        marginRight: '0',
        marginBottom: '15px',
    },
    itemDetails: {
        alignItems: 'center',
    },
    removeButton: {
        marginTop: '15px',
    },
    totalText: {
        fontSize: '1.2em',
    },
    checkoutButton: {
        padding: '12px 25px',
        fontSize: '1.1em',
    }
  },
};

export default CartPage;