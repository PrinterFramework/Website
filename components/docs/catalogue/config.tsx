import Head from 'next/head'
import Frame from 'components/index/frame'
import Editor from 'components/shared/editor'
import { PrinterConfig, PrinterConfig2 } from 'snippets'

export default function Config() {
  return (
    <div className="doc-display">
      <Head>
        <title>Printer | Printer Config</title>
      </Head>

      <h2>4. Printer Config</h2>

      <p>
        The Printer Config File as of now, only is used for specifying CRUD
        endpoints. However, in the future, the config file will be used for the
        &ldquo;printer pattern&rdquo; command.
      </p>

      <div className="flex-frames">
        <Frame frameClassname="doc code">
          <Editor height={350} code={PrinterConfig} />
        </Frame>

        <Frame frameClassname="doc code">
          <Editor height={350} code={PrinterConfig2} />
        </Frame>
      </div>

      <p>
        The following demonstrates what is generated when using the CRUD
        command. Keep in mind that this CRUD is meant to be a starting point for
        your API routes. You should also be attaching auth and security.
      </p>
      <Frame frameClassname="doc cli">
        <pre className="bold primary">λ If all crud booleans are true</pre>
        <pre>λ printer crud user</pre>
        <pre className="bold primary">λ This command then creates</pre>
        <pre>λ app/api/user/create.tsx</pre>
        <pre>λ app/api/user/update.tsx</pre>
        <pre>λ app/api/user/get.tsx</pre>
        <pre>λ app/api/user/list.tsx</pre>
        <pre>λ app/api/user/delete.tsx</pre>
      </Frame>
    </div>
  )
}
