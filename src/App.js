import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from "react-particles-js"
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import Sobre from "./components/Sobre"
import Services from "./components/Services"
import Experience from "./components/Experience"
import Portfolio from "./components/Portfolio"
import Testimonials from "./components/Testimonials"
import Contacts from "./components/Contacts"
import Footer from "./components/Footer"
import Helmet from 'react-helmet'
import Logo from './images/logo.png'


function App() {
  return (
    <>
        <Helmet>
        <title>Yury Trindade - Desenvolvedor fullstack </title>
        <link rel="icon" type="image/png" href={Logo} sizes="16x16" />
      </Helmet>

      <Particles 
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color:"#f9ab00"
              }
            }
          }
        }}
        />
      <Navbar />
      <Header />
      <Sobre />
      <Services />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer />
   </>
  )
}

export default App;
