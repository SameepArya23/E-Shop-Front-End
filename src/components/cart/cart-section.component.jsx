import "./cart-section.styles.css";
import cart from "../../assets/shopping_cart.svg";
import shipping from "../../assets/shipping.svg";
import invertedShipping from "../../assets/inverted-shipping.svg";
import tShirtWhite from "../../assets/tshirt-white.jpg";
import tShirtBlack from "../../assets/tshirt-black.webp";

const CartSection = () => {
  const style = {
    fontWeight: "500",
  };
  return (
    <div className="cart-section">
      <div className="cart-to-shipping">
        <img src={cart} alt="" className="inverted-cart" />
        <span className="line" />
        <img src={invertedShipping} alt="" className="inverted-shipping" />
      </div>

      <div className="cart-items">
        <span className="sub-heading">Your cart</span>
        <div className="item">
          <img src={tShirtBlack} alt="product" className="item-img" />
          <div className="item-info">
            <span className="name">Basic slim fit t-shirt</span>
            <span className="hash-num">#212315</span>
          </div>
          <span>$89.99</span>
        </div>
        <div className="item">
          <img src={tShirtWhite} alt="product" className="item-img" />
          <div className="item-info">
            <span className="name">Basic slim fit t-shirt</span>
            <span className="hash-num">#212315</span>
          </div>
          <span>$69.99</span>
        </div>

        <div className="cart-total">
          <span className="total">Total cost: </span>
          <span className="total-cost">$159.98</span>
        </div>
      </div>

      <div className="extra-message">
        <img src={shipping} alt="icon" />
        <span className="message">
          you are <span style={style}>$30.2</span> away from free shipping
        </span>
      </div>
    </div>
  );
};

export default CartSection;
