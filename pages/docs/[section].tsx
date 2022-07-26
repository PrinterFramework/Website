import Display from 'components/docs/display'
import Nav from 'components/docs/nav'

export interface SectionI {}

export default function Section({}: SectionI) {
  return (
    <div className="container page flex">
      <Nav />
      <Display />
    </div>
  )
}
