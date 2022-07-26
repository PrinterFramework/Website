import Head from 'next/head'
import Frame from 'components/index/frame'

export default function FolderOverview() {
  return (
    <div className="doc-display">
      <Head>
        <title>Printer | Folder Overview</title>
      </Head>

      <h2>3. Folder Overview</h2>
      <p>
        While components can be generated in any folder desired. There is a core
        structure to Printer that is for the most part guided. The only thing up
        to discretion are the components and media assets.
      </p>
      <Frame frameClassname="doc cli">
        <pre className="bold primary">
          λ Type interfaces generate in the types folder.
        </pre>
        <pre>λ types/[name].tsx</pre>
        <br />
        <pre className="bold primary">
          λ Slices get generated in the redux/slice folder
        </pre>
        <pre>λ redux/slice/[name].tsx</pre>
        <br />
        <pre className="bold primary">
          λ Pages get generated in the pages folder
        </pre>
        <pre>λ pages/[name].tsx</pre>
        <br />
        <pre className="bold primary">
          λ API Routes get generated in the pages/api folder
        </pre>
        <pre>λ pages/api/[name].tsx</pre>
      </Frame>
      <p>
        If you&apos;re adding slices to a Printer project. It is recommended you
        use the Printer slice command. In any event where you&apos;re importing
        slices from somewhere else. You will need to update the reducers.json
        file in order for Printer&apos;s auto generation code to work properly.
        The slice command will not include the slice in the reducer imports
        elsewise.
      </p>
      <Frame frameClassname="doc cli">
        <pre className="bold primary">
          λ You need to manually update reducers.json if importing a slice
        </pre>
        <pre>λ /redux/reducers.json</pre>
        <pre className="bold primary">
          λ Use Printer if possible and then import business logic to the new
          slice
        </pre>
        <pre>λ printer slice [name]</pre>
      </Frame>
    </div>
  )
}
