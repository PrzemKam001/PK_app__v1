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
                    <h1 class="lottery__h1"> WIN NFT BY OUR LOTTERY</h1>
                  <div className="buyticket__container">

                    <div>
                        <p>You can play multiple times</p>
                        <p className="small__text__basic">COST OF THE TICKET IT's : 100 FAN</p>
                    <button onClick={this._onButtonClick} className="btn__form__addquestion">Buy Ticket</button>
                    {this.state.showComponent ?
                        <Wallet /> :
                        null
                    }
                    </div>
                    <div>
                        <p>here functional modal part</p>
                        <p className="small__text__basic">GENERAL RULES OF THE LOTTERY</p>
                        <button type="button" className="btn__form__addquestion" onClick={this.showModal}>
                            Check Reward
                        </button>
                    </div>
                </div>
                </>
            );
        }
    }


export default LotterySection;