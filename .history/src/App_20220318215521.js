import CategoryItem from "./components/CategoryItem/CategoryItem";

import "./categories.styles.scss";
import Directory from "./components/Directory/Directory";

const App = () => {
  return (
    <div>
      <Directory />
      <CategoryItem />
    </div>
  );
};

export default App;
