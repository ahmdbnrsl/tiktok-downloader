import Button from '.././Elements/Button.jsx'

export default function() {
  return (
    <div className="w-full flex flex-col align-middle items-center my-8">
      <div className="flex flex-col w-full max-w-4xl px-8 gap-6">
        <Button path="/video">TIKTOK VIDEO</Button>
        <Button path="/audio">TIKTOK AUDIO</Button>
      </div>
    </div>
  )
}
/*<Button path="/image">TIKTOK IMAGE</Button>*/