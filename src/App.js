import React from 'react';
import './App.css';
import Main from './components/main';
import HeaderNav from './components/header/headerNav'
import Footer from './components/footer/footer'
function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
