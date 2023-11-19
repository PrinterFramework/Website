import Head from 'next/head'
import Frame from 'components/index/frame'

export default function GettingStarted() {
  return (
    <div className="doc-display">
      <Head>
        <title>Printer | Getting Started</title>
      </Head>

      <h2>1. Getting Started</h2>

      <p>
        You can install Printer via npm or yarn. Printer is compatible with both
        UNIX and Windows Operating Systems. The Printer CLI tool at minimum
        requires Node v4. In general, we suggest using Node LTS though. You can
        download{' '}
        <a href="https://github.com/nvm-sh/nvm" target="nvm">
          nvm
        </a>{' '}
        and install Node and NPM LTS versions with that tool.
      </p>
      <Frame frameClassname="doc cli">
        <pre className="bold primary">λ with npm</pre>
        <pre>λ npm install @printerframework/cli --global</pre>
        <pre className="bold primary">λ or with yarn</pre>
        <pre>λ yarn global add @printerframework/cli</pre>
      </Frame>
      <p>
        You can confirm Printer is properly installed by simply running
        &ldquo;printer --help&rdquo;. This should show the full catalogue of
        commands available with Printer.
      </p>
      <Frame frameClassname="doc cli">
        <pre>λ printer --help</pre>
        <pre>λ 🖨️ Printer: Automation Tooling for Next, Redux and Prisma.</pre>
        <pre>λ ... </pre>
        <pre>λ ... </pre>
      </Frame>
      <p>
        Create a new project by running &ldquo;printer new project&rdquo;. Then
        go into the project folder and you can officially start developing.
      </p>
      <Frame frameClassname="doc cli">
        <pre>λ printer new project</pre>
        <pre>λ cd project</pre>
        <pre>λ yarn</pre>
        <pre>λ yarn dev</pre>
      </Frame>
      <p>
        Here is a brief overview of what each npm run command does in the
        project. These commands should all be pretty straight forward and
        (hopefully) fairly standard to experienced React and Next.js developers.
      </p>
      <Frame frameClassname="doc cli">
        <pre className="bold primary">
          λ Starts the dev server on localhost:4200
        </pre>
        <pre>λ yarn dev</pre>
        <pre className="bold primary">λ A bind for next build</pre>
        <pre>λ yarn build</pre>
        <pre className="bold primary">λ A bind for next start</pre>
        <pre>λ yarn start</pre>
        <pre className="bold primary">
          λ Checks lint and style errors in the project
        </pre>
        <pre>λ yarn lint</pre>
        <pre className="bold primary">
          λ Debugs the scss/printer.scss file in scss/debug
        </pre>
        <pre>λ yarn scss</pre>
        <pre className="bold primary">λ Compiles Prisma Client</pre>
        <pre>λ yarn prisma</pre>
        <pre className="bold primary">
          λ Compiles Prisma Client and pushes new indices to your Database
        </pre>
        <pre>λ yarn prisma:update</pre>
      </Frame>
    </div>
  )
}
