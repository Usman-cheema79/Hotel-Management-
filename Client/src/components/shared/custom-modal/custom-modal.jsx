import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.id === 'modal-overlay') {
                onClose();
            }
        };

        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div id="modal-overlay" className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={onClose}>
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
                {children}
            </div>
        </div>
    );
};

export default Modal;
