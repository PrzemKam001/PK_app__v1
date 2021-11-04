import React, { Component} from 'react';
import './css/modal_form.css';
import Form_Setup from "./js/Form_Setup";



//- FORM MODAL STRUCTURE AND FUNCTIONS-//




const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";


    return (
        <>
        <div className={showHideClassName}>
            <section className="modal-main">
                <div className="modal__form__main">
                {children}
                    <div className="modal__form__main">
                        <div className="modal__form__container">
                            <div><p>form to sending a question for next AMA</p>
                                <button type="button" className="form__btn__close" onClick={handleClose}>
                                    Close
                                </button>
                            <Form_Setup>

                            </Form_Setup>
                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </div>
    </>

    );
};



export default Modal;

