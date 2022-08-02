import Head from 'next/head'
import Frame from 'components/index/frame'
import Editor from 'components/shared/editor'
import { ExampleInjection, SliceDecoration } from '../snippets/slice'

export default function Inject() {
  return (
    <div className="doc-display">
      <Head>
        <title>Printer | Inject</title>
      </Head>

      <h2>Injecting Slices into Components</h2>

      <p>
        Injections are designed to automatically map state and actions to a
        component with a simple command. Injections map printer decorators in
        slices to Components with a command. Therefore, before being able to
        benefit from Printer injections, you will need to setup all the
        decorators in your Slice first.
      </p>

      <Frame frameClassname="doc cli">
        <pre className="bold primary">λ Usage</pre>
        <pre>λ printer inject [slice name] [component or page path]</pre>
        <pre className="bold primary">
          λ This command injects the example slice into the component
        </pre>
        <pre>λ printer inject example pages/example</pre>
        <pre>λ ...</pre>
      </Frame>

      <p>
        You can optionally choose not to inject state or actions.
        Add the --no-action or --no-state flags to choose not to add state or actions.
      </p>

        <Frame frameClassname="doc cli">
        <pre className="bold primary">λ Example Usage</pre>
        <pre>λ printer inject example pages/example --no-state</pre>
        <pre>λ ... Injects only actions</pre>
        <pre>λ printer inject example pages/example --no-action</pre>
        <pre>λ ... Injects only state</pre>
        <pre className="bold primary">λ Short hand usage</pre>
        <pre>λ printer inject example pages/example -s</pre>
        <pre>λ printer inject example pages/example -a</pre>
      </Frame>

      <p>
        In order to leverage Printer injections. Let&apos;s take a look at the
        same file from the Slice page. There are two different types of Printer
        decorations. The first is a simple @printer::inject which injects the
        state or action implicitly. The second is a Printer decoration with
        types mapped to the state.
      </p>

      <Frame frameClassname="doc code">
        <Editor height={680} code={SliceDecoration} />
      </Frame>

      <p style={{ textAlign: 'center' }}>
        With the example slice properly setup for Printer injections. You can
        now run the injection command.
      </p>

      <Frame frameClassname="doc cli">
        <pre>λ printer inject example pages/example</pre>
        <pre>λ ...</pre>
      </Frame>

      <p style={{ textAlign: 'center' }}>
        This will update the example page to the following.
      </p>

      <Frame frameClassname="doc code">
        <Editor height={300} code={ExampleInjection} />
      </Frame>
    </div>
  )
}
