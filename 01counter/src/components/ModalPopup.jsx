import React, { useEffect } from 'react'
import { createPortal } from 'react-dom';

function ModalPopup({isOpen, onClose, children }) {

    useEffect(()=> {
        const overflowType = isOpen ? 'hidden': 'auto'
        document.body.style.overflow = overflowType
    },[isOpen])

    if(!isOpen) return null;

    return createPortal (
        <div>
            <div onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose}>X</button>
                {children}
            </div>
        </div>,
        document.getElementById("modal")
    )
}

export default ModalPopup