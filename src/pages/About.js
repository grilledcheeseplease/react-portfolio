import React from "react";

const styles = {
    about: {
        textAlign: 'center',
        color: 'cornsilk',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
    },
    paragraph: {
        fontSize: '20px'
    }
}

function About() {
    return <div className="about container card" style={styles.about}>
        <h2>About Me</h2>
        <div className="paragraph" style={styles.paragraph}>
            <p>A software developer with a passion for learning and creating.</p>
        </div>
    </div>
}

export default About;