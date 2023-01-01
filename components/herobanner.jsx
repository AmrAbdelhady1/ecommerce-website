/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import  {urlFor}  from '../lib/clients'

const HeroBanner = ({ heroBanner }) => {
    return (
        <div className=' py-24 px-10 bg-[#dcdcdc] rounded-xl relative h-[500px] min-w-full'>
            <div>
                <p className=' text-lg'>{heroBanner.smallText}</p>
                <h1 className=' text-7xl mt-1'>{heroBanner.midText}</h1>
                <h1 className=' text-white text-9xl font-medium uppercase'>{heroBanner.largeText1}</h1>
                <img src={urlFor(heroBanner.image)} alt="headphone"
                    className=' absolute top-[0%] right-[20%] w-[450px] h-[450px]' />
                <div>
                    <Link href="/product/id">
                        <button type='button'
                            className=' py-2 px-4 rounded-xl text-white mt-10 font-normal text-lg cursor-pointer bg-[#f02d34]'
                        >
                            {heroBanner.buttonText}
                        </button>
                    </Link>
                    <div className='absolute right-[10%] bottom-[5%] width-[300px] flex flex-col text-[#324d67]'>
                        <h1 className=' mb-3 font-bold text-lg self-end'>
                            Description
                        </h1>
                        <p className=' text-[#5f5f5f] font-thin items-end'
                        > {heroBanner.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner