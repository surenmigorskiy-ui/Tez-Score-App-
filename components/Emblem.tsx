import React, { useState, useEffect } from 'react';

interface EmblemProps {
  src?: string;
  alt: string;
  className: string;
}

const Emblem: React.FC<EmblemProps> = ({ src, alt, className }) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [src]);

  const handleError = () => {
    setError(true);
  };

  if (error || !src) {
    return (
      <div className={`${className} bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-1/2 w-1/2 text-gray-400 dark:text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} onError={handleError} />;
};

export default Emblem;