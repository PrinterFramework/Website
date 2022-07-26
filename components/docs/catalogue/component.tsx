import Head from 'next/head'
import Frame from 'components/index/frame'
import Editor from 'components/shared/editor'
import { CreateComponent, PrinterConfig3 } from 'snippets'
import {
  ComponentFile,
  IndexFile,
  StyleFile,
  TestFile
} from '../snippets/component'

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

      <div className="flex-frames">
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

      <p>
        If you do end up changing the default Printer configuration. You can
        generate component folders with custom styled-component templates and a
        test file. In the future Printer will support more sophisticated jest
        fixtures.
      </p>
      <div className="flex-frames">
        <Frame frameClassname="doc code">
          <Editor code={PrinterConfig3} height={265} />
        </Frame>
        <Frame frameClassname="doc cli" height={300}>
          <pre className="bold primary">
            λ Create a new component in components/example
          </pre>
          <pre>λ printer component components/example</pre>
          <pre>λ ...</pre>
          <pre>λ components/example/index.tsx</pre>
          <pre>λ components/example/example.component.tsx</pre>
          <pre>λ components/example/example.style.tsx</pre>
          <pre>λ components/example/example.test.tsx</pre>
        </Frame>
      </div>

      <p style={{ textAlign: 'center' }}>
        And here is what the results would be from running the component
        command.
      </p>
      <div className="flex-frames">
        <Frame frameClassname="doc code">
          <Editor code={ComponentFile} height={290} />
        </Frame>
        <Frame frameClassname="doc code">
          <Editor code={StyleFile} height={290} />
        </Frame>
        <Frame frameClassname="doc code">
          <Editor code={TestFile} height={120} />
        </Frame>
        <Frame frameClassname="doc code">
          <Editor code={IndexFile} height={120} />
        </Frame>
      </div>
    </div>
  )
}
