import Nav from 'components/docs/nav'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export interface DocsI {}

export default function Docs({}: DocsI) {
  const router = useRouter()

  useEffect(() => {
    router.push('/docs/getting-started')
  }, [router])

  return (
    <div className="container page">
      <Nav />
    </div>
  )
}
