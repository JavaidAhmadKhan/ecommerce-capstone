import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/home/home.component.jsx";

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>this is navigation</h1>
      </div>
      <Outlet />
    </div>
  );
};

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
      <Route path="/" element={<Navigation />}></Route>
      <Route path="/" element={<Home />} />
      <Route path="shop" element={<Shop />} />
    </Routes>
  );
};

export default App;
