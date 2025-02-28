import React from 'react'
import Rop from "../assets/img/icon/icon-1.svg"
import Ram from "../assets/img/icon/icon-2.svg"
import Dark from "../assets/img/icon/icon-3.svg"
import Park from "../assets/img/icon/icon-4.svg"
import Pet from "../assets/img/join.png"

export default function Section4() {
  return (
    <section class="section master-skill">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 col-md-12">
                <div class="section-header aos" data-aos="fade-up">
                    <div class="section-sub-head">
                        <span>What’s New</span>
                        <h2>Master the skills to drive your career</h2>
                    </div>
                </div>
                <div class="section-text aos" data-aos="fade-up">
                    <p>Get certified, master modern tech skills, and level up your career — whether you’re starting out or a seasoned pro. 95% of eLearning learners report our hands-on content directly helped their careers.</p>
                </div>
                <div class="career-group aos" data-aos="fade-up">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 d-flex">
                            <div class="certified-group blur-border d-flex">
                                <div class="get-certified d-flex align-items-center">
                                    <div class="blur-box">
                                        <div class="certified-img ">
                                            <img src={Rop} alt class="img-fluid"/>
                                        </div>
                                    </div>
                                    <p>Stay motivated with engaging instructors</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 d-flex">
                            <div class="certified-group blur-border d-flex">
                                <div class="get-certified d-flex align-items-center">
                                    <div class="blur-box">
                                        <div class="certified-img ">
                                            <img src={Ram} alt class="img-fluid"/>
                                        </div>
                                    </div>
                                    <p>Keep up with in the latest in cloud</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 d-flex">
                            <div class="certified-group blur-border d-flex">
                                <div class="get-certified d-flex align-items-center">
                                    <div class="blur-box">
                                        <div class="certified-img ">
                                            <img src={Dark} alt class="img-fluid"/>
                                        </div>
                                    </div>
                                    <p>Get certified with 100+ certification courses</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 d-flex">
                            <div class="certified-group blur-border d-flex">
                                <div class="get-certified d-flex align-items-center">
                                    <div class="blur-box">
                                        <div class="certified-img ">
                                            <img src={Park} alt class="img-fluid"/>
                                        </div>
                                    </div>
                                    <p>Build skills your way, from labs to courses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 col-md-12 d-flex align-items-end">
                <div class="career-img aos" data-aos="fade-up">
                    <img src={Pet} alt class="img-fluid"/>
                </div>
            </div>
        </div>
    </div>
</section>

  );
};
