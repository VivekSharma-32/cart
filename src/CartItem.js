import React from "react";
class CartItem extends React.Component {
  render() {
    const { price, title, qty } = this.props.product;
    const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } =
      this.props;
    return (
      <div className="cart-item">
        {this.props.jsx}
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>Price: {price}</div>
          <div style={{ color: "#777" }}>Qty: {qty}</div>
          <div className="cart-item-actions">
            {/* Buttons  */}
            <img
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/1828/1828926.png"
              alt="increase"
              onClick={() => onIncreaseQuantity(product)}
            />
            <img
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
              alt="decrease"
              onClick={() => onDecreaseQuantity(product)}
            />
            <img
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
              alt="delete"
              onClick={() => onDeleteProduct(product.id)}
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
