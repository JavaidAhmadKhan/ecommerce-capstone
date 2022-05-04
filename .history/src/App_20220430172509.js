import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import ReactCSSTransitionGroup from "react-transition-group"; // ES6

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Footer from "./components/Footer/Footer";

import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

// const App = () => {
//   return (
//     <Fragment>
//       <Routes>
//         <Route path="/" element={<Navigation />}>
//           <Route index element={<Home />} />
//           <Route path="shop/*" element={<Shop />} />
//           <Route path="auth" element={<Authentication />} />
//           <Route path="checkout" element={<Checkout />} />
//         </Route>
//       </Routes>
//       <Footer />
//     </Fragment>
//   );
// };

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: ["hello", "world", "click", "me"] };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    const newItems = this.state.items.concat([prompt("Enter some text")]);
    this.setState({ items: newItems });
  }

  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({ items: newItems });
  }

  render() {
    const items = this.state.items.map((item, i) => (
      <div key={i} onClick={() => this.handleRemove(i)}>
        {item}
      </div>
    ));

    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;
