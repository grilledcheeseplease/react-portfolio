import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Porfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

const styles = {
  container: {
    paddingBottom: '8rem',
  }
}

function App() {
  const [page, setPage] = useState('about');

  let CurrentPage;

  if (page === 'about') CurrentPage = About;
  if (page === 'portfolio') CurrentPage = Porfolio;
  if (page === 'contact') CurrentPage = Contact;
  if (page === 'resume') CurrentPage = Resume;

    return (
        <>
        <Navbar setPage={setPage}/>
        <div className='container' style={styles.container}>
        <CurrentPage />
        </div>
        <Footer />
        </>
    );

}

export default App;
