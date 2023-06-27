import Head from 'next/head'
import Frame from 'components/index/frame'
import Editor from 'components/shared/editor'

export interface LoadingI {}

export function Loading({}: LoadingI) {
  return (
    <div className="doc-display">
      <Head>
        <title>Printer | Loading States</title>
      </Head>
      <h2>Creating Page Loading States</h2>

      <p>
        The Loading command creates a new Loading State Component. Review the
        Next Documentation on{' '}
        <a
          className="link"
          href="https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming"
          target="loading"
        >
          Loading UI and Streaming
        </a>{' '}
        to learn more.
      </p>
      <Frame frameClassname="doc cli">
        <pre className="bold primary">λ Usage</pre>
        <pre>λ printer loading [path]</pre>
        <pre className="bold primary">λ Example Usage</pre>
        <pre>λ printer loading example</pre>
        <pre className="bold primary">λ This command then creates</pre>
        <pre>λ app/example/loading.tsx</pre>
        <pre>λ ...</pre>
        <pre>λ printer loading multi/folder/example</pre>
        <pre className="bold primary">λ This command then creates</pre>
        <pre>λ app/multi/folder/example/loading.tsx</pre>
      </Frame>

      <p style={{ textAlign: 'center' }}>
        This then generates in the file app/example/loading.tsx the following
        code.
      </p>
      <Frame frameClassname="doc code">
        <Editor
          height={280}
          code={`export default function LoadingComponent() {
  return (
    <div className="container page center loading-page">
      <p>Please wait... Loading...</p>
    </div>
  )
}
`}
        />
      </Frame>
    </div>
  )
}

export default Loading
