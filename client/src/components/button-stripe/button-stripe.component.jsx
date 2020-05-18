import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey =
        'pk_test_kUMeWrhjLaVUrQrpU7saZtlt00uc9i0kih'; // process.env.REACT_APP_STRIPE

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token,
            },
        })
            .then(response => {
                alert('Payment successful');
            })
            .catch(error => {
                console.log('Payment error: ', error.response);
                alert(
                    'There was an error, please use the TEST credit card that we provided'
                );
            });
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='Impormotriz Shop'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
