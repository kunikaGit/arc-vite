// File: StripeCheckoutDemo.js
import React from "react";
import "./stripe.scss";

const StripeCheckoutDemo = () => {
    const handlePayment = () => {
        window.location.href = "checkout";
    };

    return (
        <div className="checkout-wrapper">
            <div className="checkout-left">
                {/* <img
          src="/img/logo.png" // Replace with your logo
          alt="Logo"
          className="checkout-logo"
        /> */}
                <h2>AURUMFX Mentorship Program</h2>
                <h1>MYR 2,500.00</h1>
                <button className="change-amount">Change amount</button>
                <div className="checkout-product-logo">
                    <img
                        src="/img/logo.png"
                        alt="Product Logo"
                    />
                </div>
            </div>

            <div className="checkout-right">
                <div className="form-card">
                    <div className="checkout-section">
                        <label>Email</label>
                        <input type="email" placeholder="email@example.com" />

                        <label>Phone</label>
                        <input type="tel" placeholder="012-345 6789" />

                        <label>Full Name</label>
                        <input type="text" placeholder="" />
                    </div>


                    <div className="checkout-section">
                        <h3 className="mb-2 font-md font-medium">Payment method</h3>
                        <div className="payment-method border rounded-md">
                            <div className="p-3 border-b item">
                                <label><input type="radio" name="method" /> Card</label>
                            </div>
                            <div className="p-3">
                                <label><input type="radio" name="method" /> GrabPay</label>
                            </div>
                        </div>

                        <div className="save-info flex gap-4 ">
                            <input type="checkbox" id="saveInfo" className="mt-1" />
                            <label htmlFor="saveInfo">
                                Securely save my information for 1-click checkout<br />
                                <small>Pay faster on Aurum Academy and everywhere Link is accepted.</small>
                            </label>
                        </div>
                    </div>


                    <button className="pay-btn" onClick={handlePayment}>
                        Pay MYR 2,500.00
                    </button>
                </div>
                <footer>
                    <p>
                        Powered by <strong>stripe</strong> · <a href="#">Terms</a> · <a href="#">Privacy</a>
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default StripeCheckoutDemo;
