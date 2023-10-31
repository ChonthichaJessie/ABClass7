import { useState } from 'react';
import Checkout from "../Checkout";

export const UserSupport = () => {
    const [show, setShow] = useState(false);

    if (!show) {
        return (
            <div className="wrapper">
                <button className='buy-btn' type="submit" onClick={() => setShow(true)}>
                    Support us
                </button>
            </div>

        )
    }

    return (
        <>
            <button onClick={() => setShow(false)}>Close X</button>
            <Checkout />
        </>
    );

};


export default UserSupport;