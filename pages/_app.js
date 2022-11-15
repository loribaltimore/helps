import Layout from '../components/layout';

export default function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Layout>
                <Component {...pageProps} />
                </Layout>
        </div>
    )
  }