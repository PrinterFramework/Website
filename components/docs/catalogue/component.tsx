import Head from 'next/head'
import Frame from 'components/index/frame'
import Editor from 'components/shared/editor'
import { CreateComponent, PrinterConfig3 } from 'snippets'

export default function Component() {
  return (
    <div className="doc-display">
      <Head>
        <title>Printer | Component</title>
      </Head>

      <h2>Creating Components</h2>

      <p>
        The component command creates a simple easy to use functional component.
        It places a div and h2 in there for you, this is for convenience
        purposes when developing.
      </p>

      <Frame frameClassname="doc cli">
        <pre className="bold primary">λ Usage</pre>
        <pre>λ printer component [path]</pre>
        <pre className="bold primary">λ Example Usage</pre>
        <pre>λ printer component components/example</pre>
        <pre className="bold primary">
          λ Creates a new component in components/example
        </pre>
        <pre>λ ...</pre>
        <pre>λ printer component components/multi/folder/example</pre>
        <pre className="bold primary">
          λ Creates a new component in components/multi/folder/example
        </pre>
      </Frame>

      <Frame frameClassname="doc code">
        <Editor code={CreateComponent} height={240} />
      </Frame>
    </div>
  )
}
