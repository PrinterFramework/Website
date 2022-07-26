import Head from 'next/head'
import Frame from 'components/index/frame'
import Editor from 'components/shared/editor'
import {
  ReducersSlice,
  ReducersUpdate,
  SliceDecoration
} from '../snippets/slice'

export default function Slice() {
  return (
    <div className="doc-display">
      <Head>
        <title>Printer | Slice</title>
      </Head>

      <h2>Creating Slices</h2>
      <p>
        Slice generation follows a guided and structured pattern which involves
        a reducers.tsx file and a reducers.json file. Reducers.tsx are where
        code is automatically generated to import slice reducers into redux.
        Reducers.json keeps track of all the active reducers in the project. In
        the future, reducers.json may be deprecated and auto generation may be
        based on reducers in the folder.
      </p>
      <Frame frameClassname="doc cli">
        <pre className="bold primary">λ Usage</pre>
        <pre>λ printer slice [name of slice]</pre>
        <pre className="bold primary">λ Example usage</pre>
        <pre>λ printer slice example</pre>
        <pre>λ ...</pre>
        <pre className="bold primary">λ Which creates</pre>
        <pre>λ redux/slice/example.tsx</pre>
        <pre className="bold primary">λ And updates</pre>
        <pre>λ redux/reducers.tsx</pre>
        <pre>λ redux/reducers.json</pre>
      </Frame>
      <p style={{ textAlign: 'center' }}>
        Running this command generates the following code.
      </p>

      <div className="flex-frames">
        <Frame frameClassname="doc code">
          <Editor height={340} code={ReducersUpdate} />
        </Frame>
        <Frame frameClassname="doc code">
          <Editor height={340} code={ReducersSlice} />
        </Frame>
      </div>

      <p>
        One of the highlights of Printer is the Slice injections possible with
        it. In order to leverage Printer inject commands. You need to add
        Printer decorators to your slice. Simply add a command with
        @printer::inject in order to flag a state or action for injection. For
        state, you can define a type to map it to by running
        @printer::inject::type. The following snippet demonstrates each context
        you can leverage an injection for.
      </p>
      <Frame frameClassname="doc code">
        <Editor height={650} code={SliceDecoration} />
      </Frame>
    </div>
  )
}
