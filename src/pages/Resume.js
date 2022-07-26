import React from "react";
import { VerticalTimeLine, VerticalTimeLineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";

function Resume() {
    return (
        <div className="experience">
            <VerticalTimeLine lineColor="">
                <VerticalTimeLineElement className="vertical-timeline-element--education" date="2006 - 2010" iconStyle={{ background: "", color: "" }} icon={<SchoolIcon />}>

                    <h3 className="vertical-timeline-element-title"> Jefferson County High School </h3>
                    <p> High School Diploma </p>
                </VerticalTimeLineElement>
                <VerticalTimeLineElement className="vertical-timeline-element--education" date="2010 - 2011" iconStyle={{ background: "", color: "" }} >

                    <h3 className="vertical-timeline-element-title"> Tattoo Apprenticeship </h3>
                    <p> Liscense To Tattoo </p>
                </VerticalTimeLineElement>
                <VerticalTimeLineElement className="vertical-timeline-element--education" date="2011 - 2015" iconStyle={{ background: "", color: "" }} >

                    <h3 className="vertical-timeline-element-title"> Tattoo Artist </h3>
                    <p> Asylum Tattoo </p>
                </VerticalTimeLineElement>
                <VerticalTimeLineElement className="vertical-timeline-element--education" date="2016 - 2020" iconStyle={{ background: "", color: "" }} >

                    <h3 className="vertical-timeline-element-title"> Front Office Manager </h3>
                    <p> Tennessee Door Inc. </p>
                </VerticalTimeLineElement>
                <VerticalTimeLineElement className="vertical-timeline-element--education" date="2020 - Present" iconStyle={{ background: "", color: "" }} >

                    <h3 className="vertical-timeline-element-title"> Entrepreneur </h3>
                    <p> Amergency Heating & Cooling </p>
                </VerticalTimeLineElement>
            </VerticalTimeLine>
        </div>
    )
}

export default Resume;