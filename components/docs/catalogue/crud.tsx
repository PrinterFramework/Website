import Head from 'next/head'
import Frame from 'components/index/frame'
import Editor from 'components/shared/editor'
import {
  CreateCrud,
  DeleteCrud,
  GetCrud,
  ListCrud,
  UpdateCrud
} from '../snippets/crud'

export default function CRUD() {
  return (
    <div className="doc-display">
      <Head>
        <title>Printer | CRUD</title>
      </Head>

      <h2>Creating CRUD API Routes</h2>

      <p>
        The CRUD command creates new API routes based around a Prisma model. For
        example running &ldquo;printer crud user&rdquo; will generate the routes
        create, update, list, get, delete with the Prisma model
        &ldquo;User&rdquo; binded to it.
      </p>
      <Frame frameClassname="doc cli">
        <pre className="bold primary">λ Usage</pre>
        <pre>λ printer crud [model name]</pre>
        <pre className="bold primary">λ Example Usage</pre>
        <pre>λ printer crud user</pre>
        <pre>λ ...</pre>
        <pre className="bold primary">λ This command then creates</pre>
        <pre>λ pages/api/user/create.tsx</pre>
        <pre>λ pages/api/user/update.tsx</pre>
        <pre>λ pages/api/user/get.tsx</pre>
        <pre>λ pages/api/user/list.tsx</pre>
        <pre>λ pages/api/user/delete.tsx</pre>
      </Frame>

      <p style={{ textAlign: 'center' }}>
        These are samples of the auto generated code.
      </p>
      <div className="flex-frames">
        <Frame frameClassname="doc code">
          <Editor height={540} code={CreateCrud} />
        </Frame>
        <Frame frameClassname="doc code">
          <Editor height={540} code={UpdateCrud} />
        </Frame>
        <Frame frameClassname="doc code">
          <Editor height={500} code={GetCrud} />
        </Frame>
        <Frame frameClassname="doc code">
          <Editor height={500} code={ListCrud} />
        </Frame>
        <Frame frameClassname="doc code">
          <Editor height={500} code={DeleteCrud} />
        </Frame>
      </div>
    </div>
  )
}
