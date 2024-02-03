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
    const fetchUrl = `https://downtik.netlify.app/dl?url=${tautan}`;
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
      a.href = taut;
      a.target = "_blank";
      a.click();
      document.querySelector(".input-urls").value = "";
    } 
  };
  return (
    <div className="w-full min-h-screen flex flex-col align-middle bg-slate-900 p-4 selection:bg-sky-400 selection:text-white">
      <Title/>
      <Form submit={HandleSubmit} opsional="form-vid" optional="vid" load={<Button isdisable={true} type="button" opt="loadny flex justify-center hidden"><Loading/></Button>} opt="submiter" opsio="input-urls"/>
      <Back/>
      <Footer/>
    </div>
  )
}