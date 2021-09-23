import React, { useState, useEffect } from 'react';
import { GalleryContainer, GalleryImage } from './Gallery.styles';

const Gallery = (props) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      const imagesPh = [];
      for (let i = 0; i < props.size; i++) {
        imagesPh.push(<GalleryImage src={`${process.env.PUBLIC_URL + props.imageDir}/${i}.jpg`} alt="gallery" />);
      }
      setImages(imagesPh);
      setIsLoading(false);
    }
  });

  return (
    <GalleryContainer>
      {images}
    </GalleryContainer>
  );
};

export { Gallery };
