import React from 'react'


const data = [
    {
        id: 1,
        title: 'Polyhedra Network (ZK): Scaling Computing'
    }, {
        id: 2,
        title: 'zkBridge Update: Support for the Ethereum Dencun Network Upgrade'
    },
    {
        id: 3,
        title: 'Building the Largest Interoperable Bitcoin Ecosystem with zkBridge'
    },
    {
        id: 4,
        title: 'Introducing the Bitcoin Messaging Protocol with zkBridge'
    },
    {
        id: 5,
        title: 'Ethereum Single Slot Finality'
    }
]

export const DetailsSection = () => {
    return (
        <div className=' flex relative  flex-col w-[100vw] md:h-[100vh] h-auto items-center justify-center  overflow-hidden md:text-[40px] text-[8.533333333333333vw] font-semibold leading-1.2 md:gap-[60px] gap-[16vw] text-center  bg-img'>
            <h1 className=" md:text-[36px] text-[8.533333333333333vw] font-semibold leading-1.2 md:w-[347px] w-[89.33333333333333vw] text-center text-white">What’s new?</h1>
            <div className="md:h-[60px] h-[16vw]"></div>
            <div className="flex flex-col  md:gap-[6px] gap-[2.666666666666667vw]">
                {data.map((item) =>
                    <a href="" className='flex md:w-[1200px] w-[91.46666666666667vw] md:items-center items-start justify-between md:py-[22px] py-[5.333333333333334vw] md:px-[24px] px-[5.333333333333334vw]  md:flex-row flex-col md:gap-[auto] gap-[3.2vw] md:rounded-[12px] rounded-[3.2vw ] blurr md:bg-[#0009] bg-[#ffffff0d]' style={{ border: '1px solid rgba(255,255,255,.1)' }}>
                        <p className="md:text-[18px] text-[4.8vw] text-white"> {item.title}</p>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" opacity="0.5"><path d="M7 17L17 7" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M9 7H17V15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><defs><linearGradient id="paint0_linear_71_1652" x1="7" y1="17" x2="18.8578" y2="11.4204" gradientUnits="userSpaceOnUse"><stop stop-color="#0CFFF0"></stop><stop offset="1" stop-color="#0CFFA7"></stop></linearGradient><linearGradient id="paint1_linear_71_1652" x1="9" y1="15" x2="18.4863" y2="10.5363" gradientUnits="userSpaceOnUse"><stop stop-color="#0CFFF0"></stop><stop offset="1" stop-color="#0CFFA7"></stop></linearGradient></defs></svg></div>
                    </a>
                )}

            </div>
            <div className="md:h-[88px] h-[32vw]"></div>
            <div className="flex md:w-[1200px] w-[100vw] md:absolute bottom-0 static   justify-between items-center md:py-[30px] py-[12.8vw] md:text-[16px] text-[4.266666666666667vw] font-normal flex-col md:flex-row gap-[8.533333333333333vw] md:gap-auto">
                <img src="/assets/images/logo-AKXFtGGI.svg" className="md:w-[145px] w-[43.2vw]" />
                <p className="text-[#8F8F8F] md:text-[16px] text-[3.733333333333334vw]">© 2024 Polyhedra Network. All rights reserved</p>
                <div className="flex flex-row items-center md:mr-[0px] mr-[5.333333333333334vw]">
                    <p className="md:text-[16px] font-normal leading-1.2 md:mr-[14px] mr-[3.733333333333334vw] whitespace-nowrap md:block block text-white">Join us</p>
                    <div className="flex flex-row md:gap-[16px] gap-[4.266666666666667vw]">
                        <a href="#" >
                            <img src="/assets/images/svgexport-7.svg" className="md:w-[28px] w-[7.466666666666668vw] hover:opacity-0.7" />
                        </a>
                        <a href="#"  >
                            <img src="/assets/images/svgexport-8.svg" className="md:w-[28px] w-[7.466666666666668vw] hover:opacity-0.7" />

                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
