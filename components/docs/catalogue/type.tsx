import Head from 'next/head'
import Frame from 'components/index/frame'
import Editor from 'components/shared/editor'

export default function Type() {
  return (
    <div className="doc-display">
      <Head>
        <title>Printer | Type</title>
      </Head>

      <h2>Creating Types</h2>

      <p>
        The type command creates an interface and type in a Printer compatible
        way. The generated code structure is mandatory to benefit from
        Printer&apos;s automatic type declarations via injections. If the type
        is not used for Printer decorations then there is no need to follow this
        code structure.
      </p>
      <Frame frameClassname="doc cli">
        <pre className="bold primary">λ Usage</pre>
        <pre>λ printer type [name of type]</pre>
        <pre className="bold primary">λ Example Usage</pre>
        <pre>λ printer type example</pre>
        <pre className="bold primary">λ This command then creates</pre>
        <pre>λ types/example.tsx</pre>
      </Frame>

      <p style={{ textAlign: 'center' }}>
        This then generates in the file types/example.tsx the following code.
      </p>
      <Frame frameClassname="doc code">
        <Editor
          height={180}
          code={`export interface ExampleType {

}

export default ExampleType
`}
        />
      </Frame>
    </div>
  )
}
