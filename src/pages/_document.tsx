import Document, { Html, Head, Main, NextScript } from "next/document";
import Config from 'src/app.config.js';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className={ Config.APP_LANDING_PAGE ? 'bg-secondary' : ''}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
