import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Footer from "./components/Footer/Footer";
import { Fragment } from "react";

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
        </Route>
        <Footer />
      </Routes>
    </Fragment>
  );
};

export default App;
