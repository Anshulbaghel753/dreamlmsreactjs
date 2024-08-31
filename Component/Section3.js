import React from "react";
import Courses from "../assets/img/course/course-01.jpg"
import User from "../assets/img/user/user1.jpg"
import Lession from "../assets/img/icon/icon-01.svg"
import Rat from "../assets/img/icon/icon-02.svg"
import Fluid from "../assets/img/course/course-02.jpg"
import Profiler from "../assets/img/user/user2.jpg"
import Ship from "../assets/img/icon/icon-01.svg"
import Run from "../assets/img/icon/icon-02.svg"
import Update from "../assets/img/course/course-03.jpg"
import Users from "../assets/img/user/user5.jpg"
import Rent from "../assets/img/course/course-04.jpg"
import Rap from "../assets/img/user/user4.jpg"
import Long from "../assets/img/course/course-05.jpg"
import Ran from "../assets/img/user/user3.jpg"
import Road from "../assets/img/course/course-06.jpg"
import Red from "../assets/img/user/user6.jpg"


export default function Section3() {
  return (
    <section class="section new-course">
      <div class="container">
        <div class="section-header aos" data-aos="fade-up">
          <div class="section-sub-head">
            <span>What’s New</span>
            <h2>Featured Courses</h2>
          </div>
          <div class="all-btn all-category d-flex align-items-center">
            <a href="course-list.html" class="btn btn-primary">
              All Courses
            </a>
          </div>
        </div>
        <div class="section-text aos" data-aos="fade-up">
          <p class="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
            accumsan bibendum gravida maecenas augue elementum et neque.
            Suspendisse imperdiet.
          </p>
        </div>
        <div class="course-feature">
          <div class="row">
            <div class="col-lg-4 col-md-6 d-flex">
              <div class="course-box d-flex aos" data-aos="fade-up">
                <div class="product">
                  <div class="product-img">
                    <a href="course-details.html">
                      <img
                        class="img-fluid"
                        alt
                        src={Courses}
                      />
                    </a>
                    <div class="price">
                      <h3>
                        $300 <span>$99.00</span>
                      </h3>
                    </div>
                  </div>
                  <div class="product-content">
                    <div class="course-group d-flex">
                      <div class="course-group-img d-flex">
                        <a href="instructor-profile.html">
                          <img
                            src={User}
                            alt
                            class="img-fluid"
                          />
                        </a>
                        <div class="course-name">
                          <h4>
                            <a href="instructor-profile.html">Nicole Brown</a>
                          </h4>
                          <p>Instructor</p>
                        </div>
                      </div>
                      <div class="course-share d-flex align-items-center justify-content-center">
                        <a href="#">
                          <i class="fa-regular fa-heart"></i>
                        </a>
                      </div>
                    </div>
                    <h3 class="title instructor-text">
                      <a href="course-details.html">
                        Information About UI/UX Design Degree
                      </a>
                    </h3>
                    <div class="course-info d-flex align-items-center">
                      <div class="rating-img d-flex align-items-center">
                        <img src={Lession} alt />
                        <p>12+ Lesson</p>
                      </div>
                      <div class="course-view d-flex align-items-center">
                        <img src={Rat} alt />
                        <p>9hr 30min</p>
                      </div>
                    </div>
                    <div class="rating">
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star"></i>
                      <span class="d-inline-block average-rating">
                        <span>4.0</span> (15)
                      </span>
                    </div>
                    <div class="all-btn all-category d-flex align-items-center">
                      <a href="checkout.html" class="btn btn-primary">
                        BUY NOW
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 d-flex">
              <div class="course-box d-flex aos" data-aos="fade-up">
                <div class="product">
                  <div class="product-img">
                    <a href="course-details.html">
                      <img
                        class="img-fluid"
                        alt
                        src={Fluid}
                      />
                    </a>
                    <div class="price">
                      <h3>
                        $400 <span>$99.00</span>
                      </h3>
                    </div>
                  </div>
                  <div class="product-content">
                    <div class="course-group d-flex">
                      <div class="course-group-img d-flex">
                        <a href="instructor-profile.html">
                          <img
                            src={Profiler}
                            alt
                            class="img-fluid"
                          />
                        </a>
                        <div class="course-name">
                          <h4>
                            <a href="instructor-profile.html">Jenis R.</a>
                          </h4>
                          <p>Instructor</p>
                        </div>
                      </div>
                      <div class="course-share d-flex align-items-center justify-content-center">
                        <a href="#">
                          <i class="fa-regular fa-heart"></i>
                        </a>
                      </div>
                    </div>
                    <h3 class="title instructor-text">
                      <a href="course-details.html">
                        Wordpress for Beginners - Master Wordpress Quickly
                      </a>
                    </h3>
                    <div class="course-info d-flex align-items-center">
                      <div class="rating-img d-flex align-items-center">
                        <img src={Ship} alt />
                        <p>11+ Lesson</p>
                      </div>
                      <div class="course-view d-flex align-items-center">
                        <img src={Run} alt />
                        <p>6hr 30min</p>
                      </div>
                    </div>
                    <div class="rating">
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star"></i>
                      <span class="d-inline-block average-rating">
                        <span>4.3</span> (15)
                      </span>
                    </div>
                    <div class="all-btn all-category d-flex align-items-center">
                      <a href="checkout.html" class="btn btn-primary">
                        BUY NOW
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 d-flex">
              <div class="course-box d-flex aos" data-aos="fade-up">
                <div class="product">
                  <div class="product-img">
                    <a href="course-details.html">
                      <img
                        class="img-fluid"
                        alt
                        src={Update}
                      />
                    </a>
                    <div class="price combo">
                      <h3>FREE</h3>
                    </div>
                  </div>
                  <div class="product-content">
                    <div class="course-group d-flex">
                      <div class="course-group-img d-flex">
                        <a href="instructor-profile.html">
                          <img
                            src={Users}
                            alt
                            class="img-fluid"
                          />
                        </a>
                        <div class="course-name">
                          <h4>
                            <a href="instructor-profile.html">Jesse Stevens</a>
                          </h4>
                          <p>Instructor</p>
                        </div>
                      </div>
                      <div class="course-share d-flex align-items-center justify-content-center">
                        <a href="#">
                          <i class="fa-regular fa-heart"></i>
                        </a>
                      </div>
                    </div>
                    <h3 class="title instructor-text">
                      <a href="course-details.html">
                        Sketch from A to Z (2022): Become an app designer
                      </a>
                    </h3>
                    <div class="course-info d-flex align-items-center">
                      <div class="rating-img d-flex align-items-center">
                        <img src={Lession} alt />
                        <p>16+ Lesson</p>
                      </div>
                      <div class="course-view d-flex align-items-center">
                        <img src={Rat} alt />
                        <p>12hr 30min</p>
                      </div>
                    </div>
                    <div class="rating">
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star"></i>
                      <span class="d-inline-block average-rating">
                        <span>4.5</span> (15)
                      </span>
                    </div>
                    <div class="all-btn all-category d-flex align-items-center">
                      <a href="checkout.html" class="btn btn-primary">
                        BUY NOW
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 d-flex">
              <div class="course-box d-flex aos" data-aos="fade-up">
                <div class="product">
                  <div class="product-img">
                    <a href="course-details.html">
                      <img
                        class="img-fluid"
                        alt
                        src={Rent}
                      />
                    </a>
                    <div class="price">
                      <h3>
                        $500 <span>$99.00</span>
                      </h3>
                    </div>
                  </div>
                  <div class="product-content">
                    <div class="course-group d-flex">
                      <div class="course-group-img d-flex">
                        <a href="instructor-profile.html">
                          <img
                            src={Rap}
                            alt
                            class="img-fluid"
                          />
                        </a>
                        <div class="course-name">
                          <h4>
                            <a href="instructor-profile.html">Nicole Brown</a>
                          </h4>
                          <p>Instructor</p>
                        </div>
                      </div>
                      <div class="course-share d-flex align-items-center justify-content-center">
                        <a href="#">
                          <i class="fa-regular fa-heart"></i>
                        </a>
                      </div>
                    </div>
                    <h3 class="title instructor-text">
                      <a href="course-details.html">
                        Learn Angular Fundamentals From beginning to advance
                        lavel
                      </a>
                    </h3>
                    <div class="course-info d-flex align-items-center">
                      <div class="rating-img d-flex align-items-center">
                        <img src={Lession} alt />
                        <p>10+ Lesson</p>
                      </div>
                      <div class="course-view d-flex align-items-center">
                        <img src={Rat} alt />
                        <p>8hr 30min</p>
                      </div>
                    </div>
                    <div class="rating">
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star"></i>
                      <span class="d-inline-block average-rating">
                        <span>4.2</span> (15)
                      </span>
                    </div>
                    <div class="all-btn all-category d-flex align-items-center">
                      <a href="checkout.html" class="btn btn-primary">
                        BUY NOW
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 d-flex">
              <div class="course-box d-flex aos" data-aos="fade-up">
                <div class="product">
                  <div class="product-img">
                    <a href="course-details.html">
                      <img
                        class="img-fluid"
                        alt
                        src={Long}
                      />
                    </a>
                    <div class="price">
                      <h3>
                        $300 <span>$99.00</span>
                      </h3>
                    </div>
                  </div>
                  <div class="product-content">
                    <div class="course-group d-flex">
                      <div class="course-group-img d-flex">
                        <a href="instructor-profile.html">
                          <img
                            src={Ran}
                            alt
                            class="img-fluid"
                          />
                        </a>
                        <div class="course-name">
                          <h4>
                            <a href="instructor-profile.html">John Smith</a>
                          </h4>
                          <p>Instructor</p>
                        </div>
                      </div>
                      <div class="course-share d-flex align-items-center justify-content-center">
                        <a href="#">
                          <i class="fa-regular fa-heart"></i>
                        </a>
                      </div>
                    </div>
                    <h3 class="title instructor-text">
                      <a href="course-details.html">
                        Build Responsive Real World Websites with HTML5 and CSS3
                      </a>
                    </h3>
                    <div class="course-info d-flex align-items-center">
                      <div class="rating-img d-flex align-items-center">
                        <img src={Lession} alt />
                        <p>13+ Lesson</p>
                      </div>
                      <div class="course-view d-flex align-items-center">
                        <img src={Rat} alt />
                        <p>10hr 30min</p>
                      </div>
                    </div>
                    <div class="rating">
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star"></i>
                      <span class="d-inline-block average-rating">
                        <span>4.0</span> (15)
                      </span>
                    </div>
                    <div class="all-btn all-category d-flex align-items-center">
                      <a href="checkout.html" class="btn btn-primary">
                        BUY NOW
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 d-flex">
              <div class="course-box d-flex aos" data-aos="fade-up">
                <div class="product">
                  <div class="product-img">
                    <a href="course-details.html">
                      <img
                        class="img-fluid"
                        alt
                        src={Road}
                      />
                    </a>
                    <div class="price combo">
                      <h3>FREE</h3>
                    </div>
                  </div>
                  <div class="product-content">
                    <div class="course-group d-flex">
                      <div class="course-group-img d-flex">
                        <a href="instructor-profile.html">
                          <img
                            src={Red}
                            alt
                            class="img-fluid"
                          />
                        </a>
                        <div class="course-name">
                          <h4>
                            <a href="instructor-profile.html">Stella Johnson</a>
                          </h4>
                          <p>Instructor</p>
                        </div>
                      </div>
                      <div class="course-share d-flex align-items-center justify-content-center">
                        <a href="#">
                          <i class="fa-regular fa-heart"></i>
                        </a>
                      </div>
                    </div>
                    <h3 class="title instructor-text">
                      <a href="course-details.html">
                        C# Developers Double Your Coding Speed with Visual
                        Studio
                      </a>
                    </h3>
                    <div class="course-info d-flex align-items-center">
                      <div class="rating-img d-flex align-items-center">
                        <img src={Lession} alt />
                        <p>7+ Lesson</p>
                      </div>
                      <div class="course-view d-flex align-items-center">
                        <img src={Rat} alt />
                        <p>7hr 30min</p>
                      </div>
                    </div>
                    <div class="rating">
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star"></i>
                      <span class="d-inline-block average-rating">
                        <span>4.6</span> (15)
                      </span>
                    </div>
                    <div class="all-btn all-category d-flex align-items-center">
                      <a href="checkout.html" class="btn btn-primary">
                        BUY NOW
                      </a>
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
}
