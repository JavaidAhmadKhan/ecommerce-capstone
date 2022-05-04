import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component.jsx";

const Shop = () => {
  <div>Shop</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
    </Routes>
  );
};

export default App;
