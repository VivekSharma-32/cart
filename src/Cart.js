import React, { Component } from "react";
import CartItem from "./CartItem";
class Cart extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: "Phone",
          qty: 0,
          img: "",
          id: 1,
        },
        {
          price: 999,
          title: "Watch",
          qty: 0,
          img: "",
          id: 2,
        },
        {
          price: 999,
          title: "Laptop",
          qty: 0,
          img: "",
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

  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQuantity={this.handleIncreaseQuantity}
              onDecreaseQuantity={this.handleDecreaseQuantity}
              onDeleteProduct={this.handleDeleteProduct}
            />
          );
        })}
      </div>
    );
  }
}

export default Cart;
