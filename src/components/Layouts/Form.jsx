import Input from '.././Elements/Input.jsx'
import Button from '.././Elements/Submit.jsx'
import {Link} from 'react-router-dom'

export default function ({submit, opsional, optional, load, opt}) {
  return (
    <div className={`w-full flex flex-col align-middle items-center px-8 mb-8 mt-12 ${optional}`}>
      <form className={`w-full flex flex-col align-middle items-center max-w-2xl ${opsional}`} onSubmit={submit}>
        <Input type="url">type or paste your url here...</Input>
        <Button type="submit" opt={opt}>DOWNLOAD</Button>
        {load}
      </form>
    </div>
  )
}