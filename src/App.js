import Cart from "./Cart";
import Navbar from "./Navbar";
import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: "Phone",
          qty: 0,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpnqXDrgvwK71UPMJaa--h3l7oYB9M4Bp_Kg&usqp=CAU",
          id: 1,
        },
        {
          price: 999,
          title: "Watch",
          qty: 0,
          img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
          id: 2,
        },
        {
          price: 999,
          title: "Laptop",
          qty: 0,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLfKgUqPHUWS19OVPe8htrkebc4J7YeNjb3Q&usqp=CAU",
          id: 3,
        },
      ],
    };
    // this.increaseQuantity = this.increaseQuantity.bind(this);
  }

  // Increase the increase quantity
  handleIncreaseQuantity = (product) => {
    console.log("Please increase the quantity of", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products,
    });
  };

  // Decrease the increase quantity
  handleDecreaseQuantity = (product) => {
    console.log("Please increase the quantity of", product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
      products,
    });
  };

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id); // []
    this.setState({
      products: items,
    });
  };

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  };

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;
    });

    return cartTotal;
  };

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{ fontSize: 20, padding: 10 }}>
          TOTAL: {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
