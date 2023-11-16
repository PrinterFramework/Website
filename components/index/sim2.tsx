import Editor from 'components/shared/editor'
import { Sim2Frame1, Sim2Frame2 } from 'snippets'
import Frame from './frame'
import { BiBookBookmark } from 'react-icons/bi'
import { RiListCheck2 } from 'react-icons/ri'
import Link from 'next/link'

export interface Sim2I {}

export function Sim2({}: Sim2I) {
  return (
    <section className="sim">
      <div className="container">
        <h2>Generate Components, Pages, Slices and APIs Instantly</h2>
        <p>
          Printer offers a novel way to automatically generate core scaffolding.
        </p>
        <div className="buttons">
          <Link href="/docs/getting-started">
            <a className="button">
              <BiBookBookmark className="icon" />
              View Docs
            </a>
          </Link>
          <Link href="/tour">
            <a className="button">
              <RiListCheck2 className="icon" />
              Take The tour
            </a>
          </Link>
        </div>
        <div className="multi-frame">
          <Frame contentClassName="sim-code">
            <Editor code={Sim2Frame1} height="100%" />
          </Frame>
          <Frame contentClassName="sim-code">
            <Editor code={Sim2Frame2} height="100%" />
          </Frame>
        </div>
      </div>
    </section>
  )
}

export default Sim2
