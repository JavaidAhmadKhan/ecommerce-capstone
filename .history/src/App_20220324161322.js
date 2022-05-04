import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component.jsx";

const Shop = () => {
  return (
  
  <div><h1>this is shop</h1></div>
  )
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
