import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";
function Cart() {
  const cartProducts = useSelector((state) => state.productsSlice.cartProducts);
  const filteredCartProducts = [...new Set(cartProducts)];
  console.log(filteredCartProducts);
  return (
    <>
      <div className="Products-Container">
        {filteredCartProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <button>Proceed To Checkout</button>
    </>
  );
}

export default Cart;
