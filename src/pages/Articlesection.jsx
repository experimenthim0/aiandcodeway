import React from 'react'
import { Link } from "react-router-dom";
function Articlesection() {
 const articles =[
    {   
        author:"Nikhil",
        info:"If you are suffering into running tailwind in react then find help here",
        link:"https://",
        imgurl:"https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard.9e9b9cc2.jpg&w=3840&q=75"
    },
    
 ]
  return (
    <>
    <div className='w-full h-10 mb-10 flex justify-center items-center flex-col'>
        <p className='text-center text-3xl font-bold'>Get Fix</p>
       

    </div>


    <div className='flex justify-center items-center gap-7 mb-10'>
        {/* <div> */}
            {articles.map((article,index) => (
                <div key={index}>
                    <div className='border-[1px] border-gray-400 flex justify-center items-center p-3 flex-col rounded-3xl w-110'>
                            <img src={article.imgurl} alt="" className='w-auto rounded-2xl'/>
                            <p className='p-2'>{article.info}</p>

                            <div className='flex flex-row justify-between items-center p-2 w-full'>
                                <p>By: {article.author}</p>
                                
                               <Link to="/reacttailwindinst" className='text-blue-400 hover:underline'>Read</Link>
                            </div>

                    </div>
                       
                    </div>
            ))}
        </div>
    {/* </div> */}
    </>
  )
}

export default Articlesection