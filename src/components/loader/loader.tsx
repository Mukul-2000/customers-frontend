import React from 'react';
import { RingLoader } from 'react-spinners';
import "./loader.css";

export default function Loader(){
    return (
        <div className="dhun-loader-div">
            <RingLoader color="#496DDB" className='dhun-loader' />
        </div>
    )
}