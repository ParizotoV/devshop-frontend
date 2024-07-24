import { AppProps } from 'next/app'
import '../css/styles.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}

export default App
