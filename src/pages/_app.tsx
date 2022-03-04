import type { AppProps } from 'next/app';
import { MainLayout } from '@components/layout';
import '@styles/index.scss';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    );
}

export default MyApp;
