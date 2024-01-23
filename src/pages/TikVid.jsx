import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';
import Title from '.././components/Layouts/VideoTitleLayouts.jsx'
import Footer from '.././components/Layouts/Footer.jsx'
import Form from '.././components/Layouts/Form.jsx'
import Button from '.././components/Elements/Submit.jsx'
import Loading from '.././components/Elements/Loading.jsx'

async function tiktokdl (url) {
  const gettoken = await axios.get("https://tikdown.org/id");
  const $ = cheerio.load(gettoken.data);
  const token = $("#download-form > input[type=hidden]:nth-child(2)").attr(
        "value"
    );
  const param = {
        url: url,
        _token: token,
    };
  const {
      data
  } = await axios.request("https://tikdown.org/getAjax?", {
        method: "post",
        data: new URLSearchParams(Object.entries(param)),
        headers: {
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "user-agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36",
      },
  });
  var getdata = cheerio.load(data.html);
  if (data.status) {
    return {
        status: true,
        thumbnail: getdata("img").attr("src"),
        video: getdata("div.download-links > div:nth-child(1) > a").attr("href"),
        audio: getdata("div.download-links > div:nth-child(2) > a").attr("href"),
        };
    } else
     return {
       status: false,
   };
}
  

export default function () {
  const HandleSubmit = (e) => {
    e.preventDefault();
    document.querySelector(".loadny").classList.toggle('hidden');
    document.querySelector(".submiter").classList.toggle('hidden');
    const [links, setLinks] = useState('')
    useEffect(() => {
      const fetchData = async() => {
        const { thumbnail, video, audio } = await tiktokdl("https://vt.tiktok.com/ZSNEKR1sC/");
        document.querySelector(".form-vid").innerHTML = `<h1 class="text-white">${video}</h1>`
      }
    },[])
  }
  return (
    <div className="w-full min-h-screen flex flex-col align-middle bg-slate-900 p-4 selection:bg-sky-400 selection:text-white">
      <Title/>
      <Form submit={HandleSubmit} opsional="form-vid" optional="vid" load={<Button isdisable={true} type="button" opt="loadny flex justify-center hidden"><Loading/></Button>} opt="submiter"/>
      <Footer/>
    </div>
  )
}