import React from "react";

const styles = {
    container: {
        borderRadius: '12px',
    },
    card: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'cornsilk',
        padding: '8px',
        margin: '8px',
        textAlign: 'center',
    }
}

function Resume() {
    return (
        <div className="container-fluid" style={styles.container}>

            <div className="d-flex justify-content-center p-3">
                <h2>Resume</h2>
            </div>

            <div className="d-flex justify-content-center">

                <div className="card-deck">

                    <div className="card ml-auto" style={styles.card}>

                        <div className="d-flex-column justify-content-center  p-2">
                            <h5 className="card-title">Full Stack Develper</h5>
                                <p className="card-text">UNC Charlotte</p>
                                <p className="card-text">2022 - Present</p>
                        </div>
                    </div>

                    <div className="card ml-auto" style={styles.card}>

                        <div className="d-flex-column justify-content-center  p-2">
                            <h5 className="card-title">Entrepreneur</h5>
                                <p className="card-text">Queen Up Customs</p>
                                <p className="card-text">2020 - Present</p>
                        </div>
                    </div>

                    <div className="card ml-auto" style={styles.card}>

                        <div className="d-flex-column justify-content-center p-2">
                            <h5 className="card-title">Front Office Manager</h5>
                                <p className="card-text">Tennessee Door Inc</p>
                                <p className="card-text">2016 - 2020</p>
                        </div>
                    </div>
                </div>

                <div className="card-deck">

                    <div className="card ml-auto" style={styles.card}>

                        <div className="d-flex-column justify-content-center p-2">
                            <h5 className="card-title">Licensed Tattoo Artist</h5>
                                <p className="card-text">Asylum Tattoo</p>
                                <p className="card-text">2011 - 2015</p>
                        </div>
                    </div>

                    <div className="card ml-auto" style={styles.card}>

                        <div className="d-flex-column justify-content-center p-2">
                            <h5 className="card-title">Tattoo License</h5>
                                <p className="card-text">Tattoo Apprenticeship</p>
                                <p className="card-text">2010 - 2011</p>
                        </div>
                    </div>

                    <div className="card ml-auto" style={styles.card}>

                        <div className="d-flex-column justify-content-center p-2">
                            <h5 className="card-title">High School Diploma</h5>
                                <p className="card-text">Jefferson County High School</p>
                                <p className="card-text">2006 - 2010</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;