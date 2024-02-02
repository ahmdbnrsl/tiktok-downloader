import React, { useState, useEffect, Component } from 'react';
import Title from '.././components/Layouts/ImageTitleLayouts.jsx';
import Footer from '.././components/Layouts/Footer.jsx';
import Form from '.././components/Layouts/Form.jsx';
import Button from '.././components/Elements/Submit.jsx';
import Loading from '.././components/Elements/Loading.jsx';
import Back from '.././components/Elements/Back.jsx';

export default function () {
  const getValue = () => document.querySelector(".input-urls").value;
  const fetchData = async(fetchUrl) => {
    return await fetch(fetchUrl).then(_ => _.json()).then(_ => {
      const urls = _[0].video;
      document.querySelector(".submiter").classList.toggle("hidden");
      document.querySelector(".loadny").classList.toggle("hidden");
      return urls
    })
      .catch(_ => {
        document.querySelector(".submiter").classList.toggle("hidden");
        document.querySelector(".loadny").classList.toggle("hidden");
        window.navigator.vibrate(500)
        setTimeout(() => window.location.reload(false), 500);
      });
  };

  const HandleSubmit = async(e) => {
    e.preventDefault();
    let tautan = getValue()
    const fetchUrl = `https://downtik.netlify.app/download?url=${tautan}`;
    document.querySelector(".submiter").classList.toggle("hidden");
    document.querySelector(".loadny").classList.toggle("hidden");
    const taut = await fetchData(fetchUrl)
    
    const a = document.createElement('a');
    if(typeof(taut) === "string") {
      a.href = "/video"
      document.querySelector(".input-urls").value = "media is video! please use tiktok video downloader";
      window.navigator.vibrate(100);
      setTimeout(() => {
        a.click();
      }, 1500);
    } else {
      let thisResults = '';
      taut.forEach(e => {
        thisResults += `<a href="${e}" target="_blank" class="w-100"><img class="w-100 border border-1 border-cyan-300 rounded" src="${e}" alt="result"/></a>`
      });
      document.querySelector(".ress").classList.add("mb-8")
      document.querySelector(".ress").innerHTML = thisResults;
      document.querySelector(".input-urls").value = "";
    } 
  };
  return (
    <div className="w-full min-h-screen flex flex-col align-middle bg-slate-900 p-4 selection:bg-sky-400 selection:text-white">
      <Title/>
      <Form submit={HandleSubmit} opsional="form-vid" optional="vid" load={<Button isdisable={true} type="button" opt="loadny flex justify-center hidden"><Loading/></Button>} opt="submiter" opsio="input-urls"/>
      <div className="results flex justify-center w-full">
       <div className="ress w-full max-w-4xl grid px-8 gap-6"
         style={{
           gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
         }}></div>
      </div>
      <Back/>
      <Footer/>
    </div>
  )
}