import Frame from 'components/index/frame'

export interface StartI {}

export function Start({}: StartI) {
  return (
    <div className="tour-content">
      <h3>Getting Started</h3>
      <p>First thing&apos;s first. Download Printer from npm.</p>
      <Frame frameClassname="doc cli">
        <pre className="bold primary">λ with npm</pre>
        <pre>λ npm install @printerframework/cli --global</pre>
        <pre className="bold primary">λ or with yarn</pre>
        <pre>λ yarn global add @printerframework/cli</pre>
      </Frame>
      <p>
        After installing Printer. Create a new project and start the dev
        environment.
      </p>
      <Frame frameClassname="doc cli">
        <pre>λ printer new todo-app</pre>
        <pre>λ cd todo-app</pre>
        <pre>λ yarn</pre>
        <pre>λ yarn dev</pre>
      </Frame>
    </div>
  )
}

export default Start
