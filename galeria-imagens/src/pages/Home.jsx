import { useEffect, useState, useCallback } from 'react'
import { imgs } from './img'
import { Modal } from '../components/Modal'

const Home = () => {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [isExpanded, setIsExpanded] = useState(false)

  const selectedImage = selectedIndex !== null ? imgs[selectedIndex] : null
  const canGoPrev = selectedIndex !== null && selectedIndex > 0
  const canGoNext =
    selectedIndex !== null && selectedIndex < imgs.length - 1

  const handleOpenModal = (index) => {
    setSelectedIndex(index)
    setIsExpanded(false)
  }

  const handleCloseModal = useCallback(() => {
    setSelectedIndex(null)
    setIsExpanded(false)
  }, [])

  const handleExpanded = useCallback(() => {
    setIsExpanded((prev) => !prev)
  }, [])

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null || prev >= imgs.length - 1) return prev
      return prev + 1
    })
  }, [])

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null || prev <= 0) return prev
      return prev - 1
    })
  }, [])

  useEffect(() => {
    if (!selectedImage) return

    function handleKeyDown(event) {
      if (event.key === 'Escape') handleCloseModal()
      if (event.key === 'ArrowRight') handleNext()
      if (event.key === 'ArrowLeft') handlePrev()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, handleCloseModal, handleNext, handlePrev])

  return (
    <div>
      <h1>Galeria de Imagens</h1>
      <div className="gallery">
        {imgs.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className="thumbnail"
            onClick={() => handleOpenModal(index)}
          />
        ))}
      </div>

      {selectedImage && (
        <Modal
          image={selectedImage}
          onClose={handleCloseModal}
          onExpand={handleExpanded}
          onPrev={handlePrev}
          onNext={handleNext}
          isExpanded={isExpanded}
          canGoPrev={canGoPrev}
          canGoNext={canGoNext}
        />
      )}
    </div>
  )
}

export default Home
