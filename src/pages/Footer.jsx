import React from 'react'
import GradientButton from "./GradientBtn";
function Footer() {
  return (
    <section >
      <div className='w-full flex items-center justify-center'>
      <div className='bg-white text-black w-100 h-15 flex items-center justify-center rounded-3xl text-center font-bold'> Join Our WhatsApp Channel <button className='bg-green-500 rounded-2xl px-3 py-1 ml-5 text-white shadow-xl shadow-green-400/50'> <a  className='font-semibold' href="https://www.whatsapp.com/channel/0029VbBCJKaGE56c90MpcL2m">Join Now</a></button></div>
      
  </div>
  <div className="relative text-center mt-5 w-screen h-22 flex flex-col items-center justify-center overflow-hidden border-t-2">
  {/* Text (behind) */}
  <h2 className="text-3xl font-bold z-0 font-Montserrat">AI & CODE WAY</h2>
  <p className="text-xl font-semibold z-0"> <a href="https://nikhilspace0148.netlify.app/" target='_blank'> By Nikhil Yadav</a></p>

  {/* Color Layer (above text) */}
  {/* <div className="absolute inset-0 bg-gradient-to-t from-yellow-400 to-transparent z-10"></div> */}
</div>
    </section>
  )
}

export default Footer