import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='text-[#324d67] text-center mt-5 px-8 py-3 font-bold flex flex-col items-center justify-center gap-3 '>
      <p>2022 EMR HeadPhones All rights reserverd</p>
      <p className=' flex gap-3 text-3xl'>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer;