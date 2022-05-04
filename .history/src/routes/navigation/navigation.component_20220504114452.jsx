import { Fragment, useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropdown from "../../components/CartDropdown/CartDropdown";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const [increment, setIncrement] = useState();

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo />
        </Link>

        <div className="nav-links-container">
          {/* <input type="search" placeholder="Search Products" /> */}
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <p>Hello {setIncrement + 1}</p>
          <button onClick={() => setIncrement(increment + 1)}>Add</button>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              {" "}
              SIGN OUT{" "}
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
