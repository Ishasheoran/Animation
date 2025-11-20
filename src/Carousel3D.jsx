import img3 from "./assets/img8.webp"
import img2 from "./assets/img7.webp"
import img1 from "./assets/img1.webp"
import img4 from "./assets/img9.webp"
import pic1 from "./assets/img3.webp"
import pic2 from "./assets/img4.webp"
import pic3 from "./assets/img5.webp"
import pic4 from "./assets/img6.webp"
import frm1 from "./assets/frm1.webp"
import frm2 from "./assets/frm2.webp"
import frm3 from "./assets/frm3.webp"
import frm4 from "./assets/frm4.webp"
import pose1 from "./assets/pose1.webp"
import pose2 from "./assets/pose2.webp"
import pose3 from "./assets/pose3.webp"
import pose4 from "./assets/pose4.webp"
import frm11 from "./assets/frm11.webp"
import frm12 from "./assets/frm12.webp"
import frm13 from "./assets/frm13.webp"
import frm14 from "./assets/frm14.webp"
import frm15 from "./assets/frm15.webp"
import frm16 from "./assets/frm16.webp"
import pose11 from "./assets/pose11.webp"
import pose12 from "./assets/pose12.webp"
import pose13 from "./assets/pose13.webp"
import pose14 from "./assets/pose14.webp"
import { useEffect, useState } from "react";
import "./Carousel3D.css";

export default function Carousel3D() {
 const images = [img2, img1, img3, img4];
const pic=[pic1,pic2,pic3,pic4];
const frames=[frm1,frm2,frm3,frm4];
const poses=[pose1,pose2,pose3,pose4];
const pose=[pose11,pose12,pose13,pose14];
const frame=[frm11,frm12,frm13,frm14,frm15,frm16];
  const [angle, setAngle] = useState(0);
  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const current = window.scrollY;
      const delta = current - lastScroll; 

           setAngle(prev => prev + delta * 0.3); 

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

   return (<>
    <div className="carousel-wrapper">
    <h2>HAUTE COUTURE NIGHTS — PARIS</h2>
      <div
        className="carousel"
        style={{ transform: `translateZ(-300px) rotateY(${angle}deg)` }}
      >
        
        {images.map((img, i) => (
          <div
            key={i}
            className="carousel-item"
            style={{ transform: `rotateY(${i * (360 / images.length)}deg) translateZ(380px)` }}
          >
            <img src={img} alt="" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
    <div className="carousel-wrapper">
      <h2>VOGUE EVOLUTION — NEW YORK CITY</h2>
      <div
        className="carousel"
        style={{ transform: `translateZ(-300px) rotateY(${angle}deg)` }}
      >
        {pic.map((img, i) => (
          <div
            key={i}
            className="carousel-item"
            style={{ transform: `rotateY(${i * (360 / images.length)}deg) translateZ(380px)` }}
          >
            <img src={img} alt="" loading="lazy"/>
          </div>
        ))}
      </div>
    </div>
    <div className="carousel-wrapper">
      <h2>GLAMOUR IN THE DESERT — DUBAI</h2>
      <div
        className="carousel"
        style={{ transform: `translateZ(-300px) rotateY(${angle}deg)` }}
      >
        {frames.map((img, i) => (
          <div
            key={i}
            className="carousel-item"
            style={{ transform: `rotateY(${i * (360 / images.length)}deg) translateZ(380px)` }}
          >
            <img src={img} alt="" loading="lazy"/>
          </div>
        ))}
      </div>
    </div>
     <div className="carousel-wrapper">
      <h2>CHIC COURTUR RUNWAY — MILAN</h2>
      <div
        className="carousel"
        style={{ transform: `translateZ(-300px) rotateY(${angle}deg)` }}
      >
        {poses.map((img, i) => (
          <div
            key={i}
            className="carousel-item"
            style={{ transform: `rotateY(${i * (360 / images.length)}deg) translateZ(380px)` }}
          >
            <img src={img} alt="" />
          </div>
        ))}
      </div>
    </div>
    <div className="carousel-wrapper">
       <h2>STYLE SHOWCASE — LONDON</h2>
      <div
        className="carousel"
        style={{ transform: `translateZ(-300px) rotateY(${angle}deg)` }}
      >
        {frame.map((img, i) => (
          <div
            key={i}
            className="carousel-item"
            style={{ transform: `rotateY(${i * (360 / frame.length)}deg) translateZ(500px)` }}
          >
            <img src={img} alt="" loading="lazy"/>
          </div>
        ))}
      </div>
    </div>
        <div className="carousel-wrapper">
          <h2>FUTURE FASHION FORWARD — TOKYO</h2>
      <div
        className="carousel"
        style={{ transform: `translateZ(-300px) rotateY(${angle}deg)` }}
      >
        {pose.map((img, i) => (
          <div
            key={i}
            className="carousel-item"
            style={{ transform: `rotateY(${i * (360 / images.length)}deg) translateZ(380px)` }}
          >
            <img src={img} alt="" loading="lazy"/>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

