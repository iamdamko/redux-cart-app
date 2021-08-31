import { useDispatch } from "react-redux";
import { layoutActions } from "../../../store/layout-slice";
import "./Backdrop.css";

const Backdrop = () => {
  const dispatch = useDispatch();
  const closeCartHandler = () => {
    dispatch(layoutActions.toggle());
  };

  return <div className="backdrop" onClick={closeCartHandler}></div>;
};

export default Backdrop;
