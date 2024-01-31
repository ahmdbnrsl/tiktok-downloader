export default function({type, name, children, opsio, change}) {
  return (
    <input type={type} name={name} className={`w-full font-mono text-1xl text-cyan-300 px-3 pb-1 bg-slate-900 border border-b-2 border-x-0 border-t-0 border-slate-400 focus:border-b-2 focus:border-cyan-300 focus:outline-0 active:border-b-2 active:outline-0 active:border-cyan-300 placeholder:text-sm placeholder:text-slate-400 ${opsio}`} placeholder={children} onChange={change} required/>
  )
}