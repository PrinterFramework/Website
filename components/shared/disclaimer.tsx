import { IoMdAlert } from 'react-icons/io'
import { useState } from 'react'

export interface DisclaimerI {}

export function Disclaimer({}: DisclaimerI) {
  const [dismiss, setDismiss] = useState(false)

  return (
    <div id="disclaimer" className={dismiss ? 'hide' : 'show'}>
      <div className="container">
        <h2>
          <IoMdAlert />
          Please note the project has upgraded to Next 13 in v2.x.x
        </h2>
        <div className="buttons">
          <a className="link" onClick={(e) => setDismiss(true)}>
            Dismiss
          </a>
          <a className="button" href="https://prntr.click">
            View v2 Docs
          </a>
        </div>
      </div>
    </div>
  )
}

export default Disclaimer
