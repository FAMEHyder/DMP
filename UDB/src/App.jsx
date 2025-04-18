
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import ContactUs from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import FacebookTokenFetcher from './components/Facebook.jsx';
function App() {


  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/contact' element={<ContactUs />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/facebook' element={<FacebookTokenFetcher />}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App