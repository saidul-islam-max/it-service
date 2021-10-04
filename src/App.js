import logo from './logo.svg';
import './App.css';


import { Route, Router, Switch } from 'react-router';

import NotFounds from './Component/NotFound/NotFounds';
import Homes from './Homes/Homes';
import Contacts from './Component/Contacts/Contacts';

import { BrowserRouter } from 'react-router-dom';
import Header from './Header/Header';
import { Container } from 'react-bootstrap';
import Footer from './Component/Footer/Footer';
import Services from './Component/Service/Services';
import About from './Component/About/About';

function App() {
  return (
    <div className="app">
    <div className="bg-light">
     
     
    </div>

    <BrowserRouter>
          
             <Header></Header>
          
       <Switch>
         <Route path="/home">
           <Homes></Homes>
         </Route>
        
         <Route path="/about">
           <About></About>
         </Route>
         <Route path="/contact">
             <Contacts></Contacts>
         </Route>
         <Route path="/service">
           <Services></Services>
         </Route>
         <Route path="*">
           <NotFounds></NotFounds>
         </Route>
         
       </Switch>
     </BrowserRouter>

     <Footer></Footer>
  
    
    
     </div>
  );
}

export default App;
