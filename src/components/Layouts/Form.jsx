import Input from '.././Elements/Input.jsx'
import Button from '.././Elements/Submit.jsx'
import {Link} from 'react-router-dom'

export default function () {
  return (
    <div className="w-full flex flex-col align-middle items-center px-8 mb-8 mt-12">
      <form className="w-full flex flex-col align-middle items-center max-w-2xl">
        <Input type="url">type or paste your url here...</Input>
        <Button type="submit">DOWNLOAD</Button>
      </form>
    </div>
  )
}