import React, { Component } from "react";
import Modal from './Modal.js';
import "./css/form.css";
import Form_icon from "./images/form_image.png";


class Form extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({show: true});
    };

    hideModal = () => {
        this.setState({show: false});
    };

    render() {
        return (
            <>
               <div className="container__form">
                   <h2 className="form__title">NEXT AMA WILL BE:</h2>
                <div className="form__container_basic">

                <Modal show={this.state.show} handleClose={this.hideModal}>

                </Modal>
                   <div className="form__left__parent">
                    <img src={Form_icon}/>
                       <h1 className="form__basic__text">To be sure that we will answer on Yours question use our form.</h1>
                   </div>
                    <div>
                    <p className="small__text__basic">Don't worry You can ask us anything now because of that form.</p>
                <button type="button" className="btn__form__addquestion" onClick={this.showModal}>
                    ADD QUESTION
                </button>
                    </div>
               </div>
                   <p className="small__text__basic">v.0.0.1 copyrights: -P- 2021</p>
               </div>
                   <div className="section__line"></div>
                </>
        );
    }
}
export default Form;