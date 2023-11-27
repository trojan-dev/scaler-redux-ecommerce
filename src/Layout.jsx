import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
function Navbar() {
  const cartProductsCount = useSelector(
    (state) => state.productsSlice.cartProducts
  ).length;
  return (
    <>
      <nav className="navigation">
        <div>
          <NavLink to="/" className={(props) => console.log(props)}>
            Home
          </NavLink>
          <NavLink to="/cart" className={(props) => console.log(props)}>
            Cart
          </NavLink>
        </div>
        <span>Cart Count : {cartProductsCount}</span>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
