import Title from '.././Elements/Tittle.jsx'
import SubTitle from '.././Elements/SubTitle.jsx'
import Paragraph from '.././Elements/Paragraph.jsx'
import Strong from '.././Elements/StrongText.jsx'
import SubHeading from '.././Elements/SubHeading.jsx'

export default function() {
  return (
    <div className="w-full flex flex-col align-middle items-center">
      <Title>Down Tik</Title>
      <SubTitle>tiktok video, image, audio downloader</SubTitle>
      <SubHeading>TIKTOK IMAGE DOWNLOADER</SubHeading>
      <Paragraph size="text-sm">This is a feature for downloading media in the form of TikTok slide photo, It's quite easy to use, you just need to paste the URL of the TikTok video that you copied, then press the download button and wait for the results.</Paragraph>
    </div>
  )
}