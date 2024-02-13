import React, { useState, useEffect, Component } from 'react';
import Title from '.././components/Layouts/VideoTitleLayouts.jsx';
import Footer from '.././components/Layouts/Footer.jsx';
import Form from '.././components/Layouts/Form.jsx';
import Button from '.././components/Elements/Submit.jsx';
import Loading from '.././components/Elements/Loading.jsx';
import Back from '.././components/Elements/Back.jsx';

export default function () {
  const getValue = () => document.querySelector(".input-urls").value;
  const fetchData = async(fetchUrl) => {
    return await fetch(fetchUrl).then(_ => _.json()).then(_ => {
      document.querySelector(".submiter").classList.toggle("hidden");
      document.querySelector(".loadny").classList.toggle("hidden");
      if(_.result.type === "video") {
        return _.result.video1
      } else {
        return _.result.images
      }
    })
      .catch(_ => {
        document.querySelector(".submiter").classList.toggle("hidden");
        document.querySelector(".loadny").classList.toggle("hidden");
        window.navigator.vibrate(500);
        setTimeout(() => window.location.reload(false), 500);
      });
  };

  const HandleSubmit = async(e) => {
    e.preventDefault();
    let tautan = getValue();
    const fetchUrl = `https://tikdldtapi.vercel.app/dl?url=${tautan}`;
    document.querySelector(".submiter").classList.toggle("hidden");
    document.querySelector(".loadny").classList.toggle("hidden");
    const taut = await fetchData(fetchUrl);
    
    const a = document.createElement('a');
    if(typeof(taut) === "object") {
      a.href = "/image";
      document.querySelector(".input-urls").value = "media is image! please use tiktok slide photo downloader";
      window.navigator.vibrate(100);
      setTimeout(() => {
        a.click();
      }, 1500);
    } else {
      document.querySelector(".ress").classList.add("mb-8")
      document.querySelector(".ress").innerHTML = `<div class="flex flex-col items-center justify-center border border-1 border-cyan-300 rounded w-full">
        <video class="w-full rounded" controls>
          <source src="${taut}" type="video/mp4"/>
        </video>
      </div>
      <a href="${taut}" target="_blank" class="text-center text-black w-full rounded bg-sky-400 px-5 pt-2 pb-1 text-1xl font-semibold font-mono mt-5">DOWNLOAD</a>`;
      
      document.querySelector(".input-urls").value = "";
    } 
  };
  return (
    <div className="w-full min-h-screen flex flex-col align-middle bg-slate-900 p-4 selection:bg-sky-400 selection:text-white">
      <Title/>
      <Form submit={HandleSubmit} opsional="form-vid" optional="vid" load={<Button isdisable={true} type="button" opt="loadny flex justify-center hidden"><Loading/></Button>} opt="submiter" opsio="input-urls"/>
      <div className="results flex justify-center w-full">
       <div className="ress w-full max-w-2xl flex flex-col px-8 items-center"></div>
      </div>
      <Back/>
      <Footer/>
    </div>
  )
}