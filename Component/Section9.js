import React from 'react'
import Qute from "../assets/img/qute.png"
import Lam from "../assets/img/qute-01.png"
import Rok from "../assets/img/user/user1.jpg"
import Tak from "../assets/img/user/user3.jpg"
import Cock from "../assets/img/user/user2.jpg"

export default function Section9() {
  return (
    <section class="testimonial-four">
    <div class="review">
        <div class="container">
            <div class="testi-quotes">
                <img src={Qute} alt/>
            </div>
            <div class="mentor-testimonial lazy slider aos" data-aos="fade-up" data-sizes="50vw ">
                <div class="d-flex justify-content-center">
                    <div class="testimonial-all d-flex justify-content-center">
                        <div class="testimonial-two-head text-center align-items-center d-flex">
                            <div class="testimonial-four-saying ">
                                <div class="testi-right">
                                    <img src={Lam} alt/>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                                    it to make a type specimen book.</p>
                                <div class="four-testimonial-founder">
                                    <div class="fount-about-img">
                                        <a href="instructor-profile.html"><img src={Rok} alt class="img-fluid"/></a>
                                    </div>
                                    <h3><a href="instructor-profile.html">Daziy Millar</a></h3>
                                    <span>Founder of Awesomeux Technology</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <div class="testimonial-all d-flex justify-content-center">
                        <div class="testimonial-two-head text-center align-items-center d-flex">
                            <div class="testimonial-four-saying ">
                                <div class="testi-right">
                                    <img src={Lam} alt/>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                                    it to make a type specimen book.</p>
                                <div class="four-testimonial-founder">
                                    <div class="fount-about-img">
                                        <a href="instructor-profile.html"><img src={Tak} alt class="img-fluid"/></a>
                                    </div>
                                    <h3><a href="instructor-profile.html">john smith</a></h3>
                                    <span>Founder of Awesomeux Technology</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <div class="testimonial-all d-flex justify-content-center">
                        <div class="testimonial-two-head text-center align-items-center d-flex">
                            <div class="testimonial-four-saying ">
                                <div class="testi-right">
                                    <img src={Lam} alt/>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                                    it to make a type specimen book.</p>
                                <div class="four-testimonial-founder">
                                    <div class="fount-about-img">
                                        <a href="instructor-profile.html"><img src={Cock} alt class="img-fluid"/></a>
                                    </div>
                                    <h3><a href="instructor-profile.html">David Lee</a></h3>
                                    <span>Founder of Awesomeux Technology</span>
                                </div>
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
