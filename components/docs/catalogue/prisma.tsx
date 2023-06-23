import Head from 'next/head'
import Frame from 'components/index/frame'
import Editor from 'components/shared/editor'

export interface PrismaI {}

export function Prisma({}: PrismaI) {
  return (
    <div className="doc-display">
      <Head>
        <title>Printer | Prisma</title>
      </Head>

      <h2>Prisma Type Generation</h2>

      <p>
        The Prisma command will generate types dynamically based on your Prisma
        Schema. This is very useful to plug in your prisma types for your
        project quickly and easily. If Printer cannot identify the type. It will
        default to the any type.
      </p>
      <Frame frameClassname="doc cli">
        <pre className="bold primary">λ Usage</pre>
        <pre>λ printer prisma</pre>
      </Frame>

      <p style={{ textAlign: 'center' }}>Here is an example Prisma Schema.</p>
      <Frame frameClassname="doc code">
        <Editor
          language="config"
          height={640}
          code={`generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider     = "mysql"
  url          = env("DATABASE_URL")
  relationMode = "prisma"
}

model Account {
  id          String   @id @default(uuid()) @db.Char(36)
  username    String   @unique @db.VarChar(128)
  posts       Posts[]
  dateCreated DateTime @default(now())
  dateUpdated DateTime @updatedAt

  @@index(dateCreated)
}

model Posts {
  id          String   @id @default(uuid()) @db.Char(36)
  accountId   String   @db.VarChar(128)
  title       String   @db.VarChar(256)
  content     String   @db.Text()
  account     Account  @relation(fields: accountId, references: id)
  dateCreated DateTime @default(now())
  dateUpdated DateTime @updatedAt

  @@index(accountId)
  @@index(dateCreated)
}
`}
        />
      </Frame>

      <p style={{ textAlign: 'center' }}>This will generate the following.</p>

      <Frame frameClassname="doc code">
        <Editor
          height={210}
          code={`// types/prisma/Account.tsx
import PostsType from 'types/prisma/Posts'

export interface AccountType {
  id?: string
  username?: string
  posts?: PostsType[]
  dateCreated?: Date
  dateUpdated?: Date
}

export default AccountType
`}
        />
      </Frame>

      <Frame frameClassname="doc code">
        <Editor
          height={280}
          code={`// types/prisma/Posts.tsx
import AccountType from 'types/prisma/Account'

export interface PostsType {
  id?: string
  accountId?: string
  title?: string
  content?: string
  account?: AccountType
  dateCreated?: Date
  dateUpdated?: Date
}

export default PostsType
`}
        />
      </Frame>
    </div>
  )
}

export default Prisma
