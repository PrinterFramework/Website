import Brand from 'components/shared/brand'
import Link from 'next/link'
import { BiBookBookmark } from 'react-icons/bi'
import { RiListCheck2 } from 'react-icons/ri'
import { FaGithubAlt } from 'react-icons/fa'

export interface HeaderI {}

export function Header({}: HeaderI) {
  return (
    <header id="header">
      <div className="container">
        <Brand />
        <div className="menu">
          <Link href="/docs/getting-started">
            <a className="item">
              <BiBookBookmark className="icon" />
              <span>Docs</span>
            </a>
          </Link>
          <Link href="/tour">
            <a className="item">
              <RiListCheck2 className="icon" />
              <span>Tour</span>
            </a>
          </Link>
          <a
            className="item"
            href="https://github.com/PrinterFramework"
            target="github"
          >
            <FaGithubAlt className="icon" />
            <span>Github</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
