import "./payment-delivery.styles.css";
import paypal from "../../assets/paypal.png";
import mastercard from "../../assets/master-card.png";
import iDeal from "../../assets/iDeal.png";
import discover from "../../assets/discover.png";
import visa from "../../assets/visa.png";
import maestro from "../../assets/maestro.png";
import inpost from "../../assets/inpost.png";
import dpd from "../../assets/dpd.png";
import dhl from "../../assets/dhl.png";
import fedex from "../../assets/fedex.png";

const PaymentDeliverySection = () => {
  return (
    <div className="payment-delivery-section">
      <span className="sub-heading">Payment method</span>
      <div className="payment">
        <div className="payment-option">
          <img src={paypal} alt="payment-logo" className="payment-logo" />
        </div>
        <div className="payment-option">
          <img src={visa} alt="payment-logo" className="payment-logo" />
        </div>
        <div className="payment-option">
          <img src={mastercard} alt="payment-logo" className="payment-logo" />
        </div>
        <div className="payment-option">
          <img src={maestro} alt="payment-logo" className="payment-logo" />
        </div>
        <div className="payment-option">
          <img src={discover} alt="payment-logo" className="payment-logo" />
        </div>
        <div className="payment-option">
          <img src={iDeal} alt="payment-logo" className="payment-logo" />
        </div>
      </div>

      <span className="sub-heading">Delivery method</span>
      <div className="delivery">
        <div className="delivery-option">
          <img src={inpost} alt="delivery-logo" className="payment-logo" />
          <span>$20.00</span>
        </div>
        <div className="delivery-option">
          <img src={dpd} alt="delivery-logo" className="payment-logo" />
          <span>$12.00</span>
        </div>
        <div className="delivery-option">
          <img src={dhl} alt="delivery-logo" className="payment-logo" />
          <span>$15.00</span>
        </div>
        <div className="delivery-option">
          <img src={fedex} alt="delivery-logo" className="payment-logo" />
          <span>$10.00</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentDeliverySection;
