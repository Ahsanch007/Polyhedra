import React, { useRef } from 'react';

export const VideoSection = () => {
  const videoRef = useRef(null);

  const playFullScreen = () => {
    const video = videoRef.current;
    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) { /* Firefox */
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) { /* IE/Edge */
        video.msRequestFullscreen();
      }
    }
  };

  return (
    <div className='w-full h-full'>
      <div className="h-[100vh] w-full">
        <div className="relative h-[100vh] w-full flex">
          <video 
            ref={videoRef} 
            src="/assets/images/header.mp4" 
            autoPlay 
            muted 
            loop  
            playsInline  
            className="w-full h-[100vh] object-cover"
            onClick={playFullScreen}
          />
          <div className='absolute left-[50%] bottom-[22px] rounded-[60px] gap-[6px] h-[52px] w-[66.66666666666666vw] md:w-[300px] flex items-center justify-center bg-[#ffffff0d] cursor-pointer ' style={{ transform:'translate(-50%)', backdropFilter:'blur(20px)' }}>
          <p className="text-[4vw] md:text-[18px] leading-1.2 font-medium text-white">Proceed to $ZK Airdrop</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" className="w_24px"><path d="M14 24.5C19.799 24.5 24.5 19.799 24.5 14C24.5 8.20101 19.799 3.5 14 3.5C8.20101 3.5 3.5 8.20101 3.5 14C3.5 19.799 8.20101 24.5 14 24.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.5 15.1668L14 18.6668M14 18.6668L17.5 15.1668M14 18.6668L14 9.3335" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </div>
        </div>
      </div>
    </div>
  );
};
