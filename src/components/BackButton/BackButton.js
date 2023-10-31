import './BackButton.css';
import React from "react";
import { useNavigate } from 'react-router-dom';

export const Backbutton = () => {
    const navigate = useNavigate();
    return (
        <div classname='BackButton'>
            <button onclick={() => navigate(-1)}>Back</button>
        </div>
    );
};

export default Backbutton;