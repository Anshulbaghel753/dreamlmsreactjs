import React from "react";
import Logo from "../assets/img/logo.svg"
import Talk from "../assets/img/icon/icon-20.svg"
import Flue from "../assets/img/icon/icon-21.svg"
import Load from "../assets/img/icon/icon-19.svg"

export default function Footer() {
  return (
    <footer class="footer">
      <div class="footer-top aos" data-aos="fade-up">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="footer-widget footer-about">
                <div class="footer-logo">
                  <img src={Logo} alt="logo" />
                </div>
                <div class="footer-about-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    consequat mauris Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Ut consequat mauris
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-6">
              <div class="footer-widget footer-menu">
                <h2 class="footer-title">For Instructor</h2>
                <ul>
                  <li>
                    <a href="instructor-profile.html">Profile</a>
                  </li>
                  <li>
                    <a href="login.html">Login</a>
                  </li>
                  <li>
                    <a href="register.html">Register</a>
                  </li>
                  <li>
                    <a href="instructor-list.html">Instructor</a>
                  </li>
                  <li>
                    <a href="deposit-instructor-dashboard.html"> Dashboard</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-6">
              <div class="footer-widget footer-menu">
                <h2 class="footer-title">For Student</h2>
                <ul>
                  <li>
                    <a href="student-profile.html">Profile</a>
                  </li>
                  <li>
                    <a href="login.html">Login</a>
                  </li>
                  <li>
                    <a href="register.html">Register</a>
                  </li>
                  <li>
                    <a href="students-list.html">Student</a>
                  </li>
                  <li>
                    <a href="deposit-student-dashboard.html"> Dashboard</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="footer-widget footer-contact">
                <h2 class="footer-title">News letter</h2>
                <div class="news-letter">
                  <form>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your email address"
                      name="email"
                    />
                  </form>
                </div>
                <div class="footer-contact-info">
                  <div class="footer-address">
                    <img
                      src={Talk}
                      alt
                      class="img-fluid"
                    />
                    <p>
                      {" "}
                      3556 Beech Street, San Francisco,
                      <br /> California, CA 94108{" "}
                    </p>
                  </div>
                  <p>
                    <img
                      src={Load}
                      alt
                      class="img-fluid"
                    />
                    <a
                      href="/cdn-cgi/l/email-protection"
                      class="__cf_email__"
                      data-cfemail="a0c4d2c5c1cdd3cccdd3e0c5d8c1cdd0ccc58ec3cfcd"
                    >
                      [email&#160;protected]
                    </a>
                  </p>
                  <p class="mb-0">
                    <img
                      src={Flue}
                      alt
                      class="img-fluid"
                    />{" "}
                    +19 123-456-7890
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">
          <div class="copyright">
            <div class="row">
              <div class="col-md-6">
                <div class="privacy-policy">
                  <ul>
                    <li>
                      <a href="term-condition.html">Terms</a>
                    </li>
                    <li>
                      <a href="privacy-policy.html">Privacy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6">
                <div class="copyright-text">
                  <p class="mb-0">
                    &copy; 2023 DreamsLMS. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
