import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const ImageBox = ({ imageUrl, captionText }) => {
  return (
    <div className='flex items-center flex-col mr-8'>
      <FontAwesomeIcon icon={imageUrl} className='w-8 h-6' />
      <p className="text-center text-gray-600 text-xs hidden md:block hover:underline focus:underline">{captionText}</p>
    </div>
  );
};

export default ImageBox;