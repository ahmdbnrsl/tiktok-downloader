import Landing from '.././components/Layouts/LandingLayouts.jsx'
import Opsi from '.././components/Layouts/OpsiLayouts.jsx'

export default function() {
  return (
    <div className="w-full min-h-screen flex flex-col align-middle bg-slate-900 p-4 selection:bg-sky-400 selection:text-white">
      <Landing/>
      <Opsi/>
    </div>
  )
}