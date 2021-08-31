import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import "./ProductItem.css";

const ProductItem = ({ name, price, id }) => {
  const dispatch = useDispatch();

  const addItemToCartHandler = () => {
    dispatch(cartActions.addItem({ id, price, name }));
  };

  return (
    <div className="item">
      <h2>Item: {name}</h2>
      <span>
        <h3>Price: {price} €</h3>
        <button onClick={addItemToCartHandler}>Add to cart</button>
      </span>
    </div>
  );
};

export default ProductItem;
