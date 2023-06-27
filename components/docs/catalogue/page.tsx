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
        <pre>λ app/example/page.tsx</pre>
        <pre>λ ...</pre>
        <pre>λ printer page multi/folder/example</pre>
        <pre className="bold primary">λ This command then creates</pre>
        <pre>λ app/multi/folder/example/page.tsx</pre>
      </Frame>

      <p style={{ textAlign: 'center' }}>
        This then generates in the file app/example/page.tsx the following code.
      </p>
      <Frame frameClassname="doc code">
        <Editor
          height={280}
          code={`'use client'

export interface ExamplePageI {

}

export default function ExamplePage({}: ExamplePageI) {
  return (
    <div className="container page">
      <p>Example Page</p>
    </div>
  )
}
`}
        />
      </Frame>

      <p>
        Now let&apos;s say you want to inject a slice into a page. You can run
        the inject command on a page just like you would a component.
      </p>
      <Frame frameClassname="doc cli">
        <pre>λ printer inject counter app/example/page</pre>
        <pre>λ ...</pre>
        <pre className="bold primary">
          λ This command then injects redux state into
        </pre>
        <pre>λ app/example/page.tsx</pre>
      </Frame>

      <p style={{ textAlign: 'center' }}>
        This then updates the file in app/example/page.tsx with the following
        code.
      </p>
      <Frame frameClassname="doc code">
        <Editor
          height={420}
          code={`'use client'
import CounterType from 'types/counter'
import { reset, increment, decrement } from 'redux/slice/counter'
import { useAppSelector, useAppDispatch } from 'redux/hooks'

export interface ExamplePageI {

}

export default function ExamplePage({}: ExamplePageI) {
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => ({ ...state.counter.data }))

  return (
    <div className="container page">
      <p>Example Page</p>
    </div>
  )
}
`}
        />
      </Frame>
    </div>
  )
}
