import Head from 'next/head'
import Frame from 'components/index/frame'
import Editor from 'components/shared/editor'

export interface ScssI { }

export function Scss({ }: ScssI) {
  return (
    <div className="doc-display">
      <Head>
        <title>Printer | SCSS</title>
      </Head>

      <h2>Creating SCSS Files</h2>

      <p>
        The SCSS command creates a new SCSS file. This SCSS file gets automatically
        added to the printer.scss file as well as automatically adds the theme.scss
        file as an import
      </p>
      <Frame frameClassname="doc cli">
        <pre className="bold primary">λ Usage</pre>
        <pre>λ printer scss [path]</pre>
        <pre className="bold primary">λ Example Usage</pre>
        <pre>λ printer scss homepage</pre>
        <pre className="bold primary">λ This command then creates</pre>
        <pre>λ scss/homepage.scss</pre>
        <pre>λ ...</pre>
        <pre>λ printer scss multi/folder/example</pre>
        <pre className="bold primary">λ This command then creates</pre>
        <pre>λ scss/multi/folder/example.scss</pre>
      </Frame>

      <p style={{ textAlign: 'center' }}>
        This then generates in the file scss/example.scss the following code. Pretty simple.
      </p>
      <Frame frameClassname="doc code">
        <Editor
          height={120}
          language="scss"
          code={`@import "/scss/theme.scss";
`}
        />
      </Frame>

      <p style={{ textAlign: 'center' }}>
        It then also appends the import to the printer.scss file.
      </p>

      <Frame frameClassname="doc code">
        <Editor
          height={160}
          language="scss"
          code={`@import "/scss/reset.scss";
@import "/scss/theme.scss";
@import "/scss/ui.scss";
@import "/scss/example.scss";
`}
        />
      </Frame>
    </div>
  )
}

export default Scss
