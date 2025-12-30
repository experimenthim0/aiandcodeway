import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
function Indistartups() {
  const startupinfo = [
    {
      name: "Agnikul Cosmos",
      imgurl:
        "https://media.licdn.com/dms/image/v2/C510BAQGZDc0WJvRj4g/company-logo_200_200/company-logo_200_200/0/1631405162756?e=2147483647&v=beta&t=pjYXBAyhzqlK0dPXNlYyTISJg5EXfyXdilGfbAhjx8c",
      about:
        "Agnikul Cosmos is a pioneering Indian private aerospace manufacturer headquartered in Chennai and incubated at IIT Madras.",
      Founded: 2023,
      Location: "Chennai",
      category: "Space",
      website:"https://agnikul.in/",
      linkedin:"https://in.linkedin.com/company/agnikul-cosmos",
      twitter:"https://x.com/AgnikulCosmos",
      workingOn:""
    },
    {
      name: "Skyroot Aerospace",
      imgurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAOeSpjfAhgeuJszFpKpyfWvHn7SWL7PKJjA&s",
      about:
        "Skyroot Aerospace provides on-demand commercial launch services specifically for the small satellite market. They design and manufacture the Vikram series of rockets, using advanced technologies like 3D-printed engines and carbon-composite structures to make space access affordable and regular.",
      Founded: 2018,
      Funding:"US$95 million",

      Location: " Hyderabad, Telangana",
      category: "Space",
      website:"https://www.skyroot.in/",
      linkedin:"https://in.linkedin.com/company/skyroot-aerospace",
      twitter:"https://x.com/SkyrootA",
      workingOn:""
    },
    {
      name: "Pixxel",
      imgurl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Pixxel_Logo_2.jpg/500px-Pixxel_Logo_2.jpg",
      about:
        "Pixxel is a US-Indian private space technology company building a constellation of hyperspectral imaging satellites into a sun-synchronous orbit.",
      Founded: 2019,
      Location: "Bangalore",
      category: "Space",
      website:"https://www.pixxel.space/",
      linkedin:"https://in.linkedin.com/company/pixxelspace",
      twitter:"https://x.com/PixxelSpace",
      workingOn:""
    },
    {
      name:"SuryaSparks",
      imgurl:"https://suryasparks.com/wp-content/uploads/2022/03/Screenshot-2025-11-25-at-7.24.10-PM.png",
      about:"Surya Sparks is a solar technology company focusing on enhancing the spectrum of solar energy generation.",
      Location:"Jaipur",
      category:"Solar",
      website:"https://suryasparks.com/",
      linkedin:"https://in.linkedin.com/company/suryasparks",
      twitter:"https://x.com/suryasparks",
      workingOn:"A series of Luminescent Solar Concentrators(LSCs) can be connected to generate energy, which can then be directed to the building's distribution box."

    },
    {
      name:"Sarla Aviation",
      imgurl:"https://media.licdn.com/dms/image/v2/D560BAQHbZuRBnYpusQ/company-logo_200_200/B56Zf0cfTQGoAI-/0/1752152798865/sarla_aviation_logo?e=1768435200&v=beta&t=pVKBg3BewGMdP15nF8PjHO4EGlM55BcN59CSYNzpYaE",
      about:"Sarla Aviation is a Bengaluru-based aerospace startup developing electric vertical take-off and landing (eVTOL) air taxis for mass urban transport in India",
      Location:"Bangalore",
      Founded:2023,
      category:"Aviation",
      website:"https://www.sarla-aviation.com/",
      linkedin:"https://www.linkedin.com/company/sarla-aviation/",
      twitter:"https://twitter.com/sarlaaviation",
      workingOn:"Focusing on airport transfers and mass transit with a goal to launch services in major Indian cities by 2028,"



    }


  ];
  return (
    <>
      <div className="border-b-2 border-gray-500 p-5">
        <h1 className="text-4xl text-center  logofont">IndiStartups</h1>
      </div>

      <div className="h-20 text-center m-10 ">
        <p className="text-3xl font-semibold text-white">

          Find Indian Startups that are working on real Problem Solutions.
        </p>

      </div>

      {/* <div className="w-screen h-screen flex flex-col sm:flex-row max justify-center items-center gap-5 sm:px-10 px-3"> */}
     <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 px-3" > 
        {startupinfo.map((startup,index) => (
     
        <div key={index}>
        <div className="flex  bg-black p-3 flex-col gap-5 rounded-2xl h-[550px]" >
        

          <div className="flex justify-center items-center gap-5 w-full border-b-2 border-gray-500 px-10 py-5 ">
            <img
              src={startup.imgurl}
              alt=""
              className="rounded-full w-30"
            />
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-3xl font-bold text-white text-center">
                {startup.name}
              </h2>
              <p className="border-[1px] border-[#d4d4d4] text-center text- rounded-full font-semibold px-1 sm:px-1 mt-1 bg-[#3f3f46] w-40">
                Category : {startup.category}
              </p>
            </div>
          </div>
          <div className="flex flex-col px-5">
            <p className="font-bold text-[18px]">About:</p>
            <p>{startup.about}</p>
          </div>
          <div className="flex  px-5 gap-2">
            <p className="bg-[#bddcecea] text-center text-black rounded-full font-bold px-2">
              Founded : {startup.Founded}
            </p>
            {
  startup.Funding ? (
    <p className="bg-[#bddcecea] text-center text-black rounded-full font-bold px-2">
      Funding : {startup.Funding}
    </p>
  ) : null
}
          </div>
          <div className="flex flex-col px-5">
            <p className="font-semibold ">📍HQ: {startup.Location}</p>
          </div>

          <div className="flex flex-col px-5">
            <p className="font-semibold text-[18px]">Quick Links :</p>
            <div>
              <ul className="flex gap-4 ">
                <li className="border-[1px] px-3 py-1 rounded-full text-white bg-gray-400/35 font-semibold">
                  <a href={ startup.linkedin} target="_blank">LinkedIn</a>
                </li>
                <li className="border-[1px] px-3 py-1 rounded-full text-white bg-gray-400/35 font-semibold">
                  <a href={startup.website} target="_blank">Website</a>
                </li>
                <li className="border-[1px] px-3 py-1 rounded-full text-white bg-gray-400/35 font-semibold">
                  <a href={startup.twitter} target="_blank">Twitter/X</a>
                </li>

              </ul>
            </div>
          </div>
        </div>
        </div>
       )) }

      </div>
      <div className="h-10 w-screen text-center mt-10 animate-pulse">
  <p>Under Construction..</p>


    </div>

    <footer className="w-screen text-center  h-10 ">
      <p>Developed By <a href="https://nikhilspace0148.netlify.app/" target="_blank" rel="noopener noreferrer" className="underline font-semibold text-white">Nikhil Yadav</a></p>
    </footer>
    </>
  );
}

export default Indistartups;
