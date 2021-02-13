import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IF1qZA6tuRJz0Zefy5obYMgfil7bnXNPzFUqt97aKCA1wvIrC9L7MAMQvbVvRWRhGY8Fvre1I5pf7hVFQiXFjoI00dlgzu8tG'

      const  onToken = token => {
      axios({
        url: 'payment',
        method: 'post',
        data: {
            amount: priceForStripe,
            token
        }
    }).then(response => {
        alert('Payment successful')
    }).catch(error => {
         console.log('Payment error:', JSON.parse(error));
             alert(
                'There was an issue with your payment. Please make sure you use the provided credit card.'
            );
        });
    };

    return (
        <StripeCheckout 
            label='Pay Now'
            name='MDP Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://i.pinimg.com/originals/9a/55/81/9a5581b10592547f5ffef6f22e2b7158.jpg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );

};

export default StripeCheckoutButton;