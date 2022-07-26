import { useState, useEffect } from 'react'
import { FiGithub, FiBook } from 'react-icons/fi'
import Link from 'next/link'
import Frame from 'components/index/frame'
import Typewriter from 'react-typing-effect'
import {
  project,
  componentLogin,
  sliceLogin,
  injectLogin,
  pageLogin,
  crudUser
} from 'snippets'

export interface TitleI {}

export const textPrompts = [
  'printer new project',
  'printer component components/login',
  'printer slice login',
  'printer inject login components/login',
  'printer page login',
  'printer crud user'
]

export function Title({}: TitleI) {
  const [index, setIndex] = useState(0)
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    if (finished === false) {
      const timeout = setTimeout(() => {
        if (index >= textPrompts.length - 1) {
          setIndex(0)
          setFinished(true)
        } else {
          setIndex(index + 1)
        }

        const frameBody = document.querySelector('div.title-content')
        frameBody.scrollTop = frameBody.scrollHeight
      }, textPrompts[index].length * 51 + 5000 + 2500)

      return () => clearTimeout(timeout)
    }
  }, [index])

  function textValue(index: number) {
    switch (index) {
      case 0:
        return project
      case 1:
        return componentLogin
      case 2:
        return sliceLogin
      case 3:
        return injectLogin
      case 4:
        return pageLogin
      case 5:
        return crudUser
    }
  }

  return (
    <section className="title">
      <div className="copy">
        <img src="/assets/image/printer.png" alt="Printer Logo" />
        <div className="text">
          <h1>Printer</h1>
          <p>Automation Tooling for Next, Redux and Prisma</p>
          <div className="buttons">
            <a
              className="button"
              href="https://github.com/PrinterFramework"
              target="github"
            >
              <FiGithub className="i" />
              Github
            </a>
            <Link href="/docs/getting-started">
              <a className="button">
                <FiBook className="i" />
                Docs
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Frame contentClassName="title-content" frameClassname="title-frame">
        {Array(6)
          .fill(0)
          .map((item, i) => (
            <textarea
              key={i}
              style={{
                display: i >= index ? (finished ? 'block' : 'none') : 'block'
              }}
              defaultValue={textValue(i)}
              rows={textValue(i).split('\n').length}
            />
          ))}

        <pre>
          <span className="lamda">λ</span>
          {finished ? (
            <div className="cursor" />
          ) : (
            <Typewriter
              cursorRenderer={(cursor) => <div className="cursor" />}
              text={textPrompts}
              speed={50}
              eraseSpeed={1}
            />
          )}
        </pre>
      </Frame>
    </section>
  )
}

export default Title
