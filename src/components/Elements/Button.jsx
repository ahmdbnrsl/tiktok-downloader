import { Link } from 'react-router-dom'
export default function({children, path}) {
  return (
    <Link className="text-center text-black w-full rounded bg-sky-400 px-5 pt-2 pb-1 text-1xl font-semibold font-mono" to={path}>
      {children}
    </Link>
  )
}