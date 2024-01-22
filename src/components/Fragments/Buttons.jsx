import Button from '.././Elements/Button.jsx'

export default function() {
  return (
    <div className="w-full flex flex-col align-middle items-center">
      <div className="flex flex-col mt-8 w-full max-w-4xl px-8 gap-6">
        <Button path="/video">TIKTOK VIDEO</Button>
        <Button path="/image">TIKTOK IMAGE</Button>
        <Button path="/audio">TIKTOK AUDIO</Button>
      </div>
    </div>
  )
}