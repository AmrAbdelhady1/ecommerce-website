/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/clients'

const Products = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className=' cursor-pointer scale-100 hover:scale-110 duration-500 ease-in-out text-[#324d67]'>
          <img src={urlFor(image && image[0])}
            className='w-60 h-60 rounded-2xl bg-[#ebebeb] scale-100 duration-500 ease-in-out'
            alt="" />
          <p className=' font-medium'>{name}</p>
          <p className=' font-extrabold mt-2 text-black'>{price}$</p>
        </div>
      </Link>
    </div>
  )
}

export default Products