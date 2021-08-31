import "./Products.css";
import ProductItem from "./ProductItem";

const DUMMY_DATA = [
  { id: "p1", name: "Acoustic guitar", price: 377.0 },
  { id: "p2", name: "Shoes", price: 29.9 },
  { id: "p3", name: "Inline skates", price: 125.0 },
];

const Products = () => {
  return (
    <div className="products">
      {DUMMY_DATA.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default Products;
