import '../styles/globals.css'
import NavBar from '../components/Navbar'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  
  return <> <NavBar/> <Component {...pageProps} /><Footer/> </>
}

export default MyApp
