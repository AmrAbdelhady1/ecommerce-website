/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './';
import { useStateContext} from '../context/StateContext';
import logo from './logo.png'


const Navbar = () => {

  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className=' flex justify-between mx-2 my-5 relative'>
      <p className=' text-gray-600 text-lg '>
        <Link href="/">
          EMR HeadPhones
        </Link>
      </p>
      <button type="button"
        className=' text-3xl text-gray-600 cursor-pointer relative duration-300 ease-in-out hover:scale-110'
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className=' absolute text-xs text-[#eee] bg-[#f02d34] w-[18px] h-[18px] rounded-lg font-semibold items-center top-0'
        >{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar;