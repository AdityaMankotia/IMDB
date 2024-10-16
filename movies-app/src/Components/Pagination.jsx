import React from 'react';

const Pagination = ({ handleNext, handlePrev, pageNo }) => {
  return (
    <div className='bg-gray-800 text-white p-4 flex justify-center items-center gap-4 rounded-lg shadow-md w-full mt-6'>
      <button 
        onClick={handlePrev} 
        className='flex items-center px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition duration-200 ease-in-out'
        aria-label="Previous Page"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div className='font-bold text-lg'>{pageNo}</div>

      <button 
        onClick={handleNext} 
        className='flex items-center px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition duration-200 ease-in-out'
        aria-label="Next Page"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

export default Pagination;
