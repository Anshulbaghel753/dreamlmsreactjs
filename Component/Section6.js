import React from 'react'
import Pain from "../assets/img/lead-01.png"
import Paint from "../assets/img/lead-02.png"
import Lap from "../assets/img/lead-03.png"
import Top from "../assets/img/lead-04.png"
import Page from "../assets/img/lead-05.png"
import Pad from "../assets/img/lead-06.png"

export default function Section6() {
  return (
    <section class="section lead-companies">
    <div class="container">
        <div class="section-header aos" data-aos="fade-up">
            <div class="section-sub-head feature-head text-center">
                <span>Trusted By</span>
                <h2>500+ Leading Universities And Companies</h2>
            </div>
        </div>
        <div class="lead-group aos" data-aos="fade-up">
            <div class="lead-group-slider owl-carousel owl-theme">
                <div class="item">
                    <div class="lead-img">
                        <img class="img-fluid" alt src={Pain}/>
                    </div>
                </div>
                <div class="item">
                    <div class="lead-img">
                        <img class="img-fluid" alt src={Paint}/>
                    </div>
                </div>
                <div class="item">
                    <div class="lead-img">
                        <img class="img-fluid" alt src={Lap}/>
                    </div>
                </div>
                <div class="item">
                    <div class="lead-img">
                        <img class="img-fluid" alt src={Top}/>
                    </div>
                </div>
                <div class="item">
                    <div class="lead-img">
                        <img class="img-fluid" alt src={Page}/>
                    </div>
                </div>
                <div class="item">
                    <div class="lead-img">
                        <img class="img-fluid" alt src={Pad}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
};
