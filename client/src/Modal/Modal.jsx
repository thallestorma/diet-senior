import './Modal.css';

export default function Modal({ children, handleClose }) {
    return (
        <div className='modal'>
            <button className='close-button' onClick={handleClose}>
                X
            </button>

            {children}
        </div>
    );
}
