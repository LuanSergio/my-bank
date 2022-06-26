import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render(): JSX.Element {
    return (
      <Html lang="pt-BR" translate="no">
        <Head>
          <title>My bank</title>
          <meta name="name" content="My bank" />
          <meta name="description" content="Frontend exercise" />
          <meta name="keywords" content="My Bank" />
          <meta name="robots" content="noindex" />
        </Head>
        <body className="initial">
          <Main />
          <div id="modals" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
