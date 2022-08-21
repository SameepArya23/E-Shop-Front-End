import CartSection from "../cart/cart-section.component";
import LoginAdressSection from "../login-address/login-address-section.component";
import PaymentDeliverySection from "../payment-delivery/payment-delivery-section.component";
import "./payment.styles.css";

const PaymentPage = () => {
  return (
    <div className="payment-page-container">
      <LoginAdressSection />
      <PaymentDeliverySection />
      <CartSection />
    </div>
  );
};

export default PaymentPage;
