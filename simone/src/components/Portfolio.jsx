import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
import { beforeWrite } from "@popperjs/core";

// simone/build/images/projects/project24.jpeg
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    STARTUPS: "Startups",
    BRAND: "Books",
    // PHOTOS: "Meetups",
  };

  const projectsData = [
    {
      title: "Zeeshan and Aikrux",
      projectInfo:"Childhood dreams of superheroes 🦸‍♂️ led some to seek danger in pursuit of power 💥. This tale is a reminder 📚 that our true strength lies within, not in the fantasies of flight and fight. Join me in uncovering the real heroes among us ✨",
      industry: "Scifi ,Action",
      date: "June 23, 2022",
      url: {
        name: "zeeshan.aikrux(Amazon)",
        link: "https://www.amazon.in/Zeeshan-Aikrux-Friend-Shaik-Sameeruddin/dp/9356283796",
      },
  
      thumbImage: "images/projects/za-1.jpeg",
      sliderImages: [
        "images/projects/za-2.jpeg",
      ],
      categories: [filters.BRAND],
    },
    {
      title: "Tangent",
      projectInfo:
      "Tangent is an application in which we can share our lifestyle and represent our way of lifestyle and share to various people to try it out and This application allows users to apply digital filters and share their shoot journeys on other social networks and social media platforms and our vision to connect people in not just by providing a platform for chatting and video calling it’s way more than it in which we encourage a lot of creators and content consumers by sending them amazing swags and gifts.",
      industry: "Social Media Platform",
      date: "November 24, 2022",
      // url: {
      //   name: "www.example.com",
      //   link: "https://www.example.com",
      // },
  
      thumbImage: "images/projects/tangent-2.jpeg",
      sliderImages: [
        "images/projects/tangent-1.jpeg",
      ],
      categories: [filters.STARTUPS],
    },
    {
      title: "Project 24",
      projectInfo:
      "A Journey Through Mysteries Adventures",     
   
      industry: "SciFi",
      date: "July 24, 2024",

      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/project24.png",
      // sliderImages: [
      //   "images/projects/project24.jpeg",

      // ],
      categories: [filters.PHOTOS],
    },

    {
      title: "Search Your Space",
      projectInfo:
      "Search your Space is online Platform for Sell, Buy & Rent targeting users need of Spaces, with a safe, reliable, and efficient way for all to find & give space.",     
      technologies: "iOS, Wordpress",
      industry: "Rental & Commercial",
      date: "July 16, 2019",
      url: {
        name: "https://searchyourspace.com/",
        link: "https://www.linkedin.com/company/searchyourspace/",
      },
      // socialLinks: {
      //   facebook: "http://www.facebook.com/",
      //   twitter: "http://www.twitter.com/",
      //   google: "http://www.google.com/",
      //   instagram: "http://www.instagram.com/",
      //   mail: "mailto:example@gmail.com",
      // },
      thumbImage:  "images/projects/sys-main.png",
      sliderImages: [
        "images/projects/sys-4.jpeg" ,   
        "images/projects/sys-0.jpeg",
      ],
      categories: [filters.STARTUPS],
    },
 
  
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
      >
        <div className={"container " + (classicHeader ? "" : "px-lg-5")} style={{height: 'auto' , padding_bottom : '10px'}}>
          {/* Heading */}
          <div className="position-relative d-flex text-center mb-5">
            <h2
              className={
                "text-24  text-uppercase fw-600 w-100 mb-0 " +
                (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
              }
            >
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Work
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            <span className="text-light">Category</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
