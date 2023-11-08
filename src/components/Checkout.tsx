import React, { useState, useEffect } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import styled from 'styled-components';

const dollarOptions = [2, 5, 10, 15, 20, 25, 30]

const Checkout = () => {
    const [dollars, setDollars] = useState(5);
    const [success, setSuccess] = useState(false);
    // const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);

    // creates a paypal order
    const createOrder = async (data, actions) => {
        const id = (actions.order.create({
            purchase_units: [
                {
                    description: `Donate ${dollars}`,
                    amount: {
                        currency_code: "USD",
                        value: dollars,
                    },
                },
            ],
        }))
        setOrderID(id);
        return id;
    };

    // check Approval
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            // const { payer } = details;
            setSuccess(true);
        });
    };

    //capture likely error
    // const onError = (data, actions) => {
    //     setErrorMessage("An Error occured with your payment ");
    // };

    useEffect(() => {
        if (success) {
            alert("Payment successful!!");
            console.log('Order successful . Your order id is--', orderID);
        }
    }, [success, orderID]);

    return (
        <div>
            Amount: <DollarSelect onChange={(e) => setDollars(Number(e.target.value))}>
                {dollarOptions.map(val => (<option value={val} key={val} selected={dollars === val}>${val} USD</option>))}
            </DollarSelect>
            <PayPalButtons
                key={dollars}
                style={{ layout: "vertical", tagline: "false" }}
                createOrder={createOrder}
                onApprove={onApprove}
            />
        </div>
    );
}

const DollarSelect = styled.select`
    margin-bottom: 5px;
`;

export default Checkout