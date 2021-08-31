import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import "./Cart.css";
import { Fragment } from "react";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const totalOfItems = cartItems
    .map((item) => item.totalPrice)
    .reduce((sum, element) => {
      return sum + element;
    }, 0);

  return (
    <Fragment>
      <div className="cart">
        <h1 className="cart__title">Your cart</h1>
        {cartItems.map((cartItem) => (
          <CartItem
            name={cartItem.name}
            quantity={cartItem.quantity}
            totalPrice={cartItem.totalPrice}
            id={cartItem.id}
            price={cartItem.price}
            key={cartItem.id}
          />
        ))}
        <h2 className="cart__total">
          Total price: {totalOfItems.toFixed(2)} €
        </h2>
      </div>
    </Fragment>
  );
};

export default Cart;
