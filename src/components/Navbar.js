import React from 'react';
import background from '../images/header.png';

const styles = {
    header: {
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        marginBottom: '20px',
        height: 115,
        display: 'flex',
        alignItems: 'center',
    },
    links: {
        textStyle: 'none',
        color: 'goldenrod',
        fontSize: '25px',
        fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '12px'
    }
}

function Navbar({ setPage }) {
    return (
        <header className='header' style={styles.header}>
            <div className='navbar'>
                <div className='links '>

                    <a href="#about" onClick={() => setPage('about')} className='p-2 m-2 d-inline-flex flex-sm-fill text-sm-center nav-link active' style={styles.links}>About</a>

                    <a href="#portfolio" onClick={() => setPage('portfolio')} className='p-2 m-2 d-inline-flex flex-sm-fill text-sm-center nav-link active' style={styles.links}>Portfolio</a>

                    <a href="#contact" onClick={() => setPage('contact')} className='p-2 m-2 d-inline-flex flex-sm-fill text-sm-center nav-link active' style={styles.links}>Contact</a>
                    
                    <a href="#resume" onClick={() => setPage('resume')} className='p-2 m-2 d-inline-flex flex-sm-fill text-sm-center nav-link active' style={styles.links}>Resume</a>
                    
                </div>
            </div>
        </header>
    );
}

export default Navbar;