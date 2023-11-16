import { ReactNode } from 'react'
import { AiOutlinePrinter } from 'react-icons/ai'
import { HiOutlineSquare2Stack } from 'react-icons/hi2'

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
  return (
    <div className={`frame ${frameClassname}`}>
      <div className="frame-body" style={{ height }}>
        <div className="frame-top">
          <div className="frame-button red" />
          <div className="frame-button yellow" />
          <div className="frame-button green" />

          <a className="frame-plus">
            <AiOutlinePrinter />
          </a>
          <a className="frame-square">
            <HiOutlineSquare2Stack />
          </a>
        </div>
        <div className={`frame-content ${contentClassName}`}>{children}</div>
      </div>
    </div>
  )
}

export default Frame
