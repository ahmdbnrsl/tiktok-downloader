export default function({children}) {
  return (
    <>
      <img width="100" src="/image/icon.png" className="mt-8"/>
      <h1 className="flex mt-5 text-center text-sky-400 text-4xl font-bold font-mono shadow">{children}</h1>
    </>
  )
}