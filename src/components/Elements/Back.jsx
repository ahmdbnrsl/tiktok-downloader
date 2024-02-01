import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="w-full flex justify-center">
      <Link to="/" className="px-8 w-full max-w-4xl text-cyan-300 text-sm font-mono">&laquo; Back to home</Link>
    </div>
  )
}