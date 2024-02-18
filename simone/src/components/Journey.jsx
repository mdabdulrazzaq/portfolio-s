import React from "react";
import resumeFile from "../documents/resume.pdf";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from  "../../src/logo.svg"
const WorkIcon = () => <></>;
const Journey = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "2000 - 2004",
      title: "Computer Science",
      place: "International University",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      yearRange: "2005 - 2008",
      title: "Bachelor Degree",
      place: "University of California",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      yearRange: "2009 - 2012",
      title: "Master Degree",
      place: "Harvard University",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
  ];

  const experienceDetails = [
    {
      yearRange: "2012 - 2013",
      title: "Jr. UI UX Designer",
      place: "Themeforest",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      yearRange: "2014 - 2016",
      title: "Jr. Product Designer",
      place: "Dribbble",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      yearRange: "2017 - 2019",
      title: "Product Designer",
      place: "Adobe",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
  ];

  const skills = [
    {
      name: "Web Design",
      percent: 65,
    },
    {
      name: "HTML/CSS",
      percent: 95,
    },
    {
      name: "JavaScript",
      percent: 80,
    },
    {
      name: "React JS",
      percent: 70,
    },
    {
      name: "Angular Js",
      percent: 60,
    },
    {
      name: "Bootstrap",
      percent: 99,
    },
  ];

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            My Journey
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <VerticalTimeline>
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2023 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement> */}
       
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 September"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#20c997" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Zeeshan & Aikrux </h3>
          <h4 className="vertical-timeline-element-subtitle">
              First Book
          </h4>
          <p> Entered  into the Scifi- world</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 -2023"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
             Tangent
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Startup-2</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Search Your Space
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Startup-1</h4>
          <p>Online Platform</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2022"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          {/* <h3 className="vertical-timeline-element-title">
            Bachelor of Technology 
          </h3> */}
          <h3>
          CSE - Data Analytics
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h5>
          <p>VIT University</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<WorkIcon />}
        />
      </VerticalTimeline>

      </div>
    </section>
  );
};

export default Journey;
