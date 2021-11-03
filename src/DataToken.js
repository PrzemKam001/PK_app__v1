import React, {useState, useEffect} from 'react';
import {ethers} from 'ethers';
import "./css/datatoken.css";

import Data_Setup from "./js/Data_Setup";


const DataToken = () => {
    return (
        <>
        <div className="container__data-token">
            <Data_Setup />
        </div>
    <div className="section__line"></div>
            </>
    );
};

export default DataToken;