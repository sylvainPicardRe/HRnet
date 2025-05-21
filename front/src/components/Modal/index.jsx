import '../../styles/Modal.css'

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null
  return (
    <div className="modal-wrapper">
      <div id="confirmation" className="modal">
        Employee Created!
        <button className="close-modal" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  )
}

export default Modal
