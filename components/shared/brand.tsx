import Link from 'next/link'

export interface BrandI {}

export function Brand({}: BrandI) {
  return (
    <Link href="/">
      <a className="brand">
        <img src="/assets/image/printer.png" alt="Printer Logo" />
        <span>Printer</span>
      </a>
    </Link>
  )
}

export default Brand
