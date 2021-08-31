import "./App.css";
import Header from "./components/Header/Header";
import Cart from "./components/Header/Cart/Cart";
import { useSelector } from "react-redux";
import Products from "./components/Products/Products";
import Backdrop from "./components/Header/Cart/Backdrop";

function App() {
  const show = useSelector((state) => state.ui.isShown);

  return (
    <div className="App">
      {show && <Backdrop />}
      <Header />
      {show && <Cart />}
      <Products />
    </div>
  );
}

export default App;
