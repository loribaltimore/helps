import Layout from '../components/layout';
import { MainProvider } from '../components/MainContext';
import { SignUpProvider } from '../components/SignUpContext';
export default function MyApp({ Component, pageProps }) {
    return (
        <div>
            <MainProvider>
                <SignUpProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </SignUpProvider>
            </MainProvider>
        </div>
    )
  }