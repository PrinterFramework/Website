import { HiOutlineMailOpen } from 'react-icons/hi'
import { FaGlobeAmericas } from 'react-icons/fa'

export interface FooterI {}

export function Footer({}: FooterI) {
  return (
    <footer id="footer">
      <div className="container">
        <p>&#169; Chris Cates 2022</p>

        <div className="links">
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
