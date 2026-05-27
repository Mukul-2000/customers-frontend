import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
import "./SideModal.css";

interface ISideModal {
    show: boolean;
    handleClose: any;
    body: any
    title: string
    footer?: any
}


export default function SideModal(props: ISideModal) {
    return (

        <>
            <div className={props.show ? 'xcn-modal-parent' : "d-none"}>
                <div className='d-flex justify-content-end'>
                    <div>
                        <div className='xcn-modal-main'>
                            <div className='xcn-modal-top'>
                                <div className="d-flex justify-content-between align-items-center mx-1">
                                    <span className='text-black text-capitalize fs-5 fw-bold'>
                                        {props.title}
                                    </span>
                                    <FontAwesomeIcon icon={faClose} className="text-black xcn-link-pointer" onClick={props.handleClose} />
                                </div>
                                <hr className="text-primary mx-1" />
                                <div className="mt-2 mx-1">
                                    {props.body}
                                </div>
                            </div>
                            <div className="xcn-modal-footer mx-1">
                                {props.footer}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}