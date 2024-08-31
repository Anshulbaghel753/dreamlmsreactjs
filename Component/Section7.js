import React from 'react'
import Pot from "../assets/img/share.png"

export default function Section7() {
  return (
    <section class="section share-knowledge">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="knowledge-img aos" data-aos="fade-up">
                    <img src={Pot} alt class="img-fluid"/>
                </div>
            </div>
            <div class="col-md-6 d-flex align-items-center">
                <div class="join-mentor aos" data-aos="fade-up">
                    <h2>Want to share your knowledge? Join us a Mentor</h2>
                    <p>High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.</p>
                    <ul class="course-list">
                        <li><i class="fa-solid fa-circle-check"></i>Best Courses</li>
                        <li><i class="fa-solid fa-circle-check"></i>Top rated Instructors</li>
                    </ul>
                    <div class="all-btn all-category d-flex align-items-center">
                        <a href="instructor-list.html" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
