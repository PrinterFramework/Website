import Frame from 'components/index/frame'
import Editor from 'components/shared/editor'
import { TodoSlice, TodoType } from './snippets'

export interface SlicesI {}

export function Slices({}: SlicesI) {
  return (
    <div className="tour-content">
      <h3>Create Slices and State Management</h3>
      <p>
        First let&apos;s create the &ldquo;To Do&rdquo; type. We can do this in
        a new terminal tab by inputting the following.
      </p>
      <Frame frameClassname="doc cli">
        <pre>λ printer type todo</pre>
      </Frame>
      <p>
        Then we should update the type to contain our the content that each to
        do will contain.
      </p>
      <Frame frameClassname="doc code">
        <Editor code={TodoType} height={150} />
      </Frame>
      <p>
        From there, we should create the &ldquo;To Do&rdquo; slice. We can do
        this by inputting the following.
      </p>
      <Frame frameClassname="doc cli">
        <pre>λ printer slice todo</pre>
      </Frame>

      <p>
        Let&apos;s now add our state and actions to the new slice. Make sure to
        add @printer decorations to make it easier to pass state and actions
        into components.
      </p>

      <Frame frameClassname="doc code">
        <Editor code={TodoSlice} height={580} />
      </Frame>
    </div>
  )
}

export default Slices
