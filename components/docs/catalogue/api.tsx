import Head from 'next/head'
import Frame from 'components/index/frame'
import Editor from 'components/shared/editor'

export default function Api() {
  return (
    <div className="doc-display">
      <Head>
        <title>Printer | API</title>
      </Head>

      <h2>Creating API Routes</h2>

      <p>
        The type command creates an interface and type in a Printer compatible
        way. The generated code structure is mandatory to benefit from
        Printer&apos;s automatic type declarations via injections. If the type
        is not used for Printer decorations then there is no need to follow this
        code structure.
      </p>
      <Frame frameClassname="doc cli">
        <pre className="bold primary">λ Usage</pre>
        <pre>λ printer api [path]</pre>
        <pre className="bold primary">λ Example Usage</pre>
        <pre>λ printer api example</pre>
        <pre className="bold primary">λ This command then creates</pre>
        <pre>λ pages/api/example.tsx</pre>
        <pre>λ ...</pre>
        <pre>λ printer api multi/folder/example</pre>
        <pre className="bold primary">λ This command then creates</pre>
        <pre>λ pages/api/multi/folder/example.tsx</pre>
      </Frame>

      <p style={{ textAlign: 'center' }}>
        This then generates in the file pages/api/example.tsx the following
        code.
      </p>
      <Frame frameClassname="doc code">
        <Editor
          height={360}
          code={`import { NextApiRequest, NextApiResponse } from 'next'
import { withIronSessionApiRoute } from 'iron-session/next'
import { Session } from 'util/session'

export const ExampleRoute = withIronSessionApiRoute(
  async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      res.status(200).send({ status: 'OK' })
    } catch (error) {
      console.error(error)
      res.status(500).send({ status: 'ERROR', error })
    }
  },
  Session
)

export default ExampleRoute`}
        />
      </Frame>
    </div>
  )
}
