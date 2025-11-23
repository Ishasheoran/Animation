import { useState, useEffect } from "react";
import CarouselBlock from "./CarouselBlock";
import "./Carousel3D.css";

// imports...
import img3 from "./assets/img8.webp";
import img2 from "./assets/img7.webp";
import img1 from "./assets/img1.webp";
import img4 from "./assets/img9.webp";

import pic1 from "./assets/img3.webp";
import pic2 from "./assets/img4.webp";
import pic3 from "./assets/img5.webp";
import pic4 from "./assets/img6.webp";

import frm1 from "./assets/frm1.webp";
import frm2 from "./assets/frm2.webp";
import frm3 from "./assets/frm3.webp";
import frm4 from "./assets/frm4.webp";

import pose1 from "./assets/pose1.webp";
import pose2 from "./assets/pose2.webp";
import pose3 from "./assets/pose3.webp";
import pose4 from "./assets/pose4.webp";

import frm11 from "./assets/frm11.webp";
import frm12 from "./assets/frm12.webp";
import frm13 from "./assets/frm13.webp";
import frm14 from "./assets/frm14.webp";
import frm15 from "./assets/frm15.webp";
import frm16 from "./assets/frm16.webp";

import pose11 from "./assets/pose11.webp";
import pose12 from "./assets/pose12.webp";
import pose13 from "./assets/pose13.webp";
import pose14 from "./assets/pose14.webp";

export default function Carousel3D() {
  const images = [img2, img1, img3, img4];
  const pic = [pic1, pic2, pic3, pic4];
  const frames = [frm1, frm2, frm3, frm4];
  const poses = [pose1, pose2, pose3, pose4];
  const pose = [pose11, pose12, pose13, pose14];
  const frame = [frm11, frm12, frm13, frm14, frm15, frm16];

  const [angle, setAngle] = useState(0);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const current = window.scrollY;
      const delta = current - lastScroll;

      setAngle((prev) => prev + delta * 0.3);

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <CarouselBlock title="HAUTE COUTURE NIGHTS — PARIS" images={images} angle={angle} />
      <CarouselBlock title="VOGUE EVOLUTION — NEW YORK CITY" images={pic} angle={angle} />
      <CarouselBlock title="GLAMOUR IN THE DESERT — DUBAI" images={frames} angle={angle} />
      <CarouselBlock title="CHIC COUTURE RUNWAY — MILAN" images={poses} angle={angle} />
      <CarouselBlock title="STYLE SHOWCASE — LONDON" images={frame} angle={angle} distance={500} />
      <CarouselBlock title="FUTURE FASHION FORWARD — TOKYO" images={pose} angle={angle} />
    </>
  );
}
