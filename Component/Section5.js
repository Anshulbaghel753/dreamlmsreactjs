import React from "react";
import Rose from "../assets/img/course/course-07.jpg";
import Pen from "../assets/img/user/user.jpg"
import Ran from "../assets/img/icon/icon-01.svg"
import Rope from "../assets/img/icon/icon-02.svg"
import Man from "../assets/img/course/course-08.jpg"
import Pic from "../assets/img/user/user2.jpg"
import Friend from "../assets/img/course/course-05.jpg"
import Puma from "../assets/img/user/user3.jpg"
import Add from "../assets/img/user/user5.jpg"
import Enter from "../assets/img/course/course-07.jpg"
import Pam from "../assets/img/user/user2.jpg"
import Pric from "../assets/img/course/course-09.jpg"
import Pag from "../assets/img/user/user4.jpg"
import Pack from "../assets/img/user/user1.jpg"
import Wid from "../assets/img/user/user9.jpg"
import Wim from "../assets/img/user/user7.jpg"
import Wip from "../assets/img/user/user8.jpg"
import Dot from "../assets/img/user/user10.jpg"

export default function Section5() {
  return (
    <section class="section trend-course">
      <div class="container">
        <div class="section-header aos" data-aos="fade-up">
          <div class="section-sub-head">
            <span>What’s New</span>
            <h2>TRENDING COURSES</h2>
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
        <div
          class="owl-carousel trending-course owl-theme aos"
          data-aos="fade-up"
        >
          <div class="course-box trend-box">
            <div class="product trend-product">
              <div class="product-img">
                <a href="course-details.html">
                  <img class="img-fluid" alt src={Rose} />
                </a>
                <div class="price">
                  <h3>
                    $200 <span>$99.00</span>
                  </h3>
                </div>
              </div>
              <div class="product-content">
                <div class="course-group d-flex">
                  <div class="course-group-img d-flex">
                    <a href="instructor-profile.html">
                      <img
                        src={Pen}
                        alt
                        class="img-fluid"
                      />
                    </a>
                    <div class="course-name">
                      <h4>
                        <a href="instructor-profile.html">John Michael</a>
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
                <h3 class="title">
                  <a href="course-details.html">
                    Learn JavaScript and Express to become a professional
                    JavaScript
                  </a>
                </h3>
                <div class="course-info d-flex align-items-center">
                  <div class="rating-img d-flex align-items-center">
                    <img
                      src={Ran}
                      alt
                      class="img-fluid"
                    />
                    <p>13+ Lesson</p>
                  </div>
                  <div class="course-view d-flex align-items-center">
                    <img
                      src={Rope}
                      alt
                      class="img-fluid"
                    />
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
          <div class="course-box trend-box">
            <div class="product trend-product">
              <div class="product-img">
                <a href="course-details.html">
                  <img
                    class="img-fluid"
                    alt
                    src={Man}
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
                        src={Pic}
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
                <h3 class="title">
                  <a href="course-details.html">
                    Responsive Web Design Essentials HTML5 CSS3 and Bootstrap
                  </a>
                </h3>
                <div class="course-info d-flex align-items-center">
                  <div class="rating-img d-flex align-items-center">
                    <img
                      src={Ran}
                      alt
                      class="img-fluid"
                    />
                    <p>10+ Lesson</p>
                  </div>
                  <div class="course-view d-flex align-items-center">
                    <img
                      src={Rope}
                      alt
                      class="img-fluid"
                    />
                    <p>11hr 30min</p>
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
          <div class="course-box trend-box">
            <div class="product trend-product">
              <div class="product-img">
                <a href="course-details.html">
                  <img
                    class="img-fluid"
                    alt
                    src={Friend}
                  />
                </a>
                <div class="price">
                  <h3>
                    $100 <span>$99.00</span>
                  </h3>
                </div>
              </div>
              <div class="product-content">
                <div class="course-group d-flex">
                  <div class="course-group-img d-flex">
                    <a href="instructor-profile.html">
                      <img
                        src={Puma}
                        alt
                        class="img-fluid"
                      />
                    </a>
                    <div class="course-name">
                      <h4>
                        <a href="instructor-profile.html">Lavern M.</a>
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
                <h3 class="title">
                  <a href="course-details.html">
                    The Complete App Design Course - UX, UI and Design Thinking
                  </a>
                </h3>
                <div class="course-info d-flex align-items-center">
                  <div class="rating-img d-flex align-items-center">
                    <img
                      src={Ran}
                      alt
                      class="img-fluid"
                    />
                    <p>8+ Lesson</p>
                  </div>
                  <div class="course-view d-flex align-items-center">
                    <img
                      src={Rope}
                      alt
                      class="img-fluid"
                    />
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
          <div class="course-box trend-box">
            <div class="product trend-product">
              <div class="product-img">
                <a href="course-details.html">
                  <img
                    class="img-fluid"
                    alt
                    src={Man}
                  />
                </a>
                <div class="price">
                  <h3>
                    $200 <span>$99.00</span>
                  </h3>
                </div>
              </div>
              <div class="product-content">
                <div class="course-group d-flex">
                  <div class="course-group-img d-flex">
                    <a href="instructor-profile.html">
                      <img
                        src={Add}
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
                <h3 class="title">
                  <a href="course-details.html">
                    Build Responsive Real World Websites with HTML5 and CSS3
                  </a>
                </h3>
                <div class="course-info d-flex align-items-center">
                  <div class="rating-img d-flex align-items-center">
                    <img
                      src={Ran}
                      alt
                      class="img-fluid"
                    />
                    <p>13+ Lesson</p>
                  </div>
                  <div class="course-view d-flex align-items-center">
                    <img
                      src={Rope}
                      alt
                      class="img-fluid"
                    />
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
          <div class="course-box trend-box">
            <div class="product trend-product">
              <div class="product-img">
                <a href="course-details.html">
                  <img
                    class="img-fluid"
                    alt
                    src={Enter}
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
                        src={Pam}
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
                <h3 class="title">
                  <a href="course-details.html">
                    Responsive Web Design Essentials HTML5 CSS3 and Bootstrap
                  </a>
                </h3>
                <div class="course-info d-flex align-items-center">
                  <div class="rating-img d-flex align-items-center">
                    <img
                      src={Ran}
                      alt
                      class="img-fluid"
                    />
                    <p>10+ Lesson</p>
                  </div>
                  <div class="course-view d-flex align-items-center">
                    <img
                      src={Rope}
                      alt
                      class="img-fluid"
                    />
                    <p>11hr 30min</p>
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
          <div class="course-box trend-box">
            <div class="product trend-product">
              <div class="product-img">
                <a href="course-details.html">
                  <img
                    class="img-fluid"
                    alt
                    src={Pric}
                  />
                </a>
                <div class="price">
                  <h3>
                    $100 <span>$99.00</span>
                  </h3>
                </div>
              </div>
              <div class="product-content">
                <div class="course-group d-flex">
                  <div class="course-group-img d-flex">
                    <a href="instructor-profile.html">
                      <img
                        src={Pag}
                        alt
                        class="img-fluid"
                      />
                    </a>
                    <div class="course-name">
                      <h4>
                        <a href="instructor-profile.html">Lavern M.</a>
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
                <h3 class="title">
                  <a href="course-details.html">
                    The Complete App Design Course - UX, UI and Design Thinking
                  </a>
                </h3>
                <div class="course-info d-flex align-items-center">
                  <div class="rating-img d-flex align-items-center">
                    <img
                      src={Ran}
                      alt
                      class="img-fluid"
                    />
                    <p>8+ Lesson</p>
                  </div>
                  <div class="course-view d-flex align-items-center">
                    <img
                      src={Rope}
                      alt
                      class="img-fluid"
                    />
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
          <div class="course-box trend-box">
            <div class="product trend-product">
              <div class="product-img">
                <a href="course-details.html">
                  <img
                    class="img-fluid"
                    alt
                    src={Man}
                  />
                </a>
                <div class="price">
                  <h3>
                    $200 <span>$99.00</span>
                  </h3>
                </div>
              </div>
              <div class="product-content">
                <div class="course-group d-flex">
                  <div class="course-group-img d-flex">
                    <a href="instructor-profile.html">
                      <img
                        src={Pack}
                        alt
                        class="img-fluid"
                      />
                    </a>
                    <div class="course-name">
                      <h4>
                        <a href="instructor-profile.html">John Michael</a>
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
                <h3 class="title">
                  <a href="course-details.html">
                    Learn JavaScript and Express to become a professional
                    JavaScript
                  </a>
                </h3>
                <div class="course-info d-flex align-items-center">
                  <div class="rating-img d-flex align-items-center">
                    <img
                      src={Ran}
                      alt
                      class="img-fluid"
                    />
                    <p>13+ Lesson</p>
                  </div>
                  <div class="course-view d-flex align-items-center">
                    <img
                      src={Rope}
                      alt
                      class="img-fluid"
                    />
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
          <div class="course-box trend-box">
            <div class="product trend-product">
              <div class="product-img">
                <a href="course-details.html">
                  <img
                    class="img-fluid"
                    alt
                    src={Pric}
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
                        src={Puma}
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
                <h3 class="title">
                  <a href="course-details.html">
                    Responsive Web Design Essentials HTML5 CSS3 and Bootstrap
                  </a>
                </h3>
                <div class="course-info d-flex align-items-center">
                  <div class="rating-img d-flex align-items-center">
                    <img
                      src={Ran}
                      alt
                      class="img-fluid"
                    />
                    <p>10+ Lesson</p>
                  </div>
                  <div class="course-view d-flex align-items-center">
                    <img
                      src={Rope}
                      alt
                      class="img-fluid"
                    />
                    <p>11hr 30min</p>
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

        <div class="feature-instructors">
          <div class="section-header aos" data-aos="fade-up">
            <div class="section-sub-head feature-head text-center">
              <h2>Featured Instructor</h2>
              <div class="section-text aos" data-aos="fade-up">
                <p class="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                  aenean accumsan bibendum gravida maecenas augue elementum et
                  neque. Suspendisse imperdiet.
                </p>
              </div>
            </div>
          </div>
          <div
            class="owl-carousel instructors-course owl-theme aos"
            data-aos="fade-up"
          >
            <div class="instructors-widget">
              <div class="instructors-img ">
                <a href="instructor-list.html">
                  <img class="img-fluid" alt src={Wim} />
                </a>
              </div>
              <div class="instructors-content text-center">
                <h5>
                  <a href="instructor-profile.html">David Lee</a>
                </h5>
                <p>Web Developer</p>
                <div class="student-count d-flex justify-content-center">
                  <i class="fa-solid fa-user-group"></i>
                  <span>50 Students</span>
                </div>
              </div>
            </div>
            <div class="instructors-widget">
              <div class="instructors-img">
                <a href="instructor-list.html">
                  <img class="img-fluid" alt src={Wip} />
                </a>
              </div>
              <div class="instructors-content text-center">
                <h5>
                  <a href="instructor-profile.html">Daziy Millar</a>
                </h5>
                <p>PHP Expert</p>
                <div class="student-count d-flex justify-content-center">
                  <i class="fa-solid fa-user-group yellow"></i>
                  <span>50 Students</span>
                </div>
              </div>
            </div>
            <div class="instructors-widget">
              <div class="instructors-img">
                <a href="instructor-list.html">
                  <img class="img-fluid" alt src={Wid}/>
                </a>
              </div>
              <div class="instructors-content text-center">
                <h5>
                  <a href="instructor-profile.html">Patricia Mendoza</a>
                </h5>
                <p>Web Developer</p>
                <div class="student-count d-flex justify-content-center">
                  <i class="fa-solid fa-user-group violet"></i>
                  <span>50 Students</span>
                </div>
              </div>
            </div>
            <div class="instructors-widget">
              <div class="instructors-img">
                <a href="instructor-list.html">
                  <img class="img-fluid" alt src={Dot} />
                </a>
              </div>
              <div class="instructors-content text-center">
                <h5>
                  <a href="instructor-profile.html">Skyler Whites</a>
                </h5>
                <p>UI Designer</p>
                <div class="student-count d-flex justify-content-center">
                  <i class="fa-solid fa-user-group orange"></i>
                  <span>50 Students</span>
                </div>
              </div>
            </div>
            <div class="instructors-widget">
              <div class="instructors-img ">
                <a href="instructor-list.html">
                  <img class="img-fluid" alt src={Wim} />
                </a>
              </div>
              <div class="instructors-content text-center">
                <h5>
                  <a href="instructor-profile.html">Patricia Mendoza</a>
                </h5>
                <p>Java Developer</p>
                <div class="student-count d-flex justify-content-center">
                  <i class="fa-solid fa-user-group"></i>
                  <span>40 Students</span>
                </div>
              </div>
            </div>
            <div class="instructors-widget">
              <div class="instructors-img">
                <a href="instructor-list.html">
                  <img class="img-fluid" alt src={Wip} />
                </a>
              </div>
              <div class="instructors-content text-center">
                <h5>
                  <a href="instructor-profile.html">David Lee</a>
                </h5>
                <p>Web Developer</p>
                <div class="student-count d-flex justify-content-center">
                  <i class="fa-solid fa-user-group"></i>
                  <span>50 Students</span>
                </div>
              </div>
            </div>
            <div class="instructors-widget">
              <div class="instructors-img ">
                <a href="instructor-list.html">
                  <img class="img-fluid" alt src={Wid} />
                </a>
              </div>
              <div class="instructors-content text-center">
                <h5>
                  <a href="instructor-profile.html">Daziy Millar</a>
                </h5>
                <p>PHP Expert</p>
                <div class="student-count d-flex justify-content-center">
                  <i class="fa-solid fa-user-group"></i>
                  <span>40 Students</span>
                </div>
              </div>
            </div>
            <div class="instructors-widget">
              <div class="instructors-img ">
                <a href="instructor-list.html">
                  <img class="img-fluid" alt src={Dot} />
                </a>
              </div>
              <div class="instructors-content text-center">
                <h5>
                  <a href="instructor-profile.html">Patricia Mendoza</a>
                </h5>
                <p>Web Developer</p>
                <div class="student-count d-flex justify-content-center">
                  <i class="fa-solid fa-user-group"></i>
                  <span>20 Students</span>
                </div>
              </div>
            </div>
            <div class="instructors-widget">
              <div class="instructors-img ">
                <a href="instructor-list.html">
                  <img class="img-fluid" alt src={Wim} />
                </a>
              </div>
              <div class="instructors-content text-center">
                <h5>
                  <a href="instructor-profile.html">Skyler Whites</a>
                </h5>
                <p>UI Designer</p>
                <div class="student-count d-flex justify-content-center">
                  <i class="fa-solid fa-user-group"></i>
                  <span>30 Students</span>
                </div>
              </div>
            </div>
            <div class="instructors-widget">
              <div class="instructors-img">
                <a href="instructor-list.html">
                  <img class="img-fluid" alt src={Wip} />
                </a>
              </div>
              <div class="instructors-content text-center">
                <h5>
                  <a href="instructor-profile.html">Patricia Mendoza</a>
                </h5>
                <p>Java Developer</p>
                <div class="student-count d-flex justify-content-center">
                  <i class="fa-solid fa-user-group"></i>
                  <span>40 Students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
