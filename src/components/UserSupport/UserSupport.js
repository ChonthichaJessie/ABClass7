import { useState } from 'react';
import Checkout from "../Checkout";
import styled from 'styled-components';

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
        <Wrapper>
            <CloseButton onClick={() => setShow(false)}>+</CloseButton>
            <Checkout />
        </Wrapper>
    );

    

};

const Wrapper = styled.div`
    margin-left: 3%;
    margin-right: 3%;
    
`;

const CloseButton = styled.span`
    font-size: 30px;
    font-weight: 200;
    display: inline-block;
    transform: rotate(45deg);
    float : right;
`;

export default UserSupport;
