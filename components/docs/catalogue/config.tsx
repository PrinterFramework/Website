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
        The Printer Config File is fairly easy and straight forward. By default
        components folders are turned off. However, you can turn them on. The
        style component configuration creates a styled-component template. And
        the test file contains default imports.
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
        The following demonstrates what is generated when creating a component
        folder. Note that this structure may be useful if you are looking to
        design your own helpers or other util files for a specific component. Or
        simply just prefer the folder based component structure.
      </p>
      <Frame frameClassname="doc cli">
        <pre className="bold primary">
          λ If componentFolder is true and all component files are true
        </pre>
        <pre>λ printer new component components/login/form</pre>
        <pre className="bold primary">λ This command then creates</pre>
        <pre>λ components/login/form/index.tsx</pre>
        <pre>λ components/login/form/form.component.tsx</pre>
        <pre>λ components/login/form/form.style.tsx</pre>
        <pre>λ components/login/form/form.test.tsx</pre>
      </Frame>

      <p>
        The following demonstrates what is generated when using the CRUD
        command. Keep in mind that this CRUD is meant to be a starting point for
        your API routes. You should also be attaching auth and security.
      </p>
      <Frame frameClassname="doc cli">
        <pre className="bold primary">λ If all crud booleans are true</pre>
        <pre>λ printer crud user</pre>
        <pre className="bold primary">λ This command then creates</pre>
        <pre>λ pages/api/user/create.tsx</pre>
        <pre>λ pages/api/user/update.tsx</pre>
        <pre>λ pages/api/user/get.tsx</pre>
        <pre>λ pages/api/user/list.tsx</pre>
        <pre>λ pages/api/user/delete.tsx</pre>
      </Frame>
    </div>
  )
}
