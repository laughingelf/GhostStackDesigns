import '../Modal.css'

const SuccessModal = ({ show, onClose, title, children }) => {
  if (!show) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <h2 className="modal-title">{title}</h2>
        <div className="modal-content">{children}</div>
        <button onClick={onClose} className="modal-close-btn">
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
