/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { client, urlFor } from '../../lib/clients';
import { Products } from '../../components';
import { useStateContext } from '../../context/StateContext';


const ProductDetails = ({ products, product }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();


  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  }

  return (
    <div>
      <div className='flex gap-10 m-10 mt-14 text-[#324d67] flex-wrap'>
        <div>
          <div>
            <img src={urlFor(image && image[index])} alt=''
              className='rounded-2xl w-[400px] h-[400px] cursor-pointer duration-300 ease-in-out bg-[#ebebeb]
             hover:bg-[#f02d34]' />
          </div>
          <div className='flex gap-2 mt-5'>
            {image?.map((item, i) => (
              <img
                key={i}
                alt=""
                src={urlFor(item)}
                className={i === index ? 'rounded-lg w-[70px] h-[70px] cursor-pointer bg-[#f02d34]'
                  : 'rounded-lg w-[70px] h-[70px] cursor-pointer bg-[#ebebeb]'}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className='text-[#324d67] text-5xl font-extrabold mb-1'>{name}</h1>
          <div className='flex gap-1 mt-2 items-center text-[#f02d34]'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <p className='text-[#324d67]'>
              (20)
            </p>
          </div>
          <h4 className=' mt-2 font-medium text-lg'>Details: </h4>
          <p className=' mt-2'>{details}</p>
          <p className='font-bold text-2xl mt-7 text-[#f02d34]'>${price}</p>
          <div className='flex gap-5 mt-2 items-center'>
            <h3>Quantity:</h3>
            <div className='flex border border-gray-600 items-center'>
              <p className='text-xl px-4 cursor-pointer  text-[#f02d34]'
                onClick={decQty}><AiOutlineMinus /></p>
              <p className='px-4 cursor-pointer border-r border-l text-xl  border-gray-600'
              >{qty}</p>
              <p className='text-xl px-4 cursor-pointer text-[#f02d34]'
                onClick={incQty}><AiOutlinePlus /></p>
            </div>
          </div>
          <div className="flex gap-7">
            <button type="button"
              className='px-3 py-5 mt-10 text-xl font-medium border-2 border-[#f02d34] bg-white text-[#f02d34] cursor-pointer w-52 scale-100 duration-500 ease-in-out hover:scale-110'
              onClick={() => onAdd(product, qty)}>Add to Cart</button>
            <button type="button"
              className='px-3 py-5 w-52 bg-[#f02d34] text-white mt-10 text-xl font-medium cursor-pointer scale-100 duration-500 ease-in-out hover:scale-110'
              onClick={handleBuyNow}>Buy Now</button>
          </div>
        </div>
      </div>

      <div className="mt-32">
        <h2 className='text-center m-12 text-[#324d67] text-3xl'>You may also like</h2>

        <div className='text-3xl font-semibold mx-16 text-[#f02d34] relative h-[400px] min-w-full overflow-x-hidden'>
          <div className='flex justify-center gap-4 mt-5 w-[200%] absolute
            animate-[wiggle_20s_linear_infinite] hover:pause'>
            {products.map((item) => (
              <Products key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
      slug {
        current
      }
    }
    `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product }
  }
}

export default ProductDetails