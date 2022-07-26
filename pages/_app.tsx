import 'public/assets/scss/printer.scss'
import App, { AppContext, AppInitialProps } from 'next/app'
import Head from 'next/head'
import { wrapper } from 'redux/wrapper'
import Header from 'components/shared/header'
import Footer from 'components/shared/footer'

export class AppComponent extends App<AppInitialProps> {
  public static getInitialProps = async ({ Component, ctx }: AppContext) => {
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {})
      },
      appProp: ctx.pathname
    }
  }

  public render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <title>Printer</title>
          <meta name="author" content="Chris Cates" />
          <meta
            name="description"
            content="🖨️ Printer: Automation Tooling for Next, Redux and Prisma"
          />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Printer" />
          <meta
            name="twitter:description"
            content="🖨️ Printer: Automation Tooling for Next, Redux and Prisma"
          />
          <meta name="twitter:site" content="https://prntr.click" />
          <meta property="og:title" content="Printer" />
          <meta
            property="og:image"
            content="https://prntr.click/assets/image/og.image.jpg"
          />
          <meta
            property="og:description"
            content="🖨️ Printer: Automation Tooling for Next, Redux and Prisma"
          />

          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </>
    )
  }
}

export default wrapper.withRedux(AppComponent)
