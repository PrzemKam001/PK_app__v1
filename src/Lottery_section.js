import React, {useState, useEffect} from 'react';
import "./css/lottery_section_css.css";
import Wallet from "./components/Wallet/Wallet";



    class LotterySection extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                showComponent: false,
            };
            this._onButtonClick = this._onButtonClick.bind(this);
        }

        _onButtonClick() {
            this.setState({
                showComponent: true,

            });

        }

        render() {
            return (
                <>
                    <h1 className="lottery__h1"> Win NFT with our FAN Lottery</h1>
                  <div className="buyticket__container">

                    <div>
                      <button onClick={this._onButtonClick} className="button_cls">Buy Ticket</button>
                    {this.state.showComponent ?
                        <Wallet /> :
                        null
                    }
                    </div>
                    <div className="lottery_instruction_box">
                        <p className="lottery__text__instruction">Actually one ticket costs: 100 FAN</p>
                        <p className="small__text__basic">GENERAL RULES OF THE LOTTERY</p>
                        <p className="lottery__text__instruction">You can play multiple times!</p>
                        <p className="small__text__basic">When You Win NFT will be send to Your BSC address</p>
                    </div>
                </div>
                </>
            );
        }
    }


export default LotterySection;