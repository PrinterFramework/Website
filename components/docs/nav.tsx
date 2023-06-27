import Link from 'next/link'
import { useRouter } from 'next/router'
import { SectionType } from 'components/docs/section'

export interface NavI {}

export function Nav({}: NavI) {
  const router = useRouter()
  const section = router.query.section as SectionType

  return (
    <div className="doc-nav">
      <div className="doc-nav-panel">
        <h3>
          <img src="/assets/image/printer.png" />
          Docs
        </h3>
        <h4>Introduction</h4>
        <div className="links">
          <Link href="/docs/getting-started">
            <a
              className={`link ${
                section === 'getting-started' ? 'active' : ''
              }`}
            >
              1. Getting Started
            </a>
          </Link>
          <Link href="/docs/suggested-structure">
            <a
              className={`link ${
                section === 'suggested-structure' ? 'active' : ''
              }`}
            >
              2. Suggested Structure
            </a>
          </Link>
          <Link href="/docs/folder-overview">
            <a
              className={`link ${
                section === 'folder-overview' ? 'active' : ''
              }`}
            >
              3. Folder Overview
            </a>
          </Link>
          <Link href="/docs/config">
            <a className={`link ${section === 'config' ? 'active' : ''}`}>
              4. Printer Config
            </a>
          </Link>
        </div>
        <h4>Macros</h4>
        <div className="links">
          <Link href="/docs/new-project">
            <a className={`link ${section === 'new-project' ? 'active' : ''}`}>
              New Project
            </a>
          </Link>
          <Link href="/docs/component">
            <a className={`link ${section === 'component' ? 'active' : ''}`}>
              Component
            </a>
          </Link>
          <Link href="/docs/type">
            <a className={`link ${section === 'type' ? 'active' : ''}`}>Type</a>
          </Link>
          <Link href="/docs/page">
            <a className={`link ${section === 'page' ? 'active' : ''}`}>Page</a>
          </Link>
          <Link href="/docs/layout">
            <a className={`link ${section === 'layout' ? 'active' : ''}`}>
              Layout
            </a>
          </Link>
          <Link href="/docs/loading">
            <a className={`link ${section === 'loading' ? 'active' : ''}`}>
              Loading
            </a>
          </Link>
          <Link href="/docs/error">
            <a className={`link ${section === 'error' ? 'active' : ''}`}>
              Error
            </a>
          </Link>
          <Link href="/docs/api">
            <a className={`link ${section === 'api' ? 'active' : ''}`}>API</a>
          </Link>
          <Link href="/docs/slice">
            <a className={`link ${section === 'slice' ? 'active' : ''}`}>
              Slice
            </a>
          </Link>
          <Link href="/docs/scss">
            <a className={`link ${section === 'scss' ? 'active' : ''}`}>SCSS</a>
          </Link>
        </div>
        <h4>Injections</h4>
        <div className="links">
          <Link href="/docs/inject">
            <a className={`link ${section === 'inject' ? 'active' : ''}`}>
              Slices
            </a>
          </Link>
          <Link href="/docs/superagent">
            <a className={`link ${section === 'superagent' ? 'active' : ''}`}>
              Superagent
            </a>
          </Link>
        </div>
        <h4>Prisma</h4>
        <div className="links">
          <Link href="/docs/crud">
            <a className={`link ${section === 'crud' ? 'active' : ''}`}>CRUD</a>
          </Link>
          <Link href="/docs/prisma">
            <a className={`link ${section === 'prisma' ? 'active' : ''}`}>
              Type Generation
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Nav
