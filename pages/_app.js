import '../styles/globals.css'
import { SessionProvider  } from "next-auth/react"
import Header from '../components/Header'
import { QueryClientProvider, QueryClient } from 'react-query'
import Footer from '../components/Footer'
import AppStore from '../contexts/PostContext'



const queryClient = new QueryClient()


function MyApp({ Component, pageProps: { session, ...pageProps }, }) {


  return(
    <AppStore>

    <QueryClientProvider client={queryClient}>

      <SessionProvider session={session}>

      <main className="min-h-screen " >

            <Header />

            <Component {...pageProps} />

            <div className="sticky top-[100vh]">
              <Footer />
            </div>

          </main>

      </SessionProvider>

    </QueryClientProvider >
    </AppStore>

  )
  
}

export default MyApp
