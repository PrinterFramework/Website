import { ReactNode, useMemo } from 'react'
import { AiOutlinePrinter, AiOutlineStar } from 'react-icons/ai'

function generateId(length: number): string {
  let result = ''
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  let counter = 0
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    counter += 1
  }
  return result
}

export interface FrameI {
  children?: ReactNode
  frameClassname?: string
  contentClassName?: string
  height?: string | number
}

export function Frame({
  children,
  contentClassName,
  frameClassname,
  height
}: FrameI) {
  const id = useMemo(() => generateId(16), [generateId])

  async function copyClipboard(text: string) {
    await navigator.clipboard.writeText(text)
  }

  return (
    <div className={`frame ${frameClassname}`}>
      <div className="frame-body" style={{ height }}>
        <div className="frame-top">
          <div className="frame-button red" />
          <div className="frame-button yellow" />
          <div className="frame-button green" />

          <a
            className="frame-plus"
            onClick={(e) => {
              const text = document.querySelector(`div#${id}`).textContent
              console.log(text)
              copyClipboard(text)
            }}
          >
            <AiOutlinePrinter />
            <div className="frame-tooltip">Copy Contents</div>
          </a>
          <a
            className="frame-square"
            onClick={(e) => copyClipboard(window.location.href)}
          >
            <AiOutlineStar />
            <div className="frame-tooltip">Copy Link</div>
          </a>
        </div>
        <div className={`frame-content ${contentClassName}`} id={id}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Frame
