import React, { useRef, useEffect } from "react";
import img from "../img/img2.jpg";
import hd from "../img/hdd.png";
import { Animated } from "react-animated-css";


// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                                ABOUT
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================

export default function About() {


// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                              Animation
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================


  const myImg = useRef(null);
  useEffect(() => {
    myImg.current.animate(
      [
        { transform: "translate(40px, 0)" },
        { transform: "translate(10px, -30px)" },
        { transform: "translate(40px, 0)" },
      ],
      {
        duration: 4300,
        iterations: Infinity,
        yoyo: Infinity,
        animationTimingFunction: "linear",
        playbackRate: -30,
      }
    );
  });



  return (
    <section name="about" id="about" class="about">




{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
{/*                                  heading                                  */}
{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}

      <div className="heading pt-5">
        <h1>ABOUT ME</h1>
        <img src={hd} />
      </div>


      <div className="container-fluid mt-4">
        <div className="row">




{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
{/*                                   image                                  */}
{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}

          <div className="col-md-5 img mt-4 " style={{ textAlign: "center" }}>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img
                ref={myImg}
                width="216px"
                src={img}
                style={{
                  position: "relative",
                  left: 7,
                  top: "1px",
                  borderRadius: 9,
                }}
                className=" mt-5"
              />
              <span className="imgBorder"></span>
            </div>
          </div>




{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
{/*                                 About me                                  */}
{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}

          <div className="col-md-6 text mt-3 pt-3">
            <p className="aboutme">
            I'm a Full Stack Developer and Also Graphics Designer Fast load times 
            and lag free interaction, my highest priority. My layouts will work on any device, 
            big or small. Websites don't have to be static, I love making pages come to life. 
            I complete My Work on Time.
            I am Not any Excuse About My Work.I'm Serious With My work
            </p>
            <br />
            <div className="container-fluid" style={{ marginLeft: "-17px" }}>
              <div className="row">
                <div className="col-md-6">
                  <span className="title">NAME:</span>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  <span className="word">Muhammad Zubair Minhas</span>
                </div>
                <div className="col-md-6">
                  <span className="title">JOB TITLE:</span>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  <span className="word">Mern Stack Developer</span>
                </div>
              </div>
            </div>
            <br />
            <br />




{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
{/*                                  button                                   */}
{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}

            <div
              data-aos="zoom-in-left"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
              data-aos-duration="600"
            >
              <Animated
                animationIn="bounce"
                animationOut="bounce"
                animationInDuration={3000}
                isVisible={true}
              >
                {/* <a
                  href="https://www.fiverr.com/maryam2580?up_rollout=true"
                  target="_blank"
                >
                  {" "} */}
                  <button className="btn btn-light">Hire Me</button>
                {/* </a> */}
              </Animated>
            </div>



          </div>
        </div>
      </div>
    </section>
  );
}
