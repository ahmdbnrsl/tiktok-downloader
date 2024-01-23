import Title from '.././components/Layouts/VideoTitleLayouts.jsx'
import Footer from '.././components/Layouts/Footer.jsx'
import Form from '.././components/Layouts/Form.jsx'

export default function () {
  return (
    <div className="w-full min-h-screen flex flex-col align-middle bg-slate-900 p-4 selection:bg-sky-400 selection:text-white">
      <Title/>
      <Form/>
      <Footer/>
    </div>
  )
}