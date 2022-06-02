import { Routes, Route } from "react-router-dom";
import { Fragment, useEffect } from "react";

import { checkUserSession } from "./store/user/user.action";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Footer from "./components/Footer/Footer";

import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
