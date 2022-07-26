import Head from 'next/head'
import Frame from 'components/index/frame'

export default function NewProject() {
  return (
    <div className="doc-display">
      <Head>
        <title>Printer | New Project</title>
      </Head>

      <h2>Creating A New Project</h2>

      <p>
        Creating a new project is super simple. If you want to check out the
        Printer project structure head on over to the sample{' '}
        <a
          href="https://github.com/PrinterFramework/new-project"
          target="github-project"
        >
          Github Repo
        </a>{' '}
        here. if you want to create a new project. You can run the printer new
        command.
      </p>

      <Frame frameClassname="doc cli">
        <pre className="bold primary">λ Create a new project in the $CWD</pre>
        <pre>λ printer new</pre>
        <pre>λ ...</pre>
        <pre className="bold primary">
          λ Create a new project in the project folder
        </pre>
        <pre>λ printer new project</pre>
        <pre>λ ...</pre>
        <pre>λ $CWD/project/...</pre>
      </Frame>
    </div>
  )
}
