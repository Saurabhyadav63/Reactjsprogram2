import React from 'react'
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Header from './compontes/Header';
import "./style/App.scss";
import "./style/Header.scss"
import Home from './compontes/Home';
import "./style/home.scss";
import Contact from './compontes/Contact';
import "./style/contact.scss";
import Footer from './compontes/Footer';
import "./style/footer.scss";




const App = () => {
  return (
    <Router>
    <Header/>
    
     <Routes>
        <Route path="/" element={<Home/>} />
        </Routes>
        <Contact/>
      <Footer/>
    </Router>
  )
}

export default App;
