import { HiOutlineMailOpen } from 'react-icons/hi'
import { FaGlobeAmericas } from 'react-icons/fa'
import { AiOutlineBook } from 'react-icons/ai'

export interface FooterI {}

export function Footer({}: FooterI) {
  return (
    <footer id="footer">
      <div className="container">
        <p>Chris Cates &#169; {new Date().getFullYear()}</p>

        <div className="links">
          <a
            className="link"
            href="https://v1.prntr.click"
            target="v1.prntr.click"
          >
            <AiOutlineBook />
            Legacy V1 Documentation
          </a>
          <a
            className="link"
            href="https://chriscates.ca"
            target="chriscates.ca"
          >
            <FaGlobeAmericas />
            https://chriscates.ca
          </a>
          <a
            className="link"
            href="mailto:hello@chriscates.ca"
            target="mailto:chriscates"
          >
            <HiOutlineMailOpen />
            hello@chriscates.ca
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
