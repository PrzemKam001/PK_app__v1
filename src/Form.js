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
                   <h2 className="form__title">Send us any question by our form</h2>
                <div className="form__container_basic">

                <Modal show={this.state.show} handleClose={this.hideModal}>

                </Modal>
                    <img src={Form_icon}/>
                   <div className="form__left__parent">

                       <h1 className="form__basic__text">Use this form to contact with team and suggest us Yours idea about future development progress.
                           You can also send us any question which we can reach later and druing next AMA session we will answer You on it.</h1>
                   </div>
                    <div>
                                    <button className="button_cls" type="button" onClick={this.showModal}>
                    Add Question
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