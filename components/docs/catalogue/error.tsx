import Head from 'next/head'
import Frame from 'components/index/frame'
import Editor from 'components/shared/editor'

export interface ErrorI {}

export function Error({}: ErrorI) {
  return (
    <div className="doc-display">
      <Head>
        <title>Printer | Error States</title>
      </Head>
      <h2>Creating Error States</h2>

      <p>
        The Error command creates a new Error State Component. Review the Next
        Documentation on{' '}
        <a
          className="link"
          href="https://nextjs.org/docs/app/building-your-application/routing/error-handling"
          target="error"
        >
          Error Handling
        </a>{' '}
        to learn more.
      </p>
      <Frame frameClassname="doc cli">
        <pre className="bold primary">λ Usage</pre>
        <pre>λ printer error [path]</pre>
        <pre className="bold primary">λ Example Usage</pre>
        <pre>λ printer error example</pre>
        <pre className="bold primary">λ This command then creates</pre>
        <pre>λ app/example/error.tsx</pre>
        <pre>λ ...</pre>
        <pre>λ printer error multi/folder/example</pre>
        <pre className="bold primary">λ This command then creates</pre>
        <pre>λ app/multi/folder/example/error.tsx</pre>
      </Frame>

      <p style={{ textAlign: 'center' }}>
        This then generates in the file app/example/error.tsx the following
        code.
      </p>
      <Frame frameClassname="doc code">
        <Editor
          height={480}
          code={`'use client'

import { useEffect } from 'react'

export interface ErrorI {
  error: Error
  reset: () => void
}

export default function ErrorComponent({ error, reset }: ErrorI) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="error-page">
      <h2>Something Went Wrong!</h2>
      <a className="button" onClick={e => reset()}>
        Reload Page
      </a>
    </div>
  )
}
`}
        />
      </Frame>
    </div>
  )
}

export default Error
