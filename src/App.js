import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from "./components/Header";
import Navbar from "./components/Nav";
import './css/bootstrap.rtl.min.css';
import ProfileSideRight from './components/ProfileSideRight';


class App extends React.Component{
  render(){
    
    return[
      
     <Header />, 
     
    <Navbar />,
    <ProfileSideRight/>

    


    ];


  }
}


export default App;
