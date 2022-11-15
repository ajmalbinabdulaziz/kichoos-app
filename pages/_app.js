import '../styles/globals.css'
import { SessionProvider,  } from "next-auth/react"
import Header from '../components/Header'
import Footer from '../components/Footer'


function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return(
    <SessionProvider session={session}>

     <div className='min-h-screen'>

          <Header />

          <Component {...pageProps} />

          <div className="sticky top-[100vh]">
            <Footer />
          </div>

        </div>

    </SessionProvider>    
  )
  
}

export default MyApp
