"use client";

import { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleTab === 1
                ? "qualification__button qualification__active button-flex"
                : "qualification__button button-flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleTab === 2
                ? "qualification__button qualification__active button-flex"
                : "qualification__button button-flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Complete Web Development
                </h3>
                <span className="qualification__subtitle">
                  Programming Hero
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Computer Science Engineering
                </h3>
                <span className="qualification__subtitle">
                  Royal University of Dhaka
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">H.S.C</h3>
                <span className="qualification__subtitle">Dhaka College</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2010
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Engineer</h3>
                <span className="qualification__subtitle">
                  JRF Intelligence Co Ltd.
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2023 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Operation Officer</h3>
                <span className="qualification__subtitle">
                  Daraz Bangladesh Ltd.
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2020 - 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
