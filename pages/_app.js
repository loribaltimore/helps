import Layout from '../components/layout';
import { MainProvider } from '../components/MainContext';
export default function MyApp({ Component, pageProps }) {
    return (
        <div>
            <MainProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </MainProvider>
        </div>
    )
  }