import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  addtocart,
  incrementproduct,
  decrementproduct,
} from "./store/slices/productsSlice";
function ProductCard(props) {
  const cartProducts = useSelector((state) => state.productsSlice.cartProducts);
  const location = useLocation();
  const dispatch = useDispatch();
  const { product } = props;

  return (
    <div className="Product-Card">
      <div className="Product-Image">
        <img src={product.image} alt="" />
      </div>
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      {!location.pathname === "/cart" ? (
        <button onClick={() => dispatch(addtocart(product))}>
          Add To Cart
        </button>
      ) : null}
      {cartProducts.findIndex((el) => el.id === product.id) >= 0 ? (
        <div className="Product-Count">
          <button onClick={() => dispatch(decrementproduct(product.id))}>
            -
          </button>
          <span>
            {cartProducts.filter((el) => el.id === product.id).length}
          </span>
          <button onClick={() => dispatch(incrementproduct(product))}>+</button>
        </div>
      ) : (
        <button onClick={() => dispatch(addtocart(product))}>
          Add To Cart
        </button>
      )}
    </div>
  );
}

ProductCard.propTypes = {
  product: {},
};

export default ProductCard;
