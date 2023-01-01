import React from 'react'
import Head from 'next/head';
import { HeroBanner, Products, FooterBanner } from '../components'
import { client } from '../lib/clients';

const index = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className="text-center text-[#324d67] m-10">
        <h1 className="text-5xl font-extrabold mb-1">Best Selling Products</h1>
        <p className=" font-extralight text-2xl">Speakers of many variations</p>
      </div>

      <div className=' flex flex-wrap justify-center gap-16 min-w-full mt-5'>
        {products?.map((product) => <Products key={product._id} product={product} />)}
      </div>

      <FooterBanner footerBanner={bannerData.length && bannerData[0]} />
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default index
