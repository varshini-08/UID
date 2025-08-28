import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';


function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    if (currentPage === 'services') return <Services />;
    if (currentPage === 'contact') return <Contact />;
    return <Home />;
  };

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div style={{ paddingTop: '80px' }}>
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}

export default App;