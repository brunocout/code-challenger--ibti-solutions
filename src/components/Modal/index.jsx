import "./index.css";

const Modal = ({ message, type }) => {
    return ( 
        <div className={`modal-container ${type}`}>
            <p>{message}</p>
        </div>
     );
}
 
export default Modal;