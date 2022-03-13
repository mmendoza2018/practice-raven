import React from 'react'
import './modal.css'

const Modal = ({children,openModal,closeModal,isOpen}) => {
    const handlePropagation = (e) => {
        e.stopPropagation();
    }
  return (
    <div>
    <div className={`modal ${isOpen && "open"}`} onClick={closeModal}>
    <div className={"modal-container"} onClick={handlePropagation}>
        <button onClick={closeModal} className="modal-close">X</button>
        {children}
    </div>
    </div>
      {/* <button onClick={openModal}>Abrir</button> */}
    </div>
  )
}

export default Modal