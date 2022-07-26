import Frame from 'components/index/frame'
import Editor from 'components/shared/editor'
import { IndexPage, TodoComponent, TodoComponentAdd, TodoComponentList } from './snippets'

export interface ComponentI {}

export function Component({}: ComponentI) {
  return (
    <div className="tour-content">
      <h3>Design Components and Business Logic</h3>
      <p>
        You have successfully designed how state is mapped to redux. Now
        it&apos;s time to start doing the business logic in FC Components.
        Let&apos;s create the components.
      </p>

      <Frame frameClassname="doc cli">
        <pre>λ printer component components/todo/add</pre>
        <pre>λ printer component components/todo/list</pre>
      </Frame>

      <p>Then, add these Components to the index page.</p>
      <Frame frameClassname="doc code">
        <Editor code={IndexPage} height={300} />
      </Frame>

      <p>Now let&apos;s inject the state and actions into these components.</p>

      <Frame frameClassname="doc cli">
        <pre>λ printer inject todo components/todo/add</pre>
        <pre>λ printer inject todo components/todo/list</pre>
      </Frame>

      <p>Your components should now be updated and have the following.</p>
      <Frame frameClassname="doc code">
        <Editor code={TodoComponent} height={420} />
      </Frame>

      <p>
        Let&apos;s now start working on some business logic to add new todos.
        The following adds a simple dispatch to add a new task to the To Do array.
      </p>

      <Frame frameClassname="doc code">
        <Editor code={TodoComponentAdd} height={750} />
      </Frame>

      <p>
        Now we need to start working on the list. The following adds mappable list
        of all the tasks. With a checkbox to turn it on and off.
      </p>

      <Frame frameClassname="doc code">
        <Editor code={TodoComponentList} height={680} />
      </Frame>

      <p>
        You&apos;re done! Hopefully this Printer tutorial was helpful and will
        help you prototype applications faster and better.
      </p>
    </div>
  )
}

export default Component
