import React, {useState, useEffect} from 'react'
import {ethers} from 'ethers'


const Web3 = require("web3");
const providerIsNew = "https://floral-billowing-glade.bsc.quiknode.pro/29ea12cb502ef5492fc8c5800415e29b801c933b/"
const Web3Client = new Web3(new Web3.providers.HttpProvider(providerIsNew));                //provider by QuickNode


const minABI = [
    // construct of balance
    {
        constant: true,
        inputs: [{ name: "_owner", type: "address" }],
        name: "balanceOf",
        outputs: [{ name: "balance", type: "uint256" }],
        type: "function",
    },
];


const DataSetup = () => {

    const [errorMessage, setErrorMessage] = useState(null);
    const [burnBalance, setBurnBalance] = useState("0,00");
    const [circBalance, setCircBalance] = useState("0,00");
    const [buybackBalance, setBuybackBalance] = useState("0,00");



            const tokenAddress = "0xb6d48fcef36e19681ee29896b19c1b6cbd1eab1b";              /// adresses to empty new file?
            const burnAddress = "0x000000000000000000000000000000000000dead"
            const motherAddress = "0xf4e538fe3fe2cb3e9c6cceb44c0b52992e3b8a58"
            const teamcoinsAddress = "0xafe7ae6785063d452bfec1ec8dba3b38ddcae9c0"
            const pancakeAddress = "0xb8d33c43c2f23476768ddd5143f1b296a0178da5"
            const buybackAddress = "0xa47a381b96a9f33997881c698437547adc2d1dac"


            const contract = new Web3Client.eth.Contract(minABI, tokenAddress);

            async function getBalanceOf() {
                const result = await contract.methods.balanceOf(burnAddress).call(); // importing value;
                const format = Web3Client.utils.fromWei(result); // 18 decimals according to contract
                const num = parseFloat(format);


                const rounded = num.toFixed(0);    // changing value to 2 numbers;


                Web3Client.eth.getBalance(burnAddress,(err, bal)=> {    /// setting ballance as promise
                    setBurnBalance(rounded);

                })

                function calculate() {
                    var num = parseFloat(format);
                    var rounded = num.toFixed(0);

                    return rounded;
                }

                calculate();
            }
///////////////////////////////////////////////////////////////////////////////// ustawić timeout
    async function getBalanceOfCirc() {
        const result0 = await contract.methods.balanceOf(burnAddress).call();
        const format0 = Web3Client.utils.fromWei(result0);

        const result1 = await contract.methods.balanceOf(motherAddress).call();             // funkcja for i zmienić adress na 0-4
        const format1 = Web3Client.utils.fromWei(result1);

        const result2 = await contract.methods.balanceOf(pancakeAddress).call();
        const format2 = Web3Client.utils.fromWei(result2);

        const result3 = await contract.methods.balanceOf(buybackAddress).call();
        const format3 = Web3Client.utils.fromWei(result3);

        const result4 = await contract.methods.balanceOf(teamcoinsAddress).call();
        const format4 = Web3Client.utils.fromWei(result4);
        const num = parseFloat(format0);
        const num1 = parseFloat(format1);                               //// funkcja for numi / formati
        const num2 = parseFloat(format2);
        const num3 = parseFloat(format3);
        const num4 = parseFloat(format4);


        function CircSummary () {
            const Circ = (1000000000 - (num + num1 + num2 + num3 + num4));
            const rounded = Circ.toFixed(0);
            return rounded;
        }





      CircSummary();

        Web3Client.eth.getBalance(burnAddress,(err, bal)=> {
            setCircBalance(CircSummary());
        });


    }



    async function getBalanceOfBB() {
        const result = await contract.methods.balanceOf(buybackAddress).call(); // importing value;
        const format = Web3Client.utils.fromWei(result); // 18 decimals according to contract
        const num = parseFloat(format);


        const rounded = num.toFixed(0);    // changing value to 2 numbers;


        Web3Client.eth.getBalance(buybackAddress,(err, bal)=> {    /// setting ballance as promise
            setBuybackBalance(rounded);

        });

        function calculate() {
            let num = parseFloat(format);
            let rounded = num.toFixed(0);

            return rounded;
        }

        calculate();
    }

    getBalanceOf()
    getBalanceOfCirc()
    getBalanceOfBB()



    return (
        <div>

            <div className='balanceDisplay'>
                <p>BURNED BALANCE: <span>{burnBalance}</span> FAN</p>
                <h3>CIRCULATION: <span>{circBalance}</span> FAN</h3>
                <p>BUYBACK SALDO: <span>{buybackBalance}</span> FAN</p>

            </div>
            <p>    </p>
            <p>{""}</p>



            {errorMessage}
        </div>
    );
}

export default DataSetup;
