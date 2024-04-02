import Header from './components/Header/Header'
import Presentation from './components/Presentation/Presentation'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Competences from './components/Competences/Competences'
import Footer from './components/Footer/Footer' 
import Parcours from './components/Parcours/Parcours'
import Projects from './components/Projects/Projects'

function App() {

  return (
    <>
      <div>
        <Header />
        <Presentation />
        <About />
        <Competences />
        <Parcours />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
