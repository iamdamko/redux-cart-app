import "./Header.css";
import { useDispatch } from "react-redux";
import { layoutActions } from "../../store/layout-slice";
import { useSelector } from "react-redux";

const Header = () => {
  const cartAmount = useSelector((state) => state.cart.totalQuantity);

  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(layoutActions.toggle());
  };

  return (
    <header className="header">
      <h1 className="header__title">ReduxApp</h1>
      <button onClick={toggleHandler} className="header__cartBtn">
        <span>Cart:</span>
        <span className="header__crtAmount"> {cartAmount}</span>
      </button>
    </header>
  );
};

export default Header;
