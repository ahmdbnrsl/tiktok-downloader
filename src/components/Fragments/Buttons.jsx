import Button from '.././Elements/Button.jsx'

export default function() {
  return (
    <div className="w-full flex flex-col align-middle items-center my-8">
      <div className="flex flex-col w-full max-w-4xl px-8 gap-6">
        <Button path="/video">Tiktok Video</Button>
        <Button path="/audio">Tiktok Audio</Button>
        <Button path="/image">Tiktok Slide Photo</Button>
      </div>
    </div>
  )
}