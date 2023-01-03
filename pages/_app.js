import Layout from '../components/layout';
import { MainProvider } from '../components/MainContext';
import { SignUpProvider } from '../signUp/components/SignUpContext';
import Flash from '../components/Flash';
import { MasterProvider} from '../Master/components/MasterContext';
import { ExploreProvider } from '../Explore/components/ExploreContext';

export default function MyApp({ Component, pageProps }) {

    return (
        <div>
            <MainProvider>
                <SignUpProvider>
                        <Layout>
                            <Flash />
                                <MasterProvider>
                                    <ExploreProvider>
                                        <Component {...pageProps} />
                                    </ExploreProvider>
                                </MasterProvider>
                        </Layout>
                </SignUpProvider>
            </MainProvider>
        </div>
    )
  }