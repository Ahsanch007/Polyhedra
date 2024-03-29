import React, { useState } from 'react'
import './layout.css'


const Header = () => {
 
  return (
    <div className='h-[88px] w-full justify-between fixed flex items-center header-bg' style={{ zIndex:'112' }}>
      <div className="flex items-center gap-[5.333333333333334vw] md:gap-[40px]">
        <div className="img ml-[5.333333333333334vw] md:ml-[32px] md:w-[173px] h-auto w-[36.8vw]">
          <img src="/assets/images/logo-AKXFtGGI.svg" className='w-full'  alt="" />
        </div>
        <a href="" className='md:ml-[44px] md:hidden md:text-[18px] text-[14px] whitespace-nowrap leading-1 font-normal text-[#fffc] transition-all hover:text-white'>
            Airdrop
          </a>
          <a href="" className='md:ml-[44px] md:hidden  md:text-[18px] text-[14px] whitespace-nowrap leading-1 font-normal text-[#fffc] transition-all hover:text-white'>
          $ZK Tokenomics
          </a>
        <div className="menu-items hidden md:flex gap-2 md:gap-0" >
        <a href="" className='md:ml-[44px] md:text-[18px] text-[14px] whitespace-nowrap leading-1 font-normal text-[#fffc] transition-all hover:text-white'>
            Airdrop
          </a>
          <a href="" className='md:ml-[44px]  md:text-[18px] text-[14px] whitespace-nowrap leading-1 font-normal text-[#fffc] transition-all hover:text-white'>
          $ZK Tokenomics
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header