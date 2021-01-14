import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/components/Payment.css';
import AppContext from '../context/AppContext';
// import { PayPalButton } from 'react-paypal-button';
import { PayPalButton } from 'react-paypal-button-v2';

import { handleSumTotal } from '../utils/index';

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const history = useHistory();
  const paypalOptions = {
    clientId:
      'AWyKCwsreCMqxlpiAS6e8qKBCpFZorO1gGVuwODsStZoeYWNXzO7a4ZtGR2YH4zXtIfIRLSrdvq6OQ9s',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };

      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };
  const handlePaymentError = (error) => {};
  const handlePaymentCancel = (cancel) => {};

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => {
          return (
            <div className="Payment-item" key={item.title}>
              <div className="Payment-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
            </div>
          );
        })}
        <div className="Payment-button">
          <PayPalButton
            paypalOption={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal(cart)}
            onSuccess={(data) => handlePaymentSuccess(data)}
            // onPaymentError={(error) => console.log(error)}
            // onPaymentCancel={(cancel) => console.log(cancel)}
          />
        </div>
        {/* <div className="Payment-butto">
          <PaypalButton
          // paypalOption={PaypalOptions}
          // buttonStyles={buttonStyles}
          // amount={handleSumTotal(cart)}
          // onPaymentStart={() => console.log('Start Payment')}
          // onPaymentSuccess={(data) => handlePaymentSuccess(data)}
          // onPaymentError={(error) => console.log(error)}
          // onPaymentCancel={(cancel) => console.log(cancel)}
          />
        </div> */}
      </div>
      <div className="Payment-sidebar"></div>
    </div>
  );
};

export default Payment;
