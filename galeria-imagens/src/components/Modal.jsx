const Modal = ({
  image,
  onClose,
  onExpand,
  onPrev,
  onNext,
  isExpanded,
  canGoPrev,
  canGoNext
}) => {
  if (!image) return null

  const handleContentClick = (event) => {
    event.stopPropagation()
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal-content ${isExpanded ? 'fullscreen' : ''}`}
        onClick={handleContentClick}
      >
        <img
          src={image.src}
          alt={image.alt}
          className={`modal-image ${isExpanded ? 'expanded' : ''}`}
        />

        <div className="modal-actions">
          <button onClick={onClose}>Fechar</button>
          <button onClick={onPrev} disabled={!canGoPrev}>
            {'<'}
          </button>
          <button onClick={onNext} disabled={!canGoNext}>
            {'>'}
          </button>
          <button onClick={onExpand}>
            {isExpanded ? 'Minimizar' : 'Tela cheia'}
          </button>
        </div>
      </div>
    </div>
  )
}

export { Modal }
