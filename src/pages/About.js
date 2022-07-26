import React from "react";

const styles = {
    picDiv: {

    },
    facePic: {
        height: '350px',
        borderRadius: '12px',
    },
    about: {
        textAlign: 'center',
        color: 'cornsilk',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
    },
    paragraph: {
        fontSize: '20px',
    }
}

function About() {
    return (
        <>
            <div className="about container card mb-3" style={styles.about}>

                <div className="row no-gutters">

                    <div className="picDiv col-md-4" style={styles.pic}>

                        <img src={require("../images/myface.png")} alt="face" className="facePic p-4" style={styles.facePic} />

                    </div>

                    <div className="col-md-8">

                        <div className="paragraph card-body pt-5" style={styles.paragraph}>

                        <h2 className="card-title p-2">About Me</h2>

                            <p className="card-text">Hello, my name is Lacy and I am a software developer with a passion for learning and creating. I am a strong willed individual with an entrepreneurial spirit and a drive to problem solve. A few of my hobbies include: Art, Gaming (tabletop or console), Music, & The Office. </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;