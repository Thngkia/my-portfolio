import React from 'react';

export const SectionHeader = ({title}): React.ReactElement => {
    return (
      <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">{title}</h1>
      <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-green-500 inline-flex"></div>
      </div>
   </div>
  );
}

export default SectionHeader;