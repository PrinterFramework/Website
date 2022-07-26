import Head from 'next/head'
import Frame from 'components/index/frame'

export default function SuggestedStructure() {
  return (
    <div className="doc-display">
      <Head>
        <title>Printer | Suggested Structure</title>
      </Head>

      <h2>2. Suggested Structure</h2>
      <p>
        In general, I suggest storing components in the &ldquo;components&rdquo;
        folder. Furthermore, each core feature or page is structured in
        it&apos;s own folder inside components as well too. A trivial example
        would be a profile page consisting of several pages.
      </p>
      <Frame frameClassname="doc cli">
        <pre className="bold primary">
          λ Store components for displaying a profile based on page nomenclature
        </pre>
        <pre>λ printer component components/profile/edit/banner</pre>
        <pre>λ printer component components/profile/edit/bio</pre>
        <br />
        <pre className="bold primary">
          λ Use absolute page paths for extra clarity
        </pre>
        <pre>λ printer component components/profile/[username]/banner</pre>
        <pre>λ printer component components/profile/[username]/bio</pre>
      </Frame>
      <p>
        While styled-components are available for code generation with Printer.
        I still suggest writing pure SCSS. Or bringing in a templating system to
        your project. SCSS is optimal for preloading for both SSG and SSR
        compared to styled-components.
      </p>
      <Frame frameClassname="doc cli">
        <pre className="bold primary">
          λ Debug SSG SCSS with the yarn scss command
        </pre>
        <pre>λ yarn scss</pre>
      </Frame>
      <p>
        Furthermore, assets such as images, videos and other forms of media
        should stay in the public/assets folder. I&apos;ve found that preloading
        assets (with XHR) and managing loading states on components is far more
        optimal.
      </p>
      <Frame frameClassname="doc cli">
        <pre>λ /public/assets/image</pre>
        <pre>λ /public/assets/video</pre>
        <pre>λ ...</pre>
      </Frame>
    </div>
  )
}
