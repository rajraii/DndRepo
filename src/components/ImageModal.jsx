import React, { useEffect } from 'react'

const ImageModal = ({showModal, setShowModal, image}) => {
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setShowModal(!showModal)
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])
  return (
    <div className='modal'>
      <img src={image} alt='cardImg' />
    </div>
  )
}

export default ImageModal