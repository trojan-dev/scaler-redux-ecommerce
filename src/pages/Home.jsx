import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axiosInstance from "../axios";
import ProductCard from "../ProductCard";
import { fetchproducts } from "../store/slices/productsSlice";
function Home() {
  const allProducts = useSelector((state) => state.productsSlice.products);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchAllProducts() {
      try {
        const products = await axiosInstance.get("products");
        dispatch(fetchproducts(products.data));
      } catch (error) {
        throw new Error(error);
      }
    }
    fetchAllProducts();
  }, []);
  return (
    <>
      <h1>Ecommerce Scaler</h1>
      <div className="Products-Container">
        {allProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}

export default Home;
