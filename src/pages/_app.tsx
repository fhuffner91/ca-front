import '@/styles/global.scss'
import type { AppProps } from 'next/app'
import HomeModal from 'src/components/widgets/homeModal';

export default function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(

      <Component {...pageProps} />
 
  );
}
