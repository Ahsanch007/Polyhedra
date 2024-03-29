import React from 'react'

const cardData = [
    {
        id: 1,
        title: '20M+',
        desc: 'zkBridge Transactions'
    },
    {
        id: 2,
        title: '40M+',
        desc: 'ZK Proofs Generated'
    },
    {
        id: 1,
        title: '80+',
        desc: 'Ecosystem Partners'
    },
]

export const CardsSection = () => {
    return (
        <div className=' flex flex-col w-[100vw] md:h-[100vh] h-auto items-center justify-center  overflow-hidden md:text-[40px] text-[8.533333333333333vw] font-semibold leading-1.2 md:gap-[60px] gap-[16vw] text-center  bg-img'>
            <p class=" md:text-[40px] text-[8.533333333333333vw] font-semibold leading-1.2 text-white">$ZK: Scaling Computing</p>
            <div className="flex md:gap-[24px] gap-[4.266666666666667vw] md:flex-row flex-col overflow-hidden">
                {cardData.map((cardItem) =>
                    <div className="flex flex-col md:w-[384px] w-[91.46666666666667vw] md:h-[220px] h-[58.666666666666664vw] md:bg-[#0009] bg-[#ffffff0d] md:rounded-[16px] rounded-[4.266666666666667vw] blurr items-center justify-center  md:gap-[20px] gap-[5.333333333333334vw]"
                        style={{
                            border: '1px solid rgba(255,255,255,.1)'
                        }}>
                        <p class="md:text-[64px] text-[17.066666666666666vw] font-semibold text-white">{cardItem.title}</p>
                        <p class="md:text-[18px] text-[4.8vw] font-normal opacity-0.6 leading-1.6 text-white">{cardItem.desc}</p>
                    </div>
                )}

            </div>
            <div className=" md:gap-[24px] gap-[5.6000000000000005vw] flex md:flex-row flex-col">
                <a href="https://zkbridge.com" target="_blank" class="md:w-[188px] w-[50.13333333333333vw] md:h-[48px] h-[12.8vw] md:text-[16px] text-white text-[4.266666666666667vw] font-normal leading-1.2  bg-[#0000000d] blurr rounded-[9000px] flex items-center justify-center btnn-graident "
                    style={{ border: '1px solid rgba(255,255,255,.1)' }}>
                    Explore zkBridge
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 8L15 12L11 16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </a>
                <a href="https://zkbridge.com" target="_blank" class="md:w-[188px] w-[50.13333333333333vw] md:h-[48px] h-[12.8vw] md:text-[16px] text-white text-[4.266666666666667vw] font-normal leading-1.2  bg-[#0000000d] blurr rounded-[9000px] flex items-center justify-center btnn-graident "
                    style={{ border: '1px solid rgba(255,255,255,.1)' }}>
                    ZK Research
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 8L15 12L11 16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </a>
            </div>
        </div>
    )
}
