import React from 'react';

const ImageWithCaption = ({ imageUrl, captionText }) => {
  return (
    <div className='flex items-center flex-col mr-8'>
      <img src={imageUrl} alt="Description" className='w-8 h-8' />
      <p className="text-center text-gray-600 text-xs">{captionText}</p>
    </div>
  );
};

export default ImageWithCaption;