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
        The API route generates a baseline structure for you to develop REST
        endpoints. It uses iron-session and utilizes the pre generated session
        token. Nothing special, but definitely a timesaver.
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
          height={520}
          code={`import { NextRequest, NextResponse } from 'next/server'
import { getSession, createResponse } from 'util/session'

export async function GET(req: NextRequest) {
  const res = new NextResponse()
  const session = await getSession(req, res)
  const { searchParams } = new URL(req.url)

  try {
    return createResponse(
      res,
      JSON.stringify({
        status: 'OK',
        session
      }),
      { status: 200 }
    )
  } catch (error) {
    console.error(error)
    return createResponse(
      res,
      JSON.stringify({ status: 'ERROR', error }),
      { status: 500 }
    )
  }
}
`}
        />
      </Frame>
    </div>
  )
}
