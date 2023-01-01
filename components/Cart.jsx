/* eslint-disable @next/next/no-img-element */
import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/clients';

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();

  return (
    <div className='min-h-full min-w-full fixed bg-black bg-opacity-50 right-0 top-0 z-[100]'
      ref={cartRef}>
      <div className=' relative h-[822px] bottom-0 px-10 py-2 float-right bg-white w-[600px]'>
        <button
          type="button"
          className='flex items-center text-xl font-medium cursor-pointer gap-1 ml-2 mt-9'
          onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className='ml-2'>Your Cart</span>
          <span className='text-[#f02d34] ml-2'>({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className='m-10 text-center'>
            <div className=' ml-[150px]'><AiOutlineShopping size={150} /></div>
            <h3 className=' font-semibold text-xl'>Your shopping bag is empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className='w-[400px] px-2 py-3 rounded-2xl text-xl mt-10 uppercase bg-[#f02d34]
                 text-[#fff] cursor-pointer scale-100 duration-500 ease-in-out hover:scale-110'
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
        <div className='mt-4 overflow-auto px-5 py-2'>
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className="px-5 py-1 flex gap-8" key={item._id}>
              <img alt='' src={urlFor(item?.image[0])} className='w-[25%] h-[25%] bg-[#ebebeb] rounded-2xl' />
              <div className='flex flex-col justify-between w-[350px] text-[#324d67]'>
                <div className="flex flex-wrap gap-2">
                  <h1 className=' text-2xl text-black'>{item.name}</h1>
                  <h1 className='mt-1 text-xl text-[#324d67]'>${item.price}</h1>
                </div>
                <div className="flex gap-5 mt-14">
                  <div className='flex border border-gray-600 items-center'>
                    <p className='text-xl px-4 cursor-pointer  text-[#f02d34]'
                      onClick={() => toggleCartItemQuanitity(item._id, 'dec')}><AiOutlineMinus /></p>
                    <p className='px-4 cursor-pointer border-r border-l text-xl  border-gray-600'
                    >{item.quantity}</p>
                    <p className='text-xl px-4 cursor-pointer text-[#f02d34]'
                      onClick={() => toggleCartItemQuanitity(item._id, 'inc')}><AiOutlinePlus /></p>
                  </div>
                  <button
                    type="button"
                    className='text-[#f02d34] text-2xl cursor-pointer'
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className=' absolute bottom-[12px] right-[5px] min-w-full p-8'>
            <div className='flex justify-between text-2xl'>
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className='w-[400px] mx-auto'>
            <button type="button" className='w-[400px] px-2 py-3 rounded-2xl text-xl mt-10 uppercase bg-[#f02d34]
                 text-[#fff] cursor-pointer scale-100 duration-500 ease-in-out hover:scale-110'
             onClick=''>
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart