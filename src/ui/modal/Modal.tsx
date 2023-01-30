import { ReactElement, useState } from "react";
import './modal.css';
import ReactDOM from 'react-dom';

export interface ModalProps {
    button: ReactElement;
    children?: ReactElement;
    header: string;
}

export function Modal(props: ModalProps) {

    const [show, setShow] = useState(false);

    return (
        <div>
            <div onClick={() => setShow(true)} className="button-wrap">
                { props.button }
            </div>
            { show &&
                ReactDOM.createPortal(<div className="modal" onClick={() => setShow(false)}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <span>{props.header}</span>
                            <span className="close">&times;</span>
                        </div>
                        <div className="modal-body">
                            {props.children}
                        </div>
                    </div>
                </div>, document.body)
            }
        </div>
    );
}