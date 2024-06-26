import React from 'react'

export const CountdownSection = () => {
    return (
        <div className='md:h-[100vh] h-auto w-full flex items-center justify-center bg-img'>
            <div className="md:mt-[-20px] rounded-[24px] md:max-w-[540px] w-full max-w-full  flex flex-col items-center z-1 md:border md:border-[#ffffff1a] bg-[#0009] blurr">
                <div className="w-full flex flex-col items-center md:mt-[-70px]">
                    <div className='md:w-[240px] w-full relative'>

                        <img src="/assets/images/zk-token-BnLFrFec.webp" className='w-full' alt="" />
                    </div>
                    <p className="md:h-28px h-{7.466666666666668vw}"></p>
                    <p className="md:text-[40px] text-[9.6vw] font-semibold leading-1 md:w-auto w-auto text-center whitespace-nowrap text-white">$ZK Airdrop</p>
                    <p className="md:h-[20px] h-[5.333333333333334vw]"></p>
                    <div className="flex flex-col items-center">
                        <p className="text-[4.8vw] md:text-[20px] font-semibold leading-normal text-white">Claim Ends in</p>
                        <div className="h-6 md:h-24"></div>
                        <div className="flex flex-row md:gap-[20px] gap-[3.733333333333334vw]">
                            <div className="flex flex-col md:gap-[11px] gap-[2.933333333333333vw] items-center">
                                <div className="flex md:w-[100px] w-[19.2vw] md:h-[100px]   h-[19.2vw] d-flex items-center justify-center md:gap-[14px] gap-[3.733333333333334vw]  bg-[#ffffff0d] md:rounded-[16px] rounded-[4.266666666666667vw]blurr" style={{ border: '1px solid rgba(255,255,255,.1)' }}>

                                    <p className='timer md:text-[48px] text-[9.6vw] font-semibold leading-1 text-white relative w-full text-center '>
                                       01
                                    </p>

                                </div>
                                <p className="md:text-[16px] text-[4.266666666666667vw] font-normal text-white leading-1 opacity-0.6">Day</p>
                            </div>
                            {/* <div className="flex flex-col md:gap-[11px] gap-[2.933333333333333vw] items-center">
                                <div className="flex md:w-[100px] w-[19.2vw] md:h-[100px]   h-[19.2vw] d-flex items-center justify-center md:gap-[14px] gap-[3.733333333333334vw]  bg-[#ffffff0d] md:rounded-[16px] rounded-[4.266666666666667vw]blurr" style={{ border: '1px solid rgba(255,255,255,.1)' }}>

                                    <p className='timer md:text-[48px] text-[9.6vw] font-semibold leading-1 text-white relative w-full text-center '>
                                        1
                                    </p>

                                </div>
                                <p className="md:text-[16px] text-[4.266666666666667vw] font-normal text-white leading-1 opacity-0.6">Hours</p>
                            </div> */}
                            {/* <div className="flex flex-col md:gap-[11px] gap-[2.933333333333333vw] items-center">
                                <div className="flex md:w-[100px] w-[19.2vw] md:h-[100px]   h-[19.2vw] d-flex items-center justify-center md:gap-[14px] gap-[3.733333333333334vw]  bg-[#ffffff0d] md:rounded-[16px] rounded-[4.266666666666667vw]blurr" style={{ border: '1px solid rgba(255,255,255,.1)' }}>

                                    <p className='timer md:text-[48px] text-[9.6vw] font-semibold leading-1 text-white relative w-full text-center '>
                                        1
                                    </p>

                                </div>
                                <p className="md:text-[16px] text-[4.266666666666667vw] font-normal text-white leading-1 opacity-0.6">Minutes</p>
                            </div> */}
                            {/* <div className="flex flex-col md:gap-[11px] gap-[2.933333333333333vw] items-center">
                                <div className="flex md:w-[100px] w-[19.2vw] md:h-[100px]   h-[19.2vw] d-flex items-center justify-center md:gap-[14px] gap-[3.733333333333334vw]  bg-[#ffffff0d] md:rounded-[16px] rounded-[4.266666666666667vw]blurr" style={{ border: '1px solid rgba(255,255,255,.1)' }}>

                                    <p className='timer md:text-[48px] text-[9.6vw] font-semibold leading-1 text-white relative w-full text-center '>
                                        1
                                    </p>

                                </div>
                                <p className="md:text-[16px] text-[4.266666666666667vw] font-normal text-white leading-1 opacity-0.6">Seconds</p>
                            </div> */}
                        </div>
                        <p className="md:h-[40px] h-[9.066666666666666vw]"></p>
                        <button className="rounded-[999px] btn-bg text-black md:w-[200px] w-[88.26666666666667vw] md:h-[50px] h-[13.333333333333334vw] cursor-pointer md:text-[18px] text-[4.8vw] font-semibold">Connect Wallet</button>
                        <p className="md:h-[45px] h-[9.066666666666666vw]"></p>
                        <div className="flex text-white md:text-[16px] text-[4.266666666666667vw] font-normal leading-1.2 md:gap-4 gap-[3.2vw] md:flex-row flex-col items-center cursor-pointer">
                            <span className="opacity-60">Snapshot Time: 12th March 2024, 08:00 UTC</span>
                            <div className="flex flex-row items-center">
                                <span>Block heights</span>
                            </div>
                        </div>
                        <div className="md:h-[30px] h-[8.799999999999999vw]"></div>
                    </div>

                </div>
            </div>
        </div>
    )
}
