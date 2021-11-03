import React, {useState, useEffect} from 'react';
import {ethers} from 'ethers';
import "./css/datatoken.css";
import Lottery_Setup from "./js/Lottery_Setup";




const LotterySection = () => {

    return (
        <>
                <Lottery_Setup />
        </>
    );
};

export default LotterySection;