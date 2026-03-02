import React from 'react';

export default function AnnouncementBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-solar-red text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-8 flex items-center justify-center text-xs sm:text-sm font-medium tracking-wide">
          <span className="text-center">Switch to solar and save up to 90% on electricity bills. Get a Free site Assessment.</span>
        </div>
      </div>
    </div>
  );
}
