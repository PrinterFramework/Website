import Head from 'next/head'
import Frame from 'components/index/frame'
import Editor from 'components/shared/editor'
import { RouteCrud } from '../snippets/crud'

export default function CRUD() {
  return (
    <div className="doc-display">
      <Head>
        <title>Printer | CRUD</title>
      </Head>

      <h2>Creating CRUD API Routes</h2>

      <p>
        The CRUD command creates new API routes based around a Prisma model. For
        example running &ldquo;printer crud account&rdquo; will generate the
        routes create, update, list, get, delete with the Prisma model
        &ldquo;Account&rdquo; binded to it.
      </p>
      <Frame frameClassname="doc cli">
        <pre className="bold primary">λ Usage</pre>
        <pre>λ printer crud [model name]</pre>
        <pre className="bold primary">λ Example Usage</pre>
        <pre>λ printer crud user</pre>
        <pre>λ ...</pre>
        <pre className="bold primary">λ This command then creates</pre>
        <pre>λ app/api/account/route.tsx</pre>
      </Frame>

      <p style={{ textAlign: 'center' }}>
        These are samples of the auto generated code.
      </p>
      <Frame frameClassname="doc code">
        <Editor height={2700} code={RouteCrud} />
      </Frame>
    </div>
  )
}
