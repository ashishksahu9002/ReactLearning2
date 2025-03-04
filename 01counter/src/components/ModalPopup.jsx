import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom';

function ModalPopup({ isOpen, onClose, children }) {

    const [closing, setClosing] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            setClosing(false);
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    const handleClose = () => {
        setClosing(true);
        setTimeout(onClose, 300); // Match animation duration
    };

    if (!isOpen && !closing) return null;

    return createPortal(
        <div className={`modal-overlay ${closing ? "fade-out" : "fade-in"}`} onClick={handleClose}>
            <div className={`modal-content ${closing ? "shrink" : "pop-out"}`} onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={handleClose}>
                    ✖
                </button>
                {children}
            </div>
        </div>,
        document.body
    );
};

export default ModalPopup