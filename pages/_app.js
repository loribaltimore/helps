import Layout from '../components/layout';
import { MainProvider } from '../components/MainContext';
import { SignUpProvider } from '../signUp/components/SignUpContext';
import Flash from '../components/Flash';
import Navbar from '../components/Navbar';

export default function MyApp({ Component, pageProps }) {
    return (
        <div>
            <MainProvider>
                <SignUpProvider>
                <Navbar />
                    <Layout>
                        <Flash />
                        <Component {...pageProps} />
                    </Layout>
                </SignUpProvider>
            </MainProvider>
        </div>
    )
  }