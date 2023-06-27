import Head from 'next/head'
import Frame from 'components/index/frame'
import Editor from 'components/shared/editor'

export interface LayoutI {}

export function Layout({}: LayoutI) {
  return (
    <div className="doc-display">
      <Head>
        <title>Printer | Layout</title>
      </Head>
      <h2>Creating Page Layouts</h2>

      <p>
        The Layout command creates a new Layout Component. Review the Next
        Documentation on{' '}
        <a
          className="link"
          href="https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts"
          target="layouts"
        >
          Pages and Layouts
        </a>{' '}
        to learn more.
      </p>
      <Frame frameClassname="doc cli">
        <pre className="bold primary">λ Usage</pre>
        <pre>λ printer layout [path]</pre>
        <pre className="bold primary">λ Example Usage</pre>
        <pre>λ printer layout example</pre>
        <pre className="bold primary">λ This command then creates</pre>
        <pre>λ app/example/layout.tsx</pre>
        <pre>λ ...</pre>
        <pre>λ printer layout multi/folder/example</pre>
        <pre className="bold primary">λ This command then creates</pre>
        <pre>λ app/multi/folder/example/layout.tsx</pre>
      </Frame>

      <p style={{ textAlign: 'center' }}>
        This then generates in the file app/example/layout.tsx the following
        code.
      </p>
      <Frame frameClassname="doc code">
        <Editor
          height={380}
          code={`import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {

}

export interface LayoutI {
  children: ReactNode
}

export default function LayoutComponent({ children }: LayoutI) {
  return (
    <div>
      {children}
    </div>
  )
}
`}
        />
      </Frame>
    </div>
  )
}

export default Layout
