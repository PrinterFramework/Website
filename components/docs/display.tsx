import { useRouter } from 'next/router'
import { SectionType } from 'components/docs/section'
import GettingStarted from './catalogue/getting-started'
import SuggestedStructure from './catalogue/suggested-structure'
import FolderOverview from './catalogue/folder-overview'
import Config from './catalogue/config'
import NewProject from './catalogue/new-project'
import Component from './catalogue/component'
import Type from './catalogue/type'
import Slice from './catalogue/slice'
import Page from './catalogue/page'
import Api from './catalogue/api'
import CRUD from './catalogue/crud'
import Inject from './catalogue/inject'
import Scss from './catalogue/scss'
import Superagent from './catalogue/superagent'

export interface DisplayI { }

export function Display({ }: DisplayI) {
  const router = useRouter()
  const section = router.query.section as SectionType

  switch (section) {
    case 'getting-started':
      return <GettingStarted />
    case 'suggested-structure':
      return <SuggestedStructure />
    case 'folder-overview':
      return <FolderOverview />
    case 'config':
      return <Config />
    case 'new-project':
      return <NewProject />
    case 'component':
      return <Component />
    case 'type':
      return <Type />
    case 'slice':
      return <Slice />
    case 'page':
      return <Page />
    case 'api':
      return <Api />
    case 'crud':
      return <CRUD />
    case 'inject':
      return <Inject />
    case 'scss':
      return <Scss />
    case 'superagent':
      return <Superagent />
  }

  return <div className="doc-display" />
}

export default Display
