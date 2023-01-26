import Layout from '../components/layout';
import DonatorScroll from '../components/DonatorScroll';
import { MainProvider } from '../components/MainContext';
import { SignUpProvider } from '../signUp/components/SignUpContext';
import { MasterProvider} from '../Master/components/MasterContext';
import { ExploreProvider } from '../Explore/components/ExploreContext';

export default function MyApp({ Component, pageProps }) {

    return (
        <div>
            <MainProvider>
                <SignUpProvider>
                        <Layout>
                                <MasterProvider>
                                    <ExploreProvider>
                                        <Component {...pageProps} />
                                            {/* <DonatorScroll /> */}
                                    </ExploreProvider>
                                </MasterProvider>
                        </Layout>
                </SignUpProvider>
            </MainProvider>
        </div>
    )
};