import { ReactNode } from 'react'

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
        </div>
        <div className={`frame-content ${contentClassName}`}>{children}</div>
      </div>
    </div>
  )
}

export default Frame
