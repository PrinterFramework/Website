import Editor from 'components/shared/editor'
import { AiFillPlayCircle } from 'react-icons/ai'
import { Sim1Default, Sim1Terminal, Sim1Updated } from 'snippets'
import Frame from 'components/index/frame'
import { BiBookBookmark } from 'react-icons/bi'
import { RiListCheck2 } from 'react-icons/ri'
import Link from 'next/link'
import Typewriter from 'react-typing-effect'
import { useState, useEffect } from 'react'

export interface Sim1I {}

export const SimText = ['printer inject login components/login']

export function Sim1({}: Sim1I) {
  const [start, setStart] = useState(false)
  const [code, setCode] = useState(false)

  useEffect(() => {
    if (start) {
      const timeout = setTimeout(() => {
        setCode(true)
      }, 5000)

      return () => clearTimeout(timeout)
    }
  }, [start])

  return (
    <section className="sim">
      <div className="container">
        <h2>Automatically Inject Redux State and Actions</h2>
        <p>Leverage Printer decorators to make Slice management even easier.</p>

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
          <Frame
            contentClassName="sim-terminal sim-terminal-1"
            frameClassname="small"
          >
            <pre>
              {code ? (
                <>
                  <span>{Sim1Terminal}</span>
                  <br />
                  <br />
                </>
              ) : null}
              <span className="lamda">λ</span>
              {start && !code ? (
                <Typewriter
                  cursorRenderer={(cursor) => null}
                  text={SimText}
                  speed={50}
                  typingDelay={1}
                  eraseDelay={1000 * 60 * 60 * 60 * 24}
                />
              ) : null}
              <div className="cursor" />
            </pre>
            <a
              className="button"
              style={{ opacity: start ? 0 : 1 }}
              onClick={(e) => setStart(true)}
            >
              <AiFillPlayCircle className="icon" />
              Run Simulaton
            </a>
          </Frame>
          <Frame contentClassName="sim-code sim-code-1" frameClassname="large">
            <Editor code={code ? Sim1Updated : Sim1Default} height={420} />
          </Frame>
        </div>
      </div>
    </section>
  )
}

export default Sim1
