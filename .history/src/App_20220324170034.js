import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Footer from "./components/Footer/Footer";

const Shop = () => {
  return (
    <div>
      <h1>this is shop</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Footer />
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
      
    </Routes>
  );
};

export default App;
