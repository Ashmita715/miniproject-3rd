import React from "react";
import "./App.css";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://cdn4.vectorstock.com/i/65/08/disability-employment-work-for-disabled-people-vector-29096508.jpg"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">You believe, We make it happen</h1>
            <p class="demo">
              Job Search
              <img src="https://png.pngtree.com/element_our/20190531/ourmid/pngtree-fashion-search-box-image_1310125.jpg"
              alt=""/>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
