import { FaGithubAlt, FaGlobeAmericas } from 'react-icons/fa'

export interface TitleI {}

export function Title({}: TitleI) {
  return (
    <div className="tour-title">
      <h2>
        <img src="/assets/image/printer.png" />
        The Printer Tour
      </h2>
      <p>Create a To Do app with Printer in five minutes.</p>

      <div className="buttons">
        <a
          className="button"
          href="https://github.com/PrinterFramework/todo-app"
          target="github:todo"
        >
          <FaGithubAlt className="i" />
          View on Github
        </a>
        <a
          className="button"
          href="https://todo.prntr.click"
          target="website:todo"
        >
          <FaGlobeAmericas className="i" />
          View demo site
        </a>
      </div>
    </div>
  )
}

export default Title
