import Head from 'next/head'
import Frame from 'components/index/frame'
import Editor from 'components/shared/editor'

export default function Page() {
  return (
    <div className="doc-display">
      <Head>
        <title>Printer | Page</title>
      </Head>

      <h2>Creating Pages</h2>

      <p>
        The Page command creates a new Page Component in a similar way that the
        Component command does. You can inject slices into pages just like you
        would a component.
      </p>
      <Frame frameClassname="doc cli">
        <pre className="bold primary">λ Usage</pre>
        <pre>λ printer page [path]</pre>
        <pre className="bold primary">λ Example Usage</pre>
        <pre>λ printer page example</pre>
        <pre className="bold primary">λ This command then creates</pre>
        <pre>λ pages/example.tsx</pre>
        <pre>λ ...</pre>
        <pre>λ printer page multi/folder/example</pre>
        <pre className="bold primary">λ This command then creates</pre>
        <pre>λ pages/multi/folder/example.tsx</pre>
      </Frame>

      <p style={{ textAlign: 'center' }}>
        This then generates in the file pages/example.tsx the following code.
      </p>
      <Frame frameClassname="doc code">
        <Editor
          height={180}
          code={`export interface ExampleI {}

export default function Example({}: ExampleI) {
  return <h1>Page Example</h1>
}
`}
        />
      </Frame>

      <p>
        Now let&apos;s say you want to inject a slice into a page. You can run
        the inject command on a page just like you would a component.
      </p>
      <Frame frameClassname="doc cli">
        <pre>λ printer inject example pages/example</pre>
        <pre>λ ...</pre>
        <pre className="bold primary">
          λ This command then injects redux state into
        </pre>
        <pre>λ pages/example.tsx</pre>
      </Frame>

      <p style={{ textAlign: 'center' }}>
        This then updates the file in pages/example.tsx with the following code.
      </p>
      <Frame frameClassname="doc code">
        <Editor
          height={280}
          code={`import ExampleType from 'types/example'
import { setExampleData } from 'redux/slice/example'
import { useSelector, useDispatch } from 'react-redux'

export interface ExampleI {}

export default function Example({}: ExampleI) {
  const dispatch = useDispatch()
  const exampleData = useSelector((state: { example: { exampleData: ExampleType } }) => ({ ...state.example.exampleData }))

  return <h1>Page Example</h1>
}`}
        />
      </Frame>
    </div>
  )
}
