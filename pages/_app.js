import Head from "next/head";
import { RecoilRoot } from "recoil";

import "../styles/global.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Valet - Miami Private Driver and Supercar Concierge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />;
      </RecoilRoot>
    </>
  );
}

export default App;
