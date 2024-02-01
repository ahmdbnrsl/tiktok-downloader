import { Link } from 'react-router-dom'
export default () => {
  return (
    <div className="w-full min-h-screen bg-slate-900 flex flex-col justify-center align-middle items-center">
      <h1 className="text-sky-400 font-mono font-bold text-3xl text-center">404 Not Found!</h1>
      <Link to="/" className="mt-5 text-center text-cyan-300 text-md font-mono">&laquo; Back to home</Link>
    </div>
  )
}