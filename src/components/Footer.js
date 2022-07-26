import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
    return (
        <div className="footer" >
            <div className="social-media">
                <GitHubIcon />
                <LinkedInIcon />
                {/* <StackOverflowIcon /> */}
            </div>
            <p>&copy; 2022 queenupcustoms.com</p>
        </div>
    );
}

export default Footer;