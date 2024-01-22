export default function({children, size, lineHeight}) {
  return (
    <div className="mt-8 w-full max-w-4xl px-8">
      <p className={`text-base text-slate-300 ${size} font-mono shadow h-full ${lineHeight}`}>{children}</p>
    </div>
  )
}