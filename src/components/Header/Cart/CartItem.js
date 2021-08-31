import "./CartItem.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";

const CartItem = ({ name, price, totalPrice, id, quantity }) => {
  const dispatch = useDispatch();

  const addQuantityHandler = () => {
    dispatch(cartActions.addItem({ name, price, totalPrice, id, quantity }));
  };

  const removeQuantityHandler = () => {
    dispatch(cartActions.removeItem(id));
  };
  return (
    <div className="cartItem">
      <h2>Item: {name}</h2>
      <h3>Price: {totalPrice.toFixed(2)} €</h3>
      <h3>x{quantity}</h3>
      <button onClick={removeQuantityHandler}>-</button>
      <button onClick={addQuantityHandler}>+</button>
    </div>
  );
};

export default CartItem;
