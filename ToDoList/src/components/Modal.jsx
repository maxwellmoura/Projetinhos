const Modal = ({ children }) => {
  const closeModal = () => {
    const modal = document.querySelector('#modal')
    if (modal) modal.classList.add('hide')
  }

  return (
    <div id="modal" className="hide">
      <div className="fade"></div>
      <div className="modal">
        <button onClick={closeModal} className="closeButton">Fechar</button>
        {children}
      </div>
    </div>
  )
}

export default Modal
