import React from 'react'
import pencil from "../assets/img/pencil-icon.svg"
import Course from "../assets/img/cources-icon.svg"
import Certificate from "../assets/img/certificate-icon.svg"
import Graduate from "../assets/img/gratuate-icon.svg"
export default function Section1() {
  return (
    <section class="section student-course">
    <div class="container">
        <div class="course-widget">
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="course-full-width">
                        <div class="blur-border course-radius align-items-center aos" data-aos="fade-up">
                            <div class="online-course d-flex align-items-center">
                                <div class="course-img">
                                    <img src={pencil} alt="pencil"/>
                                </div>
                                <div class="course-inner-content">
                                    <h4><span>10</span>K</h4>
                                    <p>Online Courses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 d-flex">
                    <div class="course-full-width">
                        <div class="blur-border course-radius aos" data-aos="fade-up">
                            <div class="online-course d-flex align-items-center">
                                <div class="course-img">
                                    <img src={Course} alt/>
                                </div>
                                <div class="course-inner-content">
                                    <h4><span>200</span>+</h4>
                                    <p>Expert Tutors</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 d-flex">
                    <div class="course-full-width">
                        <div class="blur-border course-radius aos" data-aos="fade-up">
                            <div class="online-course d-flex align-items-center">
                                <div class="course-img">
                                    <img src={Certificate} alt/>
                                </div>
                                <div class="course-inner-content">
                                    <h4><span>6</span>K+</h4>
                                    <p>Ceritified Courses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 d-flex">
                    <div class="course-full-width">
                        <div class="blur-border course-radius aos" data-aos="fade-up">
                            <div class="online-course d-flex align-items-center">
                                <div class="course-img">
                                    <img src={Graduate} alt/>
                                </div>
                                <div class="course-inner-content">
                                    <h4><span>60</span>K +</h4>
                                    <p>Online Students</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
};
