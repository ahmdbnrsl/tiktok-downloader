import React, { useState, useEffect, Component } from 'react';
import Title from '.././components/Layouts/AudioTitleLayouts.jsx'
import Footer from '.././components/Layouts/Footer.jsx'
import Form from '.././components/Layouts/Form.jsx'
import Button from '.././components/Elements/Submit.jsx';
import Loading from '.././components/Elements/Loading.jsx';
import Back from '.././components/Elements/Back.jsx'

export default function () {
  const getValue = () => document.querySelector(".input-urls").value;
  const fetchData = async(fetchUrl) => {
    return await fetch(fetchUrl).then(_ => _.json()).then(_ => {
      const urls = _[0].audio;
      document.querySelector(".submiter").classList.toggle("hidden");
      document.querySelector(".loadny").classList.toggle("hidden");
      return urls
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
    let tautan = getValue()
    const fetchUrl = `https://downtik.netlify.app/download?url=${tautan}`;
    document.querySelector(".submiter").classList.toggle("hidden");
    document.querySelector(".loadny").classList.toggle("hidden");
    const taut = await fetchData(fetchUrl)
    const a = document.createElement('a');a.href = taut;a.target = "_blank";a.click();document.querySelector(".input-urls").value = "";
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