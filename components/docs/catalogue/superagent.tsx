import Head from 'next/head'
import Frame from 'components/index/frame'
import Editor from 'components/shared/editor'

export interface SuperagentI {}

export function Superagent({}: SuperagentI) {
  return (
    <div className="doc-display">
      <Head>
        <title>Printer | Superagent Flows</title>
      </Head>

      <h2>Creating Superagent Flows</h2>
      <p>
        The superagent command automatically injects a superagent request into a
        component. You can specify between POST, PATCH, PUT, DELETE, GET for
        requests.
      </p>
      <Frame frameClassname="doc cli">
        <pre className="bold primary">λ Usage</pre>
        <pre>λ printer superagent [type] [path]</pre>
        <pre className="bold primary">λ Example Usage</pre>
        <pre>λ printer superagent post components/test</pre>
        <pre className="bold primary">λ This command then updates</pre>
        <pre>λ components/test.tsx</pre>
        <pre>λ ...</pre>
      </Frame>

      <p style={{ textAlign: 'center' }}>
        This is what components/example.tsx looks like before the superagent
        injection.
      </p>

      <Frame frameClassname="doc code">
        <Editor
          height={240}
          code={`export interface ExampleI {}

export function Example({}: ExampleI) {
  return (
    <div>
      <h2>Component Example</h2>
    </div>
  )
}

export default Example
`}
        />
      </Frame>

      <p style={{ textAlign: 'center' }}>
        This is what components/example.tsx looks like after the superagent
        injection.
      </p>

      <Frame frameClassname="doc code">
        <Editor
          height={740}
          code={`import { post } from 'superagent'
import { useEffect } from 'react'
import { useState } from 'react'
export interface ExampleI {}

export function Example({}: ExampleI) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  async function postRequest() {
      setLoading(true)
      setError(false)
      try {
          const payload = await post('/api/url')
      } catch (error) {
          console.error(error)
          setError(true)
          setErrorMessage('Something went wrong...')
      }
      setLoading(false)
  }

  useEffect(() => {
      postRequest()
  }, [loading])

  return (
    <div>
      <h2>Component Example</h2>
    </div>
  )
}

export default Example

`}
        />
      </Frame>
    </div>
  )
}

export default Superagent
