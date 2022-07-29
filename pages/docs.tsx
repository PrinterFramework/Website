import Nav from 'components/docs/nav'

export interface DocsI {}

export default function Docs({}: DocsI) {
  return (
    <div className="container page">
      <Nav />
    </div>
  )
}

export function getServerSideProps({ req }) {
  return {
    redirect: {
      permanent: false,
      destination: '/docs/getting-started'
    }
  }
}
