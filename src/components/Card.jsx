import React, { useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import ImageModal from './ImageModal';

const Card = ({ item, image, loading }) => {
  const [showModal, setShowModal] = React.useState(false);
  
  return (
    <>
      <div className='card' onClick={e => setShowModal(!showModal)}>
        {loading ? <CircularProgress /> : <img src={image?.urls?.regular} alt={item.title} />}
        <h2>{item.title}</h2>
      </div>
      {
        showModal ? (
          <ImageModal 
            image={image?.urls?.regular}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        ) : (<></>)
      }
    </>
  )
}

export default Card