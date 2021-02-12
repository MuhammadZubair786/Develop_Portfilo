import React from "react";
import img1 from "../img/p1.jpg";
import img2 from "../img/p2.jpg";
import img3 from "../img/p3.jpg";
import img4 from "../img/p4.jpg";
import img5 from "../img/res.PNG";
import img6 from "../img/iphone.jpg";
import img7 from '../img/chatapp.PNG';
import img8 from '../img/fastfood.jpg'
import img9 from '../img/react_todo.jpg'
import hd from "../img/hdd.png";




// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                             portfolio
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================

export default function Portfolio() {
  return (
    <section name="portfolio" name="portfolio" className="portfolio">



{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
{/*                                  heading                                  */}
{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
      <div className="heading">
        <h1>PORTFOLIO</h1>
        <img src={hd} />
      </div>
      <br />
      <br />
      <br />



{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
{/*                                   cards                                   */}
{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}

      <div className="container">
        <div className="row">



          <div className="col-md-4">
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <div class="card mb-5 shadow ml-3 mr-3">
                <img
                  class="card-img-top pl-4 pr-4"
                  src={img1}
                  alt="Card image cap"
                />
                <div class="card-body text-center">
                  <h5 class="card-title">Expense Tracker</h5>
                  <a
                    href="https://expense-tracker-app-by-muhammad-zubair.netlify.app/"
                    target="_blank"
                  >
                    <i class="fa fa-external-link" aria-hidden="true"></i>
                  </a>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  <a
                    href="https://github.com/MuhammadZubair786/expense-tracker"
                    target="_blank"
                  >
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>



          <div className="col-md-4">
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <div class="card mb-5 shadow ml-3 mr-3">
                <img
                  class="card-img-top pl-4 pr-4"
                  src={img2}
                  alt="Card image cap"
                />
                <div class="card-body text-center">
                  <h5 class="card-title">Covid-19 Tracker</h5>
                  <a
                    href="http://covid_19_by_zubair.surge.sh/"
                    target="_blank"
                  >
                    <i class="fa fa-external-link" aria-hidden="true"></i>
                  </a>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  <a
                    href="https://github.com/MuhammadZubair786/covid19_tracker"
                    target="_blank"
                  >
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>



          <div className="col-md-4">
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <div class="card mb-5 shadow ml-3 mr-3">
                <img
                  class="card-img-top pl-4 pr-4"
                  src={img3}
                  alt="Card image cap"
                />
                <div class="card-body text-center">
                  <h5 class="card-title">Shoe Store</h5>
                  <a href="http://shoes_project_by_zubair.surge.sh/" target="_blank">
                    <i class="fa fa-external-link" aria-hidden="true"></i>
                  </a>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  <a
                    href="https://github.com/MuhammadZubair786/Shoes_React_Project"
                    target="_blank"
                  >
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>



          <div className="col-md-4">
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <div class="card mb-5 shadow ml-3 mr-3">
                <img
                  class="card-img-top pl-4 pr-4"
                  src={img4}
                  alt="Card image cap"
                />
                <div class="card-body text-center">
                  <h5 class="card-title">OLX clone</h5>
                  <a href="https://olx-website-8a25c.web.app/" target="_blank">
                    <i class="fa fa-external-link" aria-hidden="true"></i>
                  </a>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  <a href="https://github.com/MuhammadZubair786/OLX_WEB" target="_blank">
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>




          <div className="col-md-4">
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <div class="card mb-5 shadow ml-3 mr-3 ">
                <img
                  class="card-img-top pl-4 pr-4"
                  src={img5}
                  alt="Card image cap"
                  height='180px'
                />
                <div class="card-body text-center">
                  <h5 class="card-title">Food Dilivery App</h5>
                  <a
                    href="https://muhammadzubair786.github.io/Resturant-Website/"
                    target="_blank"
                  >
                    <i class="fa fa-external-link" aria-hidden="true"></i>
                  </a>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  <a
                    href="https://github.com/MuhammadZubair786/Resturant-Website"
                    target="_blank"
                  >
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>


          <div className="col-md-4">
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <div class="card mb-5 shadow ml-3 mr-3">
                <img
                  class="card-img-top pl-4 pr-4"
                  src={img7}
                  alt="Card image cap"
                  height='180px'
                />
                <div class="card-body text-center">
                  <h5 class="card-title">Chat App</h5>
                  <a href="https://chat-app-edb95.web.app/" target="_blank">
                    <i class="fa fa-external-link" aria-hidden="true"></i>
                  </a>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  <a href="https://github.com/MuhammadZubair786/Chat-App-Code" target="_blank">
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>





          <div className="col-md-4">
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <div class="card mb-5 shadow ml-3 mr-3">
                <img
                  class="card-img-top pl-4 pr-4"
                  src={img6}
                  alt="Card image cap"
                  height='180px'
                />
                <div class="card-body text-center">
                  <h5 class="card-title">Apple Website</h5>
                  <a
                    href="https://apple-website-38458.web.app/index.html"
                    target="_blank"
                  >
                    <i class="fa fa-external-link" aria-hidden="true"></i>
                  </a>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  <a
                    href="https://github.com/Maryam-bit/My-portfolio"
                    target="_blank"
                  >
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          
          <div className="col-md-4">
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <div class="card mb-5 shadow ml-3 mr-3">
                <img
                  class="card-img-top pl-4 pr-4"
                  src={img8}
                  alt="Card image cap"
                  height='180px'
                />
                <div class="card-body text-center">
                  <h5 class="card-title">Food Resturant Website</h5>
                  <a
                    href="https://resutrant-website.web.app/"
                    target="_blank"
                  >
                    <i class="fa fa-external-link" aria-hidden="true"></i>
                  </a>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {/* <a
                    href=""
                    target="_blank"
                  > */}
                    <i class="fa fa-github" aria-hidden="true"></i>
                  {/* </a> */}
                </div>
              </div>
            </div>
          </div>


          <div className="col-md-4">
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <div class="card mb-5 shadow ml-3 mr-3">
                <img
                  class="card-img-top pl-4 pr-4"
                  src={img9}
                  alt="Card image cap"
                  height='180px'
                />
                <div class="card-body text-center">
                  <h5 class="card-title">React TODO App</h5>
                  <a
                    href="https://react-todo-52fa4.web.app/"
                    target="_blank"
                  >
                    <i class="fa fa-external-link" aria-hidden="true"></i>
                  </a>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {/* <a
                    href="https://github.com/Maryam-bit/My-portfolio"
                    target="_blank"
                  > */}
                    <i class="fa fa-github" aria-hidden="true"></i>
                  {/* </a> */}
                </div>
              </div>
            </div>
          </div>



        </div>



{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
{/*                                 button                                  */}
{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
<br/>

        <div className="moreProj text-center">
        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <a href="https://github.com/MuhammadZubair786" target="_blank">
            <button className="btn btn-light">More Projects</button>
          </a>
          </div>
        </div>

      
      </div>
    </section>
  );
}
