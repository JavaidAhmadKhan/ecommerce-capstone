import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Footer from "./components/Footer/Footer";
import { Fragment } from "react";
import SignIn from "./routes/authentication/authentication.component"

const Shop = () => {
  return (
    <div>
      <h1>this is shop</h1>
    </div>
  );
};

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
