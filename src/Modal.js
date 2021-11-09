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
                {children}
                <div className="modal__background">

                            <div className="modal__form__header"><p>form to sending a question for next AMA</p>
                                <button type="button" className="form__btn__close" onClick={handleClose}>
                                    Close
                                </button>
                            </div>
                            <Form_Setup>
                            </Form_Setup>

                </div>
                                           </section>
        </div>
    </>

    );
};



export default Modal;

