import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './components/Home/index' 
import Header from './components/Header/index';
import Sale from './components/Sale/index' 
import Rent from './components/Rent/index'
import About from './components/About/index' 
import LoginPage from './components/LoginPage/index';
import NotFound from './components/NotFound/index'

import './App.css';

const App = () => (
    <Router>
        <Header />    
        <Routes>
            <Route exact path="/" element = {<Home />}/>
            <Route exact path="/rent" element = {<Rent />}/>
            <Route exact path="/sale" element = {<Sale />}/>
            <Route exact path="/about" element = {<About />}/> 
            <Route  element = {<NotFound />}/>
                
        </Routes>
    </Router>
)

    
        

export default App;
