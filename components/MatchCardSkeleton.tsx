import React from 'react';

const MatchCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden dark:bg-gray-800/60 p-5 animate-pulse">
      <div className="flex flex-col md:flex-row items-start justify-between gap-4">
        <div className="flex-grow w-full">
          {/* Competition */}
          <div className="flex items-center gap-2 mb-2">
            <div className="h-5 w-5 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
            <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
          </div>
          {/* Teams */}
          <div className="flex items-center justify-between gap-2 text-xl md:text-2xl font-bold text-brand-deep-blue dark:text-gray-100 mb-3">
            <div className="flex items-center text-center gap-3 w-2/5">
              <div className="h-8 w-full bg-gray-300 dark:bg-gray-700 rounded-md"></div>
              <div className="h-14 w-14 bg-gray-300 dark:bg-gray-700 rounded-full flex-shrink-0"></div>
            </div>
            <div className="h-8 w-12 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
            <div className="flex items-center text-center gap-3 w-2/5">
              <div className="h-14 w-14 bg-gray-300 dark:bg-gray-700 rounded-full flex-shrink-0"></div>
              <div className="h-8 w-full bg-gray-300 dark:bg-gray-700 rounded-md"></div>
            </div>
          </div>
          {/* Details */}
          <div className="space-y-2">
            <div className="flex items-center">
              <div className="h-4 w-4 mr-2 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
              <div className="h-4 w-48 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
            </div>
            <div className="flex items-center">
              <div className="h-4 w-4 mr-2 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
              <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
            </div>
            <div className="flex items-center">
              <div className="h-4 w-4 mr-2 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
              <div className="h-4 w-40 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 w-full md:w-auto mt-4 md:mt-0 md:pl-4">
           <div className="h-10 w-full md:w-40 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
        </div>
      </div>
      {/* Odds */}
      <div className="mt-4 pt-4 border-t border-black/10 dark:border-white/10">
        <div className="h-10 bg-gray-200 dark:bg-gray-700/50 rounded-lg"></div>
      </div>
    </div>
  );
};

export default MatchCardSkeleton;