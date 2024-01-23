export default function ({type, children, isdisable, opt}) {
  return (
    <button type={type} className={`text-center text-white w-full rounded bg-sky-400 px-5 pt-2 pb-1 text-1xl font-semibold font-mono mt-5 ${opt}`} disabled={isdisable}>{children}</button>
  )
}