import React from "react";
import { AiFillGithub, AiFillLinkedin,  } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";


const styles = {
    footer: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#083662',
        alignItems: 'center',
        justifyContent: 'center',
        // position: 'absolute',
        bottom: 0,
        width: '100%',
        color: 'goldenrod',
    },
}

function Footer() {
    return (
        <div className="footer container-fluid" style={styles.footer}>
            <div className="socials">
               <a href="https://github.com/grilledcheeseplease?tab=repositories" className="github p-2"><AiFillGithub /></a> 
               <a href="https://www.linkedin.com/in/lacy-nunnally-6463b6210/" className="linkedin p-2"><AiFillLinkedin /></a> 
               <a href="https://stackoverflow.com/users/18943115/michaelscottpapercompany" className="stackoverflow p-2"><BsStackOverflow /></a> 
            </div>
            <p>&copy; 2022 queenupcustoms.com</p>
        </div>
    );
}

export default Footer;