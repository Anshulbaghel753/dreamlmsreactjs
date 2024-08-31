import React from 'react'
import Bat from "../assets/img/become-02.png"
import Net from "../assets/img/become-01.png"

export default function Section10() {
  return (
    <section class="section become-instructors aos" data-aos="fade-up">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 d-flex">
                        <div class="student-mentor cube-instuctor ">
                            <h4>Become An Instructor</h4>
                            <div class="row">
                                <div class="col-lg-7 col-md-12">
                                    <div class="top-instructors">
                                        <p>Top instructors from around the world teach millions of students on Mentoring.</p>
                                    </div>
                                </div>
                                <div class="col-lg-5 col-md-12">
                                    <div class="mentor-img">
                                        <img class="img-fluid" alt src={Bat}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 d-flex">
                        <div class="student-mentor yellow-mentor">
                            <h4>Transform Access To Education</h4>
                            <div class="row">
                                <div class="col-lg-8 col-md-12">
                                    <div class="top-instructors">
                                        <p>Create an account to receive our newsletter, course recommendations and promotions.</p>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-12">
                                    <div class="mentor-img">
                                        <img class="img-fluid" alt src={Net}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

  )
}
