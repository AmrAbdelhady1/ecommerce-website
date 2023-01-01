/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/clients';

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image } }) => {
  return (
    <div className=' py-10 px-24 rounded-2xl relative text-white h-[400px] min-w-full mt-28 bg-[#f02d34]'>
      <div className='flex justify-between'>
        <div>
          <p className=' m-5'>{discount}</p>
          <h3 className='font-black text-8xl ml-6'>{largeText1}</h3>
          <h3 className='font-black text-8xl ml-6'>{largeText2}</h3>
          <p className=' m-5'>{saleTime}</p>
        </div>
        <div>
          <p className=' text-xl'>{smallText}</p>
          <h3 className=' font-extrabold text-6xl'>{midText}</h3>
          <p className=' font-light text-lg'>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button"
              className=' rounded-2xl px-2 py-4 bg-white text-red-500 mt-10 font-medium text-xl cursor-pointer
              hover:bg-black '
            >{buttonText}</button>
          </Link>
        </div>

        <img
          src={urlFor(image)} alt='' className='absolute bottom-[-50px] left-1/4'
        />
      </div>
    </div>
  )
}

export default FooterBanner