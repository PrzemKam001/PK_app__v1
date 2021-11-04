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
                <div className="buyticket__container">
                    <button onClick={this._onButtonClick}>BUY TICKET</button>
                    {this.state.showComponent ?
                        <Wallet /> :
                        null
                    }
                </div>
                </>
            );
        }
    }


export default LotterySection;