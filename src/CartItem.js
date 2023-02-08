import React from "react";
const CartItem = (props) => {
  const { price, title, qty } = props.product;
  const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } =
    props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={product.img} />
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
};

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
