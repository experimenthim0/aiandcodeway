import React from 'react'
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';
function Hero() {
  return (
    <section> 
         <div>
        <h3 className='text-3xl text-center m-5 p-10 font-bold font-Montserrat sm:text-6xl '>Build smarter, design faster — with the best UI, web, and AI tools in one place.
        </h3></div>
{/* <DotLottieReact
      src="https://lottie.host/44a73774-16f6-44c0-b941-a294d5eaf8cb/cwCWPUrlaM.lottie"
      loop
      autoplay
    /> */}
    <div className='flex left-0 justify-center'>
   <iframe src="https://lottie.host/embed/44a73774-16f6-44c0-b941-a294d5eaf8cb/cwCWPUrlaM.lottie" className='w-20 h-20 rounded-full'></iframe>
        </div>
        </section>
  )
}

export default Hero